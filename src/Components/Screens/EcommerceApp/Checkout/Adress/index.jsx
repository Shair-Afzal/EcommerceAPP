// ShippingMethodScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Vector from '../../../../assets/SVG/Vector.svg';

import {
  wp,
  hp,
  colors,
  fontSize,
  fontFamily,
} from '../../../../constant'; 
import Custominput from '../../../../CustomComp/Custominput/Custominput';
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';

const Radio = ({ selected }) => (
  <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
    {selected ? <View style={styles.radioInner} /> : null}
  </View>
);

const BulletLine = ({ children }) => (
  <View style={styles.bulletRow}>
    <View style={styles.bullet} />
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const ShippingScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedMethod, setSelectedMethod] = useState('standard');

  return (
    <View style={{...styles.safe,paddingTop:insets.top,paddingBottom:insets.bottom,paddingTop:hp(2)}}>
      <StatusBar
      hidden={false}
      translucent={false}
      backgroundColor={colors.DarkWhite}
      barStyle="dark-content"
    />
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Cart </Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Shipping</Text>

        <Custominput
          Lefticon={true}
          location={true}
          righticon={true}
          forward={true}
          placholder={'Select Location'}
          inputstyle={styles.inputSpacing}
          forwaredpress={()=>navigation.navigate("location")}
        />

        <Text style={styles.sectionTitleNoMargin}>
          Choose Delivery Method
        </Text>

        {/* Option 1 */}
        <TouchableOpacity
          style={styles.optionContainer}
          activeOpacity={0.9}
          onPress={() => setSelectedMethod('standard')}
        >
          <View style={styles.optionRow}>
            <Radio selected={selectedMethod === 'standard'} />
            <Text style={styles.optionTitle}>Standard Freight Delivery</Text>
          </View>

          <View style={styles.optionDetails}>
            <BulletLine>ETA: Aug 20–23</BulletLine>
            <BulletLine>Cost: $75</BulletLine>
          </View>
        </TouchableOpacity>

        {/* Option 2 */}
        <TouchableOpacity
          style={styles.optionContainer}
          activeOpacity={0.9}
          onPress={() => setSelectedMethod('pickup')}
        >
          <View style={styles.optionRow}>
            <Radio selected={selectedMethod === 'pickup'} />
            <Text style={styles.optionTitle}>Pickup from Warehouse</Text>
          </View>

          <View style={styles.optionDetails}>
            <BulletLine>Nearest: XYZ Logistics Center (2.3 km)</BulletLine>
            <BulletLine>Cost: Free</BulletLine>
          </View>
        </TouchableOpacity>

        <View style={styles.separator} />
        <View style={styles.spacer} />
      </ScrollView>

      {/* Bottom button */}
      <View
        style={[
          styles.bottomContainer,
          { paddingBottom: Math.max(insets.bottom, hp(2)) },
        ]}
      >
        <CustomButton btnTitle={"Continue to payment"} onPress={()=>navigation.navigate("PaymentMethod")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
    paddingHorizontal: wp(4),
  },

  scrollContent: {},

  sectionTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    marginTop: hp(3),
    color: colors.secondaryColor,
  },
  sectionTitleNoMargin: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    marginTop: hp(0),
    color: colors.secondaryColor,
  },

  inputSpacing: {
    marginTop: hp(2),
  },

  spacer: {
    height: hp(25),
  },

  optionContainer: {
    marginTop: hp(2.5),
    paddingBottom: hp(1),
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioOuter: {
    width: wp(3.5),
    height: wp(3.5),
    borderRadius: wp(6.5),
    borderWidth: wp(0.6),
    borderColor: '#C9CED6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3.5),
  },
  radioOuterSelected: {
    borderColor: colors.primaryColor,
  },
  radioInner: {
    width: wp(1.5),
    height: wp(1.5),
    borderRadius: wp(3.2),
    backgroundColor: colors.primaryColor,
  },

  optionTitle: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.small,
    color: colors.standardtextcolor,
  },

  optionDetails: {
    marginTop: hp(1),
    marginLeft: wp(10),
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  bullet: {
    width: wp(1.5),
    height: wp(1.5),
    borderRadius: wp(1.5),
    backgroundColor: colors.darkestgrey,
    marginRight: wp(2),
  },
  bulletText: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.regSmall,
    color: colors.textColor,
  },

  separator: {
    height: hp(0.18),
    backgroundColor: colors.headerborder,
    marginTop: hp(1.6),
  },

  bottomContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: wp(4),
    backgroundColor: colors.DarkWhite,
    paddingTop: hp(1.5),
    borderTopWidth: 0,
  },

  headerWrapper: { width: '100%' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(1),
    justifyContent: 'space-between',
    width: '60%',
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
});

export default ShippingScreen;
