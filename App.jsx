import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Components/redux/store';
import { colors } from './src/Components/constant';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import AppStackNavigator from './src/Components/Navigation/AppStackNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';


const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor,
      }}
    >
      <StatusBar
    
              backgroundColor={colors.DarkWhite}
              barStyle="dark-content"
            />
      <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <AppStackNavigator/>
        
          <Toast />
        </PersistGate>
      </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
