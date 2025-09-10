import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  wp,
  hp,
  colors,
  fontSize,
  fontFamily,
  radius,
} from "../../../../constant";

import Vector from "../../../../assets/SVG/Vector.svg";
import Custominput from "../../../../CustomComp/Custominput/Custominput";
import CustomButton from "../../../../CustomComp/CustomButton/CustomButton";
import LocationBottomSheet from "../../../../CustomComp/LocationBottomsheet/LocationBottomSheet"
import Rated from "../../../../assets/SVG/Rated.svg"
import Unrated from "../../../../assets/SVG/unrated.svg"
import { useSafeAreaInsets } from "react-native-safe-area-context";


const OrderReviewScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);
  const inset=useSafeAreaInsets()

  return (
    <View style={{...styles.container,paddingTop:inset.top,paddingBottom:inset.bottom}}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(3)} width={wp(6)} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Leave A Review</Text>
          <View style={{ width: wp(6) }} /> 
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Info */}
        <View style={styles.productRow}>
          <Image
            source={require("../../../../assets/images/cartimg2.png")}
            style={styles.productImage}
          />
          <View style={{ flexDirection:"row",justifyContent:"space-between",flex:1 }}>
            <View>
            <Text style={styles.productName}>Marble Slabs - White</Text>
            <Text style={styles.productSubtitle}>Manufacture</Text>
            <Text style={styles.price}>$ 45.00</Text>
            </View>
            <View style={styles.receivedBadge}>
            <Text style={styles.receivedText}>Received</Text>
          </View>
          </View>
          
        </View>

        <View style={styles.separator} />

        {/* Leave a Review */}
        <Text style={styles.reviewTitle}>Leave a Review</Text>
       <View style={styles.starsRow}>
  {[1, 2, 3, 4, 5].map((star) => (
    <TouchableOpacity key={star} onPress={() => setRating(star)}>
      {rating >= star ? (
        <Rated width={wp(8)} height={wp(8)} style={{marginRight:wp(2)}}/>
      ) : (
        <Unrated width={wp(8)} height={wp(8)} style={{marginRight:wp(2)}}/>
      )}
    </TouchableOpacity>
  ))}
</View>


        {/* Write Your Review */}
        <Text style={styles.writeTitle}>Write Your Review</Text>
        <Custominput
          numberOfLines={6}
          multiline={true}
          placholder={"Lorem ipsum dolor sit amet consectetur. Lectus id pellentesque venenatis sed. Vitae massa viverra sit id..."}
          style={styles.customInputStyle}
          styleinput={styles.customInputField}
        />

        {/* Submit Button */}
        <CustomButton btnTitle={"Submit Review"} style={styles.submitBtnMargin}/>
        
      </ScrollView>
    </View>
  );
};

export default OrderReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  headerWrapper: {
    width: "100%",
    borderColor: colors.headerborder,
    marginBottom: hp(2),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    height: hp(5),
    width: hp(5),
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  productRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: hp(2),
    alignItems:"center",
    marginTop:hp(2)
  },
  productImage: {
    height: hp(11),
    width: wp(22),
    borderRadius: radius.radius1,
    marginRight: wp(3),
  },
  productName: {
    fontSize: fontSize.avgSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  productSubtitle: {
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textSecondaryColor,
    marginVertical: hp(0.5),
  },
  price: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
  },
  receivedBadge: {
    backgroundColor: colors.green,
    paddingHorizontal: wp(3),
    height:hp(3),
    borderRadius: radius.radius6,
    marginLeft: wp(2),
    justifyContent:"center",
    alignItems:"center"
  },
  receivedText: {
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.medium,
    color: colors.greentxt,
  },
  separator: {
    height: 1,
    backgroundColor: colors.bordergrey,
    marginVertical: hp(2),
  },
  reviewTitle: {
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    marginBottom: hp(1.5),
    fontWeight:"700",
    marginTop:hp(1)

  },
  starsRow: {
    flexDirection: "row",
    marginBottom: hp(2),
  },
  star: {
    width: wp(8),
    height: wp(8),
    marginRight: wp(2),
  },
  writeTitle: {
    fontSize: fontSize.Small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(1),
    fontWeight:"600"
  },
  textInput: {
    height: hp(15),
    borderRadius: radius.radius2,
    backgroundColor: colors.lightGray,
    padding: wp(4),
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.Black,
    marginBottom: hp(3),
  },
  submitBtn: {
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius2,
    justifyContent: "center",
    alignItems: "center",
    height: hp(6),
    marginTop: hp(1),
  },
  submitText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
  },
   submitBtnMargin: {
    marginTop: hp(2),
  },
   customInputStyle: {
    fontSize: fontSize.avgSmall,
  },
  customInputField: {
    paddingBottom: hp(5),
    marginTop: hp(1),
  },
});
