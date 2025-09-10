import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  wp,
  hp,
  colors,
  fontSize,
  fontFamily,
  radius,
} from '../../../../constant';

import Vector from '../../../../assets/SVG/Vector.svg';
import Bag from '../../../../assets/SVG/bag.svg';
import Location from '../../../../assets/SVG/location.svg';
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const OrderDetailsScreen = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
      }}
    >
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(3)} width={wp(6)} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Order #ORD-001</Text>

          <TouchableOpacity style={styles.statusBadge}>
            <Text style={styles.statusText}>Active</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        {/* Products */}
        <Text style={styles.sectionTitle}>Products(3)</Text>

        {['Graphite Tiles', 'Brown Tiles', 'Graphite Tiles'].map(
          (item, index) => (
            <>
              <View key={index} style={styles.productRow}>
                <Image
                  source={require('../../../../assets/images/cartimg2.png')}
                  style={styles.productImage}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.productName}>{item}</Text>
                  <Text style={styles.quantity}>Quantity : 20</Text>
                  <Text style={styles.price}>
                    {item === 'Brown Tiles' ? '$ 125.00' : '$ 145.00'}
                  </Text>
                </View>
              </View>
              <View style={styles.separator} />
            </>
          ),
        )}

        {/* Shipping Information */}
        <Text style={{ ...styles.sectionTitle, fontWeight: '600' }}>
          Shipping Information
        </Text>
        <View style={styles.shippingCard}>
          <View style={styles.shippingRow}>
            <Text style={styles.shippingLabel}>Carrier</Text>
            <Text style={styles.shippingValue}>FedEx</Text>
          </View>
          <View style={styles.shippingRow}>
            <Text style={styles.shippingLabel}>Shipping Method</Text>
            <Text style={styles.shippingValue}>Standard</Text>
          </View>
          <View style={styles.shippingRow}>
            <Text style={styles.shippingLabel}>Tracking Number</Text>
            <Text style={styles.shippingValue}>1234***</Text>
          </View>
          <View style={styles.shippingRow}>
            <Text style={styles.shippingLabel}>Estimated Delivery</Text>
            <Text style={styles.shippingValue}>20-09-2025</Text>
          </View>
          <View style={styles.shippingRow}>
            <Text style={styles.shippingLabel}>Weight</Text>
            <Text style={styles.shippingValue}>2.1 lbs</Text>
          </View>
          <View style={styles.shippingRow}>
            <Text style={styles.shippingLabel}>Dimension</Text>
            <Text style={styles.shippingValue}>12” x 12”</Text>
          </View>
        </View>

        {/* Delivery Address */}
        <Text style={{ ...styles.sectionTitle, fontWeight: '600' }}>
          Delivery Address
        </Text>
        <View style={styles.addressCard}>
          <View style={styles.addressRow}>
            <Location height={hp(3.7)} width={wp(8)} />

            <View>
              <Text style={styles.addressTitle}>Home (Andrew Ainlry)</Text>
              <Text style={styles.addressSubtitle}>
                492 7th New York, NY 10034, USA
              </Text>
            </View>
          </View>
        </View>

        {/* Order Summary */}
        <Text style={{ ...styles.sectionTitle, fontWeight: '600' }}>
          Order Summary
        </Text>
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Sub - Total</Text>
            <Text style={styles.summaryValue}>$ 240.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping/Freight</Text>
            <Text style={styles.summaryValue}>$ 25.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount</Text>
            <Text style={styles.summaryValue}>-$ 50.00</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Cost</Text>
            <Text style={styles.totalValue}>$ 190.00</Text>
          </View>
        </View>

        {/* Generate Invoice Button */}
        <CustomButton btnTitle={'Generate Invoice'} style={styles.btn} />
      </ScrollView>
    </View>
  );
};

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  headerWrapper: {
    width: '100%',
    borderColor: colors.headerborder,
    marginBottom: hp(2),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    height: hp(5),
    width: hp(5),
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  statusBadge: {
    backgroundColor: '#E5EDFF',
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.5),
    borderRadius: radius.radius6,
  },
  statusText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.primaryColor,
  },
  sectionTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(1.5),
    marginTop: hp(2),
    fontWeight: '700',
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: hp(2),
    alignItems: 'center',
    marginTop: hp(1),
  },
  productImage: {
    height: hp(10),
    width: wp(20),
    borderRadius: radius.radius1,
    marginRight: wp(3),
  },
  productName: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight: '700',
  },
  quantity: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textSecondaryColor,
    marginVertical: hp(0.5),
  },
  price: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    fontWeight: '700',
  },
  separator: {
    height: 1,
    backgroundColor: colors.greyborder,
    marginVertical: hp(2),
  },
  shippingCard: {
    backgroundColor: colors.DarkWhite,
    borderWidth: 2,
    borderColor: colors.bordergrey,
    borderRadius: radius.radius1,
    padding: wp(4),
  },
  shippingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1.5),
  },
  shippingLabel: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textColor,
  },
  shippingValue: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.lightBlack,
  },
  addressCard: {
    backgroundColor: colors.lightBlue,
    borderRadius: radius.radius6,
    padding: wp(4),
  },
  addressRow: {
    flexDirection: 'row',
    gap: wp(1),
  },
  locationIcon: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: radius.radius5,
    marginRight: wp(3),
  },
  addressTitle: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(0.5),
  },
  addressSubtitle: {
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textColor,
  },
  summaryCard: {
    backgroundColor: colors.DarkWhite,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: radius.radius6,
    padding: wp(4),
    marginTop: hp(1),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1.8),
  },
  summaryLabel: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textColor,
  },
  summaryValue: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.lightBlack,
  },
  discountValue: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.red,
  },
  totalValue: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
  },
  invoiceBtn: {
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius2,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6),
    marginTop: hp(3),
  },
  invoiceBtnText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
  },
  btn: {
    paddingVertical: hp(2),
    marginTop: hp(3),
    borderRadius: radius.radius6,
  },
});
