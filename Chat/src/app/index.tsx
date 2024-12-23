import { StyleSheet } from 'react-native';

import { Redirect } from 'expo-router';

export default function HomeScreen() {
    return <Redirect href={'/(auth)/login'} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
