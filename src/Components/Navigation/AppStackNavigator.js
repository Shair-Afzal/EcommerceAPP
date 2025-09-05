import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import Onbonding from '../Screens/Auth/Onbonding'
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import ChangePassword from '../Screens/Auth/ConfirmPassword';
const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onbonding" component={Onbonding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name='Forget' component={ForgetPassword}/>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
            <Stack.Screen name='Change' component={ChangePassword}/>

    </Stack.Navigator>
  );
};

export default AppStackNavigator;
