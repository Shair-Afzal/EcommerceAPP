import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Vector from '../../../assets/SVG/Vector.svg';
import { styles } from './style';
import { colors, hp, wp } from '../../../constant';
import Custominput from '../../../CustomComp/Custominput/Custominput';
import CustomButton from '../../../CustomComp/CustomButton/CustomButton';
import { Formik } from 'formik';
import { changePasswordInitialValues } from '../../../Utils/Validation/Initialvalues';
import { ChangePasswordSchema } from '../../../Utils/Validation/Schema';

const ChangePassword = ({ navigation }) => {
  const [show, setshow] = useState(true);
  const [eye, seteye] = useState(true);
  const insert = useSafeAreaInsets();

  return (
    <Formik
      initialValues={changePasswordInitialValues}
      validationSchema={ChangePasswordSchema}
      onSubmit={values => {
        console.log('Password Changed:', values);
        navigation.navigate('Login'); // or navigate to login/home
      }}
    >
      {({ handleSubmit, values, errors, touched, setFieldValue }) => (
        <View
          style={[
            styles.container,
            {
              paddingTop: insert.top,
              paddingBottom: insert.bottom,
             
            },
          ]}
        >
            <StatusBar
            hidden={false}
            translucent={false}
            backgroundColor={colors.DarkWhite}
            barStyle="dark-content"
          />
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Vector height={hp(5)} width={wp(5)} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Reset Password</Text>
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.greeting}>Set a new password</Text>
            <Text style={styles.welcomeText}>
              Let’s get you back in—just set a new password to{'\n'} continue.
            </Text>

            <Custominput
              Lefticon={true}
              righticon={true}
              icon
              placholder={'New Password'}
              value={values.newPassword}
              onChangeText={text => setFieldValue('newPassword', text)}
            />
            {errors.newPassword && touched.newPassword && (
              <Text style={styles.errortxt}>{errors.newPassword}</Text>
            )}

            <Custominput
              Lefticon={true}
              righticon={true}
              icon
              placholder={'Confirm Password'}
              value={values.confirmPassword}
              onChangeText={text => setFieldValue('confirmPassword', text)}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errortxt}>{errors.confirmPassword}</Text>
            )}

            <View style={styles.rowwrapper}>
              <TouchableOpacity style={styles.rmemberbtn}></TouchableOpacity>
              <Text>Remember me</Text>
            </View>
          </View>

          <CustomButton
            btnTitle={'Change Password'}
            onPress={handleSubmit}
            style={styles.btn}
          />
        </View>
      )}
    </Formik>
  );
};

export default ChangePassword;
