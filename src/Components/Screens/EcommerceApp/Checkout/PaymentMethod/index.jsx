import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { wp, hp, colors, fontSize, fontFamily, radius } from '../../../../constant';
import Vector from '../../../../assets/SVG/Vector.svg';
import Paypal from "../../../../assets/SVG/paypal.svg";
import Apple from "../../../../assets/SVG/Apple.svg";
import Google from "../../../../assets/SVG/Google.svg";
import Mastercard from "../../../../assets/SVG/mastercard.svg";
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PaymentMethod = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const paymentOptions = [
    { id: 'paypal', name: 'PayPal', icon: <Paypal height={hp(4)} width={wp(5)} /> },
    { id: 'apple', name: 'Apple Pay', icon: <Apple height={hp(4)} width={wp(5)} /> },
    { id: 'google', name: 'Google Pay', icon: <Google height={hp(4)} width={wp(5)} /> },
    { id: 'master', name: 'MasterCard', icon: <Mastercard height={hp(4)} width={wp(5)} /> },
  ];
  const inset=useSafeAreaInsets()

  return (
    <View style={{...styles.container,paddingTop:inset.top,paddingBottom:inset.bottom,paddingTop:hp(2)}}>
      <View style={{ paddingHorizontal: wp(4) }}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Vector height={hp(5)} width={wp(5)} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Payment Methods</Text>
          </View>
        </View>

        <Text style={styles.subHeader}>Select the payment method</Text>

        {/* Payment Options */}
        {paymentOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionWrapper}
            onPress={() => setSelected(option.id)}
            activeOpacity={0.8}
          >
            <View style={styles.optionContent}>
              {option.icon}
              <Text style={styles.optionText}>{option.name}</Text>
            </View>
            <View style={[styles.radioOuter, selected === option.id && styles.radioOuterActive]}>
              {selected === option.id && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomButtonWrapper}>
        <CustomButton btnTitle={"Continue"} onPress={()=>navigation.navigate('PaymentSummary')} />
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
    paddingTop: hp(2),
  },
  headerWrapper: { width: '100%' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(1),
    justifyContent: 'space-between',
    width: '70%',
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
  subHeader: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.regular,
    color: colors.Black,
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    fontWeight: '600',
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: radius.radius6,
    paddingVertical: hp(1.3),
    paddingHorizontal: wp(4),
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: hp(3),
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3),
  },
  optionText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.Black,
  },

  // Radio Button
  radioOuter: {
    height: hp(2.3),
    width: hp(2.3),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterActive: {
    borderColor: colors.primaryColor,
  },
  radioInner: {
    height: hp(1.4),
    width: hp(1.4),
    borderRadius: 50,
    backgroundColor: colors.primaryColor,
  },

  // Bottom Button Wrapper (moved inline here)
  bottomButtonWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(16),
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopRightRadius: radius.radius2,
    borderTopLeftRadius: radius.radius2,
    borderColor: colors.greyborder,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(4),
  },

  signinButton: {
    marginTop: 'auto',
    marginBottom: hp(3),
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius6,
    paddingVertical: hp(2.2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
  },
});
