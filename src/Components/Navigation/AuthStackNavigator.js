import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Auth/Login/Login';
import SignUp from '../Screens/Auth/SignUp/SignUp';
import Onbonding from '../Screens/Auth/Onbonding';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onbonding" component={Onbonding}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
