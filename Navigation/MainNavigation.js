import Login from "../screen/Login";
import Welcom from "../screen/welcom";
import Register from "../screen/Register";
import ListCoffee from "../screen/ListItem/ListCoffee";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from "../screen/Griditem/Product";
import Setting from "../screen/Setting";
import { Image } from "react-native";
import { icon } from "../conten";
import Profile from "../screen/Profile";
import Chats from "../screen/Chat/chats";
import Messages from "../screen/Chat/Messages";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcom} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="ListCoffee" component={ListCoffee} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={Product} />
      {/* <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} /> */}

    </Stack.Navigator>

  );
}
function MyChats() {
  return (
    <Stack.Navigator initialRouteName="Chats">
      <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
      <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  const tabIcons = [
    {
      name: 'Home',
      icon: icon.home,
    },
    {
      name: 'MyChats',
      icon: icon.chat,
    },
  
    {
      name: 'Profile',
      icon: icon.user,
    },
    {
      name: 'Settings',
      icon: icon.settings,
    },
  ];

  const renderTabIcon = (routeName, focused, color, size) => {
    const { icon } = tabIcons.find((tab) => tab.name === routeName);
    const tintColor = focused ? 'tomato' : 'gray';

    return (
      <Image
        style={{ width: size, height: size, tintColor }}
        source={icon}
        resizeMode="contain"
      />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MyChats"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route.name, focused, color, size),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffffff', // màu nền tabBar
            borderTopWidth: 1, // độ dày đường viền phía trên tabBar
            borderTopColor: 'gray', // màu của đường viền phía trên tabBar
          },
        })}
      >
         <Tab.Screen
          name="Home"
          component={MyStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="MyChats"
          component={MyChats}
          options={{ headerShown: false }}
        />
       
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={Setting}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;