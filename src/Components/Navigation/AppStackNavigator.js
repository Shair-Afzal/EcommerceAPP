import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import Onbonding from '../Screens/Auth/Onbonding'
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import ChangePassword from '../Screens/Auth/ConfirmPassword';
import Home from "../Screens/EcommerceApp/HomeScreens/Home"
import AIAssistantScreen from "../Screens/EcommerceApp/HomeScreens/AiAssistant"
import ProductCategory from "../Screens/EcommerceApp/ProductCategoryScreens/ProductCategory"
import ProductDetails from "../Screens/EcommerceApp/ProductCategoryScreens/ProductDetails"
import ProductSpecification from "../Screens/EcommerceApp/ProductCategoryScreens/ProductSpecifiction"
import ShippingScreen from "../Screens/EcommerceApp/Checkout/Adress"
import CartScreen from '../Screens/EcommerceApp/Checkout/Cart'
import Location from "../Screens/EcommerceApp/Checkout/Location"
import LocationScreen from '../Screens/EcommerceApp/Checkout/Location';
import PaymentMethod from '../Screens/EcommerceApp/Checkout/PaymentMethod';
import PaymentSummaryScreen from '../Screens/EcommerceApp/Checkout/PaymentSummaryScreen';
import CheckoutPinScreen from "../Screens/EcommerceApp/Checkout/Checkout"
import FavouriteScreen from "../Screens/EcommerceApp/ProductCategoryScreens/Favourite"
import MyOrderScreen from "../Screens/EcommerceApp/MyOrders/Orders"
import OrderDetailsScreen from "../Screens/EcommerceApp/MyOrders/OrderDetail"
import OrderReviewScreen from "../Screens/EcommerceApp/MyOrders/Review"
const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Onbonding'
    >
      <Stack.Screen name="HomeScreen" component={BottomTabs}/> 
      <Stack.Screen name="Review" component={OrderReviewScreen}/>
      <Stack.Screen name="orderDetails" component={OrderDetailsScreen }/>
      <Stack.Screen name='Myorder' component={MyOrderScreen}/>
      <Stack.Screen name='Favourite' component={FavouriteScreen}/>
      <Stack.Screen name='CheckoutScreen' component={CheckoutPinScreen}/>
      <Stack.Screen name='PaymentSummary' component={PaymentSummaryScreen} />
      <Stack.Screen name='PaymentMethod' component={PaymentMethod} />
      <Stack.Screen name='location' component={LocationScreen} />
      <Stack.Screen name='Shipping' component={ShippingScreen} />
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name="ProductSpecification" component={ProductSpecification}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails}/>
      <Stack.Screen name="Product" component={ProductCategory}/>
      <Stack.Screen name='AiAssistant' component={AIAssistantScreen}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen
       name="Onbonding" component={Onbonding} />
      <Stack.Screen name="Login" component={Login} 
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name='Forget' component={ForgetPassword}/>
            <Stack.Screen name='Change' component={ChangePassword}/>

    </Stack.Navigator>
  );
};

export default AppStackNavigator;
