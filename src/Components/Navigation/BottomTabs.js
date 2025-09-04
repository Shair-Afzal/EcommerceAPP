import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// Placeholder screens for now
const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const SearchScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search Screen</Text>
  </View>
);

const CartScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cart Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1D4ED8',
        tabBarInactiveTintColor: '#A4A4A4',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
