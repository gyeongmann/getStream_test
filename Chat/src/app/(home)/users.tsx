import UserListItem from '@/src/components/UserListItem';
import { supabase } from '@/src/lib/superbase';
import { useAuth } from '@/src/providers/AuthProvider';
import { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';

export default function UsersScreen() {
    const [users, setUsers] = useState<any>([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchUsers = async () => {
            let { data: profiles, error } = await supabase
                .from('profiles')
                .select('*')
                .neq('id', user?.id); // exclude me
            setUsers(profiles);
        };
        fetchUsers();
    }, []);

    console.log(users);
    return (
        <FlatList
            data={users}
            renderItem={({ item }) => <UserListItem user={item} />}
        />
    );
}
