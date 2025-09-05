import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { styles } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hp, wp } from '../../../constant';
import Vector from '../../../assets/SVG/Vector.svg';
import Custominput from '../../../CustomComp/Custominput/Custominput';
import CustomButton from '../../../CustomComp/CustomButton/CustomButton';
import Google from '../../../assets/SVG/Google.svg';
import Apple from '../../../assets/SVG/Apple.svg';
import { Formik } from "formik";
import { initialValues } from '../../../Utils/Validation/Initialvalues';
import { validationSchema } from '../../../Utils/Validation/Schema';

const SignUp = ({ navigation }) => {
  const insert = useSafeAreaInsets();

  const handleLogin = () => {
    navigation.navigate("Login"); // since you already pass navigation
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    console.log('Apple login');
  };

  return (
    <ScrollView
      style={{
        ...styles.container,
        paddingTop: insert.top,
        paddingBottom: insert.bottom,
        paddingTop: hp(3),
      }}
      showsVerticalScrollIndicator={false}
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
          <Text style={styles.headerTitle}>Sign In</Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form submitted:", values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.mainContent}>
              <Text style={styles.greeting}>Create an account</Text>
              <Text style={styles.welcomeText}>
                Welcome back, Sign up to your account
              </Text>

              <Custominput
                righticon={true}
                fullname={true}
                placholder={"Full Name"}
                value={values.fullName}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
              />
              {touched.fullName && errors.fullName && (
                <Text style={{ color: "red" }}>{errors.fullName}</Text>
              )}

              <Custominput
                righticon={true}
                placholder={"Email"}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              {touched.email && errors.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}

              <Custominput
                righticon={true}
                icon={true}
                Lefticon={true}
                secureTextEntry={true}
                placholder={"Password"}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              {touched.password && errors.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}

              <Custominput
                righticon={true}
                icon={true}
                Lefticon={true}
                secureTextEntry={true}
                placholder={"Confirm Password"}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
              )}

              <CustomButton
                btnTitle={'Sign up'}
                style={styles.btncontainer}
                onPress={handleSubmit}
              />

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
            </View>
          )}
        </Formik>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;
