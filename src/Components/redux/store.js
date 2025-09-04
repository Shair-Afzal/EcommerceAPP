import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import onboardingReducer from './slices/onboardingSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['onboarding'], // Only persist onboarding state
};

const persistedOnboardingReducer = persistReducer(persistConfig, onboardingReducer);

export const store = configureStore({
  reducer: {
    onboarding: persistedOnboardingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
