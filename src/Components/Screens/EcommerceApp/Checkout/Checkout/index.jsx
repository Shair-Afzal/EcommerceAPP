import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { wp, hp, colors, fontSize, fontFamily, radius } from '../../../../constant';
import Otpinput from '../../../../CustomComp/Otpinput/Otpinput';
import Vector from "../../../../assets/SVG/Vector.svg"
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CheckoutPinScreen = ({ navigation }) => {
  const handlePinChange = (pin) => {
    console.log('Pin Changed:', pin);
  };

  const handlePinFilled = (pin) => {
    console.log('Pin Filled:', pin);
  };
const inset=useSafeAreaInsets()
  return (
    <KeyboardAvoidingView
      style={{...styles.container,paddingTop:inset.top,paddingBottom:inset.bottom,paddingTop:hp(2)}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      
      {/* Header */}
      <View style={styles.headerWrapper}>
               <View style={styles.header}>
                 <TouchableOpacity
                   style={styles.backButton}
                   onPress={() => navigation.goBack()}
                 >
                   <Vector height={hp(5)} width={wp(5)} />
                 </TouchableOpacity>
                 <Text style={styles.headerTitle}>Enter Your Pin</Text>
               </View>
             </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Enter your PIN to confirm payment</Text>

      {/* Otp Input */}
      <View style={styles.otpWrapper}>
        <Otpinput onTextChange={handlePinChange} onFilled={handlePinFilled} />
      </View>

      {/* Continue Button */}
      <CustomButton btnTitle={"Continue"} style={styles.continueBtn}/>
    </KeyboardAvoidingView>
  );
};

export default CheckoutPinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  headerWrapper: { width: '100%' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(10),
    justifyContent: 'space-between',
    width: '65%',
  },
  backButton: {
    height: hp(4),
    width: hp(4),
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.small,
    fontWeight: '500',
    color: '#000000',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: fontSize.avgSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.Black,
    marginTop:hp(4),
    marginBottom: hp(4),
  },
  otpWrapper: {
    alignItems: 'center',
    marginBottom: hp(8),
  },
  continueBtn: {
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius2,
    alignItems: 'center',
    justifyContent: 'center',
    position:"absolute",
    bottom:hp(3),
    alignSelf:"center"
  },
  continueText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
  },
});
