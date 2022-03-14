import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import {styles} from './styles/router';

import Home from './screens/Home';
import Category from './screens/Category';
import Search from './screens/Search';
import History from './screens/History';
import Chat from './screens/Chat';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Forgot from './screens/Forgot';
import Detail from './screens/Detail';
import Payment1 from './screens/Payment/payment1';
import Payment2 from './screens/Payment/payment2';
import Payment3 from './screens/Payment/payment3';

const iconHome = require('./assets/icons/home.png');
const iconHistory = require('./assets/icons/history.png');
const iconChat = require('./assets/icons/chat.png');
const iconProfile = require('./assets/icons/profile.png');

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNav = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
    <Tab.Screen
      name="HomeNav"
      component={HomeNav}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.iconWrapper,
              backgroundColor: focused && '#ffcd611d',
            }}>
            <Image
              source={iconHome}
              resizeMode="contain"
              style={{
                ...styles.iconHome,
                tintColor: focused ? '#ffcd61' : '#ddd',
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="History"
      component={History}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.iconWrapper,
              backgroundColor: focused && '#ffcd611d',
            }}>
            <Image
              source={iconHistory}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused ? '#ffcd61' : '#ddd',
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.iconWrapper,
              backgroundColor: focused && '#ffcd611d',
            }}>
            <Image
              source={iconChat}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused ? '#ffcd61' : '#ddd',
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.iconWrapper,
              backgroundColor: focused && '#ffcd611d',
            }}>
            <Image
              source={iconProfile}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused ? '#ffcd61' : '#ddd',
              }}
            />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Category" component={Category} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Main" component={TabNav} />
      <Stack.Screen name="Payment1" component={Payment1} />
      <Stack.Screen name="Payment2" component={Payment2} />
      <Stack.Screen name="Payment3" component={Payment3} />
    </Stack.Navigator>
  );
};

export default Router;
