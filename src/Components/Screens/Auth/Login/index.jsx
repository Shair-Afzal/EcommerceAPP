import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './style';
import CustomButton from '../../../CustomComp/CustomButton/CustomButton';
import Custominput from '../../../CustomComp/Custominput/Custominput';
import Vector from '../../../assets/SVG/Vector.svg';
import { hp, wp } from '../../../constant';
import Google from '../../../assets/SVG/Google.svg';
import Apple from '../../../assets/SVG/Apple.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import {loginValidationSchema} from '../../../Utils/Validation/Schema'
import {loginInitialValues} from "../../../Utils/Validation/Initialvalues"


const Login = ({ navigation }) => {
  const [show, setshow] = useState(true);
  const insert = useSafeAreaInsets();

  const handleGoogleLogin = () => {};
  const handleAppleLogin = () => {};

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insert.top,
        paddingBottom: insert.bottom,
        paddingTop: hp(3),
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Login</Text>
        </View>

        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            console.log('Login values:', values);
            navigation.navigate('SignUp'); // replace with actual login logic
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.mainContent}>
              <Text style={styles.greeting}>Hi there!</Text>
              <Text style={styles.welcomeText}>
                Welcome back, Sign in to your account
              </Text>

              {/* Email Input */}
              <Custominput
                righticon
                placholder={'Email'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={{ color: 'red', marginBottom: hp(1) }}>
                  {errors.email}
                </Text>
              )}

              {/* Password Input */}
              <Custominput
                Lefticon
                secureTextEntry={show}
                icon
                righticon
                placholder={'Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                eyepress={() => setshow(!show)}
              />
              {touched.password && errors.password && (
                <Text style={{ color: 'red', marginBottom: hp(1) }}>
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity style={styles.forgotPasswordButton}
              onPress={()=>navigation.navigate("Forget")}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>

              <View style={styles.btnwrapper}>
                <CustomButton btnTitle={'Sign in'} onPress={handleSubmit} />

                <View style={styles.orContainer}>
                  <Text style={styles.orText}>OR</Text>
                </View>

                <View style={styles.socialButtonsContainer}>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={handleGoogleLogin}
                  >
                    <Google height={hp(5)} width={wp(5)} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={handleAppleLogin}
                  >
                    <Apple height={hp(5)} width={wp(5)} />
                  </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                  <Text style={styles.footerText}>Don't have an account? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                  >
                    <Text style={styles.signUpText}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
