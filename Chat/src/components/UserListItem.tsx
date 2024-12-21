import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { supabase } from '../lib/superbase';
import { useChatContext } from 'stream-chat-expo';
import { useAuth } from '../providers/AuthProvider';
import { router } from 'expo-router';

const UserListItem = ({ user }: any) => {
    const { client } = useChatContext();
    const { user: me } = useAuth();

    const onPress = async () => {
        const channel = client.channel('messaging', {
            members: [me?.id, user.id],
        });
        await channel.watch();
        router.replace(`/(home)/channel/${channel.cid}`);
    };
    // console.log('userListime:', user);

    const publicUrl = supabase.storage
        .from('avatars')
        .getPublicUrl(user.avatar_url)?.data?.publicUrl;

    return (
        <Pressable onPress={onPress}>
            <View
                style={{
                    padding: 15,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 1,
                }}
            >
                <Image
                    source={{ uri: publicUrl }}
                    style={{
                        width: 50, // 원하는 크기로 설정
                        height: 50,
                        borderRadius: 25, // 원형으로 만들기
                        marginBottom: 10,
                        marginRight: 20,
                    }}
                />
                <Text style={{ fontWeight: '600' }}>{user.username}</Text>
            </View>
        </Pressable>
    );
};

export default UserListItem;
