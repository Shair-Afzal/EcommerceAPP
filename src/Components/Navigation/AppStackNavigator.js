import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Login from '../Screens/Auth/Login/Login';
import SignUp from '../Screens/Auth/SignUp/SignUp';
import Onbonding from '../Screens/Auth/Onbonding';
const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Onbonding' component={Onbonding}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
