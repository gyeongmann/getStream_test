import { Link, router, Stack } from 'expo-router';
import { ChannelList } from 'stream-chat-expo';
import { useAuth } from '@/src/providers/AuthProvider';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View } from 'react-native';

export default function MainTabScreen() {
    const { user } = useAuth();
    return (
        <>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Link href={'/(home)/users'} asChild>
                            <AntDesign
                                name="plus"
                                size={24}
                                color="gray"
                                style={{ marginHorizontal: 15 }}
                            />
                        </Link>
                    ),
                }}
            />
            <ChannelList
                filters={{ members: { $in: [user?.id ?? null] } }}
                onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
            />
        </>
    );
}
