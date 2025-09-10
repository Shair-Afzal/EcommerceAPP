import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  wp,
  hp,
  colors,
  radius,
  fontSize,
  fontFamily,
} from '../../../../constant';
import Vector from '../../../../assets/SVG/Vector.svg';
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import Mastercard from '../../../../assets/SVG/mastercard.svg';
import CustomSelector from '../../../../CustomComp/CustomSelector/CustomSelector';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BACK_ICON =
  'https://img.icons8.com/ios-glyphs/90/000000/chevron-left.png';

const PaymentSummaryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
        paddingTop: hp(2),
      }}
    >
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Review Summary</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Service Details Section */}
        <View style={styles.section}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Services</Text>
            <Text style={styles.detailValue}>House Cleaning</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Category</Text>
            <Text style={styles.detailValue}>Cleaning</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Time</Text>
            <Text style={styles.detailValue}>10:00 AM</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>Dec 23, 2024</Text>
          </View>

          <View style={[styles.detailRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.detailLabel}>Working Hours</Text>
            <Text style={styles.detailValue}>2 hours</Text>
          </View>
        </View>

        <CustomSelector
          data={data}
          value={selected}
          onChange={setSelected}
          placeholder={'House Cleaning Details'}
        />

        {/* Pricing Section */}
        <View style={styles.section}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>House Cleaning</Text>
            <Text style={styles.detailValue}>$125.00</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, styles.promoText]}>Promo</Text>
            <Text style={[styles.detailValue, styles.promoText]}>-$37.50</Text>
          </View>

          <View
            style={[
              styles.detailRow,
              {
                borderTopWidth: 1,
                marginTop: hp(1),
                borderColor: colors.greyborder,
                paddingVertical: hp(2),
              },
            ]}
          >
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$87.50</Text>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.paymentSection}>
          <View style={styles.paymentRow}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: wp(2) }}
            >
              <Mastercard height={hp(4)} width={wp(7)} />
              <Text style={styles.paymentText}>... ... ... ... 4679</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.bottomButtonWrapper}>
        <CustomButton btnTitle={'Continue'} onPress={()=>navigation.navigate("Checkout")}/>
      </View>
    </View>
  );
};

export default PaymentSummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: wp(4),
    // paddingBottom:hp(145)
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
  headerRightPlaceholder: {
    width: wp(10),
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: radius.radius1,
    padding: wp(4),
    marginTop: hp(1),
    elevation: 5,
  },
  sectionTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(2),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(0.7),
  },
  detailLabel: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.DMreg,
    color: colors.textSecondaryColor,
  },
  detailValue: {
    fontSize: fontSize.regularsize,
    fontFamily: fontFamily.DMreg,
    color: colors.Black,
    fontWeight: '600',
  },
  promoText: {
    color: colors.primaryColor,
  },
  totalLabel: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  totalValue: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
  },
  paymentSection: {
    backgroundColor: colors.white,
    borderRadius: radius.radius1,
    padding: wp(3),
    marginTop: hp(1),
    marginBottom: hp(2),
    elevation: 5,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.Black,
  },
  changeText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.primaryColor,
  },
  buttonContainer: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
    paddingTop: hp(1),
    borderTopWidth: 1,
    borderTopColor: colors.greyborder,
  },
  continueButton: {
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius1,
    paddingVertical: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.white,
  },
  bottomButtonWrapper: {
    position: 'absolute',
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
});
