import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsNavigator() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title:'Message', tabBarIcon: ({size, color}) => (
                <Entypo name="chat" size={size} color={color}/>
            )}}/>
            <Tabs.Screen name="profile" options={{title:'Profile', tabBarIcon: ({size, color}) => (
                <AntDesign name="user" size={size} color={color} />
            )}}/>
        </Tabs>
    )
}