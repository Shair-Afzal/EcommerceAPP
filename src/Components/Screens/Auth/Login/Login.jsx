import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView
} from 'react-native';
import { styles } from './index';
import CustomButton from '../../../CustomComp/CustomButton/CustomButton'
import Custominput from "../../../CustomComp/Custominput/Custominput"
import Vector from "../../../assets/SVG/Vector.svg"
import { hp, wp } from '../../../constant';
import Google from '../../../assets/SVG/Google.svg'
import Apple from '../../../assets/SVG/Apple.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      // Show error message
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement actual login logic here
      console.log('Login attempt with:', { email, password });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // After successful login, navigate to main app
      // For now, we'll just log success
      console.log('Login successful! Navigate to main app');
      
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // TODO: Navigate to forgot password screen
    console.log('Navigate to ForgotPassword');
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    // TODO: Implement Apple login
    console.log('Apple login');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
          {/* Header with back button */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Vector height={hp(5)} width={wp(5)}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Login</Text>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Greeting */}
            <Text style={styles.greeting}>Hi there!</Text>
            <Text style={styles.welcomeText}>Welcome back, Sign in to your account</Text>

            {/* Form */}
              {/* Email Input */}
              <Custominput righticon={true} />

             <Custominput Lefticon={true} secureTextEntry={true}/>
             

              {/* Forgot Password */}
              <TouchableOpacity
                style={styles.forgotPasswordButton}
                // onPress={handleForgotPassword}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>

               <View style={{position:"absolute",bottom:hp(5)}}>
              <CustomButton btnTitle={"Sign in"}/>

              {/* OR Separator */}
              <View style={styles.orContainer}>
                
                <Text style={styles.orText}>OR</Text>

              </View>


              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                  <Google height={hp(5)} width={wp(5)}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
                  <Apple height={hp(5)} width={wp(5)}/>
                </TouchableOpacity>
              </View>
              </View>
           
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
