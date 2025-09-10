import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, hp, radius, wp } from '../constant';
import HomeIcon from '../../Components/assets/SVG/Home.svg';
import Category from '../../Components/assets/SVG/Category.svg';
import Notification from '../../Components/assets/SVG/Notification.svg';
import Cart from '../../Components/assets/SVG/Cart.svg';
import Home from '../Screens/EcommerceApp/HomeScreens/Home';
import AIAssistantScreen from '../Screens/EcommerceApp/HomeScreens/AiAssistant';
import ProductCategory from "../Screens/EcommerceApp/ProductCategoryScreens/ProductCategory"
import ProductDetails from "../Screens/EcommerceApp/ProductCategoryScreens/ProductDetails"
import ProductSpecification from "../Screens/EcommerceApp/ProductCategoryScreens/ProductSpecifiction"
import LocationScreen from '../Screens/EcommerceApp/Checkout/Location';
import PaymentMethod from '../Screens/EcommerceApp/Checkout/PaymentMethod';
import PaymentSummaryScreen from '../Screens/EcommerceApp/Checkout/PaymentSummaryScreen';
import ShippingScreen from "../Screens/EcommerceApp/Checkout/Adress"
import CartScreen from '../Screens/EcommerceApp/Checkout/Cart'
import CheckoutPinScreen from '../Screens/EcommerceApp/Checkout/Checkout';
import OrderDetailsScreen from '../Screens/EcommerceApp/MyOrders/OrderDetail';
import OrderReviewScreen from '../Screens/EcommerceApp/MyOrders/Review';
import MyOrderScreen from '../Screens/EcommerceApp/MyOrders/Orders';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ Dummy reusable screen
const DummyScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ fontSize: 18, color: '#333' }}>{route.name} Screen</Text>
  </View>
);

// ✅ Home stack inside same file
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={Home} />
      {/* <Stack.Screen name='AiScreen' component={AIAssistantScreen}/> */}
    </Stack.Navigator>
  );
};
const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductCategory" component={ProductCategory} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ProductSpecification" component={ProductSpecification} />
    </Stack.Navigator>
  );
};
const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartMain" component={CartScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="PaymentSummary" component={PaymentSummaryScreen} />
      <Stack.Screen name="Checkout" component={CheckoutPinScreen}/>
    </Stack.Navigator>
  );
};
const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyOrder" component={MyOrderScreen} />
      <Stack.Screen name="OrderReview" component={OrderReviewScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
};

const Bottomtab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabbarstyle,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'HomeStack') {
            return (
              <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View
                  style={{
                    height: hp(0.7),
                    position: 'absolute',
                    top: -hp(0.8),
                    borderBottomLeftRadius: radius.radius1,
                    borderBottomRightRadius: radius.radius1,
                    backgroundColor: colors.primaryColor,
                    width: wp(13),
                  }}
                />
                <HomeIcon width={18} height={18} fill={focused ? colors.Primary : '#A4A4A4'} />
              </View>
            );
          } else if (route.name === 'Category') {
            return <Category width={18} height={18} fill={focused ? colors.Primary : '#A4A4A4'} />;
          } else if (route.name === 'Order') {
            return <Notification width={18} height={18} fill={focused ? colors.Primary : '#A4A4A4'} />;
          } else if (route.name === 'Cart') {
            return <Cart width={18} height={18} fill={focused ? colors.Primary : '#A4A4A4'} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Category" component={CategoryStack} />
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Cart" component={CartStack} />

    </Tab.Navigator>
  );
};

export default Bottomtab;

const styles = StyleSheet.create({
  tabbarstyle: {
    height: hp(6),
    backgroundColor: colors.DarkWhite,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
});
