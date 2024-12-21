import { router } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import { Channel as ChannelType } from 'stream-chat';
import {
    Channel,
    ChannelList,
    MessageInput,
    MessageList,
} from 'stream-chat-expo';

export default function MainTabScreen() {
    const [channel, setChannel] = useState<ChannelType>();

    if (channel) {
        return (
            <Channel channel={channel}>
                <MessageList />
                <MessageInput />
            </Channel>
        );
    }

    return (
        <ChannelList
            onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
        />
    );
}
