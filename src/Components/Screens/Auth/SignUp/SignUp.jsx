import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { styles } from './index';

const SignUp = ({ onNavigateToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      console.log('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement actual signup logic here
      console.log('Signup attempt with:', { fullName, email, password, confirmPassword });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // After successful signup, navigate to main app
      console.log('Signup successful! Navigate to main app');
      
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    if (onNavigateToLogin) {
      onNavigateToLogin();
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    console.log('Apple login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          {/* Header with back button */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={handleLogin}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Sign Up</Text>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Greeting */}
            <Text style={styles.greeting}>Create an account</Text>
            <Text style={styles.welcomeText}>Welcome back, Sign up to your account</Text>

            {/* Form */}
            <View style={styles.form}>
              {/* Full Name Input */}
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputIcon}>👤</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="#999"
                    value={fullName}
                    onChangeText={setFullName}
                    autoCapitalize="words"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Email Input */}
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <Image 
                    source={require('../../../assets/images/social/email.png')}
                    style={styles.emailIcon}
                    resizeMode="contain"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <Image 
                    source={require('../../../assets/images/social/lock.png')}
                    style={styles.lockIcon}
                    resizeMode="contain"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Image 
                      source={require('../../../assets/images/social/eye.png')}
                      style={styles.eyeIconImage}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Confirm Password Input */}
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <Image 
                    source={require('../../../assets/images/social/lock.png')}
                    style={styles.lockIcon}
                    resizeMode="contain"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#999"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Image 
                      source={require('../../../assets/images/social/eye.png')}
                      style={styles.eyeIconImage}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity
                style={[styles.signUpButton, isLoading && styles.signUpButtonDisabled]}
                onPress={handleSignUp}
                disabled={isLoading}
              >
                <Text style={styles.signUpButtonText}>
                  {isLoading ? 'Signing Up...' : 'Sign up'}
                </Text>
              </TouchableOpacity>

              {/* OR Separator */}
              <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.orLine} />
              </View>

              {/* Social Login Buttons */}
              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                  <Image 
                    source={require('../../../assets/images/social/google.png')}
                    style={styles.socialButtonIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
                  <Image 
                    source={require('../../../assets/images/social/apple.png')}
                    style={styles.socialButtonIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
