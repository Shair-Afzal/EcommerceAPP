import 'react-native-gesture-handler';
import 'react-native-reanimated';  
import React, { useState, useRef } from "react";
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import Toast from "react-native-toast-message";
import LocationBottomSheet from "./src/Components/CustomComp/LocationBottomsheet/LocationBottomSheet";
import { persistor, store } from "./src/Components/redux/store";
import { colors } from "./src/Components/constant";
import AppStackNavigator from "./src/Components/Navigation/AppStackNavigator"

const App = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef(null);

  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
    
    // If you want to programmatically control the bottom sheet
    if (bottomSheetRef.current) {
      if (isBottomSheetVisible) {
        bottomSheetRef.current.close();
      } else {
        bottomSheetRef.current.expand();
      }
    }
  };


  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         
            
            
            <NavigationContainer>
             
          <AppStackNavigator/>
              
            </NavigationContainer>
           
            
            <Toast />
          
      </PersistGate>
    </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;