import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance('uu3fj3dn6sn7');

export default function HomeLayout() {
    useEffect(() => {
        const connect = async () => {
            await client.connectUser(
                {
                    id: 'gyeongmann',
                    name: 'ddabong',
                    image: 'https://i.imgur.com/fR9Jz14.png',
                },
                client.devToken('gyeongmann'),
            );
            /**
             *  Channel created using a channel id
             */
            // const channel = client.channel('messaging', 'ddabongs', {
            //     name: 'Tabom',
            // });
            // await channel.watch();
        };

        connect();
    });
    return (
        <OverlayProvider>
            <Chat client={client}>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </Chat>
        </OverlayProvider>
    );
}
