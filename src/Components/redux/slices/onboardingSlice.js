import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  isCompleted: false,
  hasSeenOnboarding: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < 3) {
        state.currentStep += 1;
      } else {
        state.isCompleted = true;
        state.hasSeenOnboarding = true;
      }
    },
    previousStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    completeOnboarding: (state) => {
      state.isCompleted = true;
      state.hasSeenOnboarding = true;
    },
    resetOnboarding: (state) => {
      state.currentStep = 1;
      state.isCompleted = false;
      state.hasSeenOnboarding = false;
    },
  },
});

export const { nextStep, previousStep, completeOnboarding, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;
