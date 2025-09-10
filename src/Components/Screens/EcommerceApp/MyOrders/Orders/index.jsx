import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { wp, hp, colors, radius, fontSize, fontFamily } from '../../../../constant';
import Vector from '../../../../assets/SVG/Vector.svg';
import Bag from "../../../../assets/SVG/bag.svg"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MyOrderScreen = ({ navigation }) => {
  const data = [
    {
      id: '1',
      orderId: 'Order #ORD-001',
      total: '03',
      price: '$ 45.00',
      status: 'Active',
      image:
        require("../../../../assets/images/caetimg.png"),
    },
    {
      id: '2',
      orderId: 'Order #ORD-001',
      total: '02',
      price: '$ 45.00',
      status: 'Pending',
      image:
        require("../../../../assets/images/caetimg.png"),
    },
    {
      id: '3',
      orderId: 'Order #ORD-001',
      total: '02',
      price: '$ 45.00',
      status: 'Received',
      image:
        require("../../../../assets/images/caetimg.png"),
      showReviewBtn: true,
      reviewed: false,
    },
    {
      id: '4',
      orderId: 'Order #ORD-001',
      total: '02',
      price: '$ 45.00',
      status: 'Received',
      image:
        require("../../../../assets/images/caetimg.png"),
      showReviewBtn: true,
      reviewed: true,
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return { color: colors.primaryColor, bg: colors.lightBlue };
      case 'Pending':
        return { color: colors.primaryColor, bg: colors.lightBlue };
      case 'Received':
        return { color: 'green', bg:colors.green };
      default:
        return { color: colors.grey, bg: colors.lightGray };
    }
  };

  const renderItem = ({ item }) => {
    const statusStyle = getStatusStyle(item.status);

    return (
      <View>
        <View style={{...styles.card,alignItems:item.showReviewBtn?"flex-start":"center"}}>
          {/* Product Image */}
          <Image source={item.image} style={styles.image} />

          {/* Order Info */}
          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Text style={styles.orderId}>{item.orderId}</Text>

              {/* Status Badge */}
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: statusStyle.bg },
                ]}>
                <Text
                  style={[
                    styles.statusText,
                    { color: statusStyle.color },
                  ]}>
                  {item.status}
                </Text>
              </View>
            </View>

            <Text style={styles.total}>Total : {item.total}</Text>
            <Text style={styles.price}>{item.price}</Text>

            {/* Review Button */}
             {item.showReviewBtn && (
              <TouchableOpacity
                style={[
                  styles.reviewBtn,
                  {
                    backgroundColor: item.reviewed
                      ? colors.darkgrey
                      : colors.primaryColor,
                  },
                ]}
                onPress={()=>navigation.navigate("OrderDetailsScreen")}
                >
                <Text style={styles.reviewBtnText}>
                  {item.reviewed ? 'Reviewed' : 'Review'}
                </Text>
              </TouchableOpacity>
            )}
           
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator} />
      </View>
    );
  };
  const inset=useSafeAreaInsets();

  return (
    <View style={{...styles.container,paddingTop:inset.top,paddingBottom:inset.bottom}}>
      {/* Header */}
      <View style={styles.headerWrapper}>
              <View style={styles.header}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}
                >
                  <Vector height={hp(6)} width={wp(6)} />
                </TouchableOpacity>
                 <Text style={styles.headerTitle}>My Wishlist</Text>
                <TouchableOpacity style={styles.iconButton}>
                  <Bag height={hp(6)} width={wp(6)} />
                </TouchableOpacity>
              </View>
            </View>

      {/* Orders List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: hp(5) }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingTop: hp(2),
    paddingHorizontal:wp(4)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginBottom: hp(3),
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  iconBtn: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: wp(5),
    width: wp(5),
  },
  card: {
    flexDirection: 'row',
    marginBottom: hp(3),
    alignItems: "center",
    marginTop:hp(1)
  },
  image: {
    height: hp(12),
    width: wp(25),
    borderRadius: radius.radius1,
    marginRight: wp(3),
  },
  infoContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight:"700"
  },
  statusBadge: {
    borderRadius: radius.radius6,
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.5),
  },
  statusText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
  },
  total: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textSecondaryColor,
    marginTop: hp(0.5),
  },
  price: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    marginVertical: hp(0.5),
    fontWeight:"700"
  },
  reviewBtn: {
    height: hp(5),
    borderRadius: radius.radius1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
    width: wp(30),
  },
  reviewBtnText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
  },
  separator: {
    height: 1,
    backgroundColor: colors.greyborder,
    marginHorizontal: wp(5),
    marginBottom: hp(1.5),
  },
    headerWrapper: {
    width: '100%',
    borderColor: colors.headerborder,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(1),
    justifyContent: 'space-between',
    width: '100%',
    
  },
  backButton: {
    height: hp(5),
    width: hp(5),
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  iconButton: {
    width: wp(10),
    height: wp(10),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    borderRadius: radius.radius5,
  },
});
