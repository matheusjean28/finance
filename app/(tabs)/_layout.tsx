import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:"#3d50ffff",
      headerStyle: {
         backgroundColor: "white",
      },
      headerShadowVisible: false, 
      headerTintColor: "#2c252eff",
      
      tabBarStyle: {
        backgroundColor: "white"
      }
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home' , 
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
      }} />
      
      <Tabs.Screen name="about" options={{ title: 'About',
        tabBarIcon: ({focused, color}) => <Ionicons name={ focused?  'information-circle' : 'information-circle'} color={color} size={24} />

       }} />
    </Tabs>
  );
}
