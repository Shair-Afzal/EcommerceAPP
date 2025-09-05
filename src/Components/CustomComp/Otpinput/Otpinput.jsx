import { StyleSheet, View } from 'react-native';
import React from 'react';
import { OtpInput } from "react-native-otp-entry";
import { colors, hp, wp } from '../../constant';

const Otpinput = ({ onTextChange, onFilled }) => {
  return (
    <View style={{ paddingHorizontal: wp(3) }}>
      <OtpInput
        numberOfDigits={4}
        focusColor="green"
        autoFocus={false}
        secureTextEntry={true}
        onTextChange={onTextChange}   // 🔹 now controlled by Formik
        onFilled={onFilled}           // 🔹 now controlled by Formik
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.pinCodeContainer,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
    </View>
  );
};

export default Otpinput;

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  pinCodeContainer: {
    height: hp(8),
    width: "22%",
    backgroundColor: colors.lightGray,
    borderWidth: 0,
  },
  activePinCodeContainer: {
    height: hp(8),
    width: "22%",
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: "rgba(249, 250, 251, 1)",
  },
});
