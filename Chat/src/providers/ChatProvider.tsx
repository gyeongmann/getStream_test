import { PropsWithChildren, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';
import { useAuth } from './AuthProvider';
import { supabase } from '../lib/superbase';

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY!);

export default function ChatProvider({ children }: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false);
    const { user, profile } = useAuth();
    // console.log(user);

    useEffect(() => {
        if (!profile) {
            return;
        }
        const connect = async () => {
            await client.connectUser(
                {
                    id: profile.id,
                    name: profile.username,
                    image: supabase.storage
                        .from('avatars')
                        .getPublicUrl(profile.avatar_url).data.publicUrl,
                },
                client.devToken(profile.id),
            );
            setIsReady(true);

            // const channel = client.channel('messaging', 'ddabongs', {
            //     name: 'Tabom',
            // });
            // await channel.watch();
        };

        connect();

        return () => {
            if (isReady) {
                client.disconnectUser();
            }
            setIsReady(false);
        };
    }, [profile?.id]);

    if (!isReady) {
        return <ActivityIndicator />;
    }

    return (
        <OverlayProvider>
            <Chat client={client}>{children}</Chat>
        </OverlayProvider>
    );
}
