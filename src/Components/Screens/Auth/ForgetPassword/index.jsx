import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import style, { styles } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hp, wp } from '../../../constant';
import Vector from '../../../assets/SVG/Vector.svg';
import Message from '../../../assets/SVG/Message.svg';
import Arrow from '../../../assets/SVG/btnarrow.svg';
import CustomButton from '../../../CustomComp/CustomButton/CustomButton';
import Otpinput from '../../../CustomComp/Otpinput/Otpinput';
import { Formik } from 'formik';
import { OtpSchema } from '../../../Utils/Validation/Schema';

const ForgetPassword = ({ navigation }) => {
  const insert = useSafeAreaInsets();
  const [step, setStep] = useState(1);
  const[select,setselect]=useState("sms")

  

  return (
    <Formik
      initialValues={{ otp: '' }}
      validationSchema={OtpSchema}
      onSubmit={(values) => {
        console.log("Submitted OTP:", values.otp);
        // next navigation here
      }}
    >
      {({ handleSubmit, setFieldValue, values, errors, touched }) => (
        <View
          style={[
            styles.container,
            {
              paddingTop: insert.top,
              paddingBottom: insert.bottom,
              paddingTop: hp(3),
            },
          ]}
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Vector height={hp(5)} width={wp(5)} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Forgot Password</Text>
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.greeting}>
              {step === 1 ? 'Select Details' : 'Verify OTP'}
            </Text>
            {step == 1 ? (
              <Text style={styles.welcomeText}>
                Select which contact details should we use to reset your password
              </Text>
            ) : (
              <Text style={styles.welcomeText}>
                We sent an otp to <Text style={styles.emailtxt}>jonathan@email.com</Text>.
                Enter it below to continue.
              </Text>
            )}

            {/* Step 1: Select contact */}
            {step === 1 && (
              <>
                <TouchableOpacity style={{...styles.selectconatiner,borderWidth:select=="sms"?1:0}}
                onPress={()=>setselect("sms")}
                >
                  <View style={styles.rowwrapper}>
                    <View style={styles.elipsecontainer}>
                      <Message height={hp(5)} width={wp(5)} />
                    </View>
                    <View>
                      <Text style={styles.smstxt}>Send via sms</Text>
                      <Text style={styles.subdescription}>+1 234 5****99</Text>
                    </View>
                  </View>
                  <Arrow height={hp(5)} width={wp(5)} />
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.selectconatiner,borderWidth:select=="mail"?1:0}}
                onPress={()=>setselect('mail')}
                >
                  <View style={styles.rowwrapper}>
                    <View style={styles.elipsecontainer}>
                      <Message height={hp(5)} width={wp(5)} />
                    </View>
                    <View>
                      <Text style={styles.smstxt}>Send via mail</Text>
                      <Text style={styles.subdescription}>and****ly@domain.com</Text>
                    </View>
                  </View>
                  <Arrow height={hp(5)} width={wp(5)} />
                </TouchableOpacity>
              </>
            )}

            {/* Step 2: OTP */}
            {step === 2 && (
              <>
                <Otpinput
                  onTextChange={(text) => setFieldValue('otp', text)} // 🔹 bind formik
                  onFilled={(text) => setFieldValue('otp', text)}     // 🔹 bind formik
                />
                {errors.otp && touched.otp && (
                  <Text style={{ color: 'red', marginTop: hp(1) }}>{errors.otp}</Text>
                )}

                <View style={styles.resendcontainer}>
                  <Text style={styles.rensedtxt}>Resend available 00:00 in seconds. </Text>
                  <TouchableOpacity>
                    <Text style={styles.emailtxt}>Resend OTP</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>

          <CustomButton
            btnTitle={step === 1 ? 'Continue' : 'Verify OTP'}
            style={{ marginBottom: hp(2) }}
            onPress={() => {
              if (step === 1) {
      if (select === "sms") {
        setStep(2);
      } else if (select === "mail") {
        navigation.navigate("Change");
      }
    } else {
      handleSubmit();
      if (!errors.otp && values.otp) {
        navigation.navigate("Change");
      }
    }
            }}
          />
        </View>
      )}
    </Formik>
  );
};

export default ForgetPassword;
