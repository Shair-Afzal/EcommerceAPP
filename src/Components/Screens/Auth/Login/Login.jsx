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

 

  

  const handleGoogleLogin = () => {
   
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    
    console.log('Apple login');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
          
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Vector height={hp(5)} width={wp(5)}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Login</Text>
          </View>

          
          <View style={styles.mainContent}>
           
            <Text style={styles.greeting}>Hi there!</Text>
            <Text style={styles.welcomeText}>Welcome back, Sign in to your account</Text>

            
              <Custominput righticon={true} />

             <Custominput Lefticon={true} secureTextEntry={true} icon righticon/>
             

              <TouchableOpacity
                style={styles.forgotPasswordButton}
               
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>

               <View style={{marginTop:hp(5)}}>
              <CustomButton btnTitle={"Sign in"}/>

            
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
              <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
              </View>
           
          </View>

          
          
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
