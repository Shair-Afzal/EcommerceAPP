import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {
  wp,
  hp,
  colors,
  radius,
  fontSize,
  fontFamily,
} from '../../../../constant';
import Vector from '../../../../assets/SVG/Vector.svg';
import Marker from '../../../../assets/SVG/Marker.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LocationScreen = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: inset.top,
        paddingTop:hp(2)
      }}
    >
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Address/ Location </Text>
        </View>
      </View>
      <View style={styles.mapWrapper}>
        <Image
          source={require('../../../../assets/images/Map.png')}
          style={styles.image}
        />
        <Marker height={hp(10)} width={wp(10)} style={styles.marker} />
      </View>
      {/* Static bottom panel like the design */}
      <View style={styles.bottomPanel}>
        <View style={styles.panelHeader}>
          <Text style={styles.panelTitle}>Location Details</Text>
        </View>
        <View style={styles.panelContent}>
          <Text style={styles.label}>Address</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.placeholderText}>267 New Avenue Park, New York</Text> {/* Static text; replace with TextInput if editable */}
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
  },
  headerWrapper: { width: '100%', paddingHorizontal: wp(4) },
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
  mapWrapper: {
    flex: 1,
    position: 'relative',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  marker: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -wp(4) }, { translateY: -hp(4) }],
  },
  // New styles for static bottom panel
  bottomPanel: {
    backgroundColor: colors.DarkWhite, // Or white for exact match
    borderTopLeftRadius: radius.radius3,
    borderTopRightRadius: radius.radius3,
    // paddingBottom: inset.bottom,
    maxHeight: hp(40), // Limit height like 40% snap point
  },
  panelHeader: {
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.bordergrey,
  },
  panelTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  panelContent: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  label: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(1),
  },
  inputWrapper: {
    backgroundColor: colors.lightGray,
    borderRadius: radius.radius2,
    borderWidth: 1,
    borderColor: colors.inputborder,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    marginBottom: hp(3),
    justifyContent: 'center', // For static text
  },
  placeholderText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textColor, // Gray for placeholder look
  },
  continueButton: {
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(1.8),
  },
  continueButtonText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
  },
});