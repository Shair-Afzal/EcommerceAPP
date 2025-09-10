import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Star from '../../assets/SVG/RatingStar.svg';
import { colors, fontFamily, fontSize, hp, radius, wp } from '../../constant';
import CustomButton from '../CustomButton/CustomButton';



const Categorycard = ({data,onpress}) => {
    const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.stockBadge}>
            <Text style={styles.stockText}>{item.stock}</Text>
          </View>
        </View>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.ratingWrapper}>
            <Star height={hp(4)} width={wp(4)} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <CustomButton btnTitle={'View Detail'} style={styles.btnstyle} 
        onPress={onpress}
        />
      </View>
    </View>
  );
  return (
    <View>
    <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  )
}

export default Categorycard

const styles = StyleSheet.create({  card: {
    backgroundColor: colors.lightBlue,
    marginBottom: hp(3),
    shadowColor: colors.dimBlack,
    shadowOffset: { width: 0, height: hp(0.2) },
    shadowOpacity: 0.1,
    shadowRadius: wp(1),
    elevation: 2,
    padding: wp(4),
    borderRadius: radius.radius2,
  },
  cardImage: {
    width: '100%',
    height: hp(22),
    resizeMode: 'cover',
    borderRadius: radius.radius1,
  },
  cardContent: {
    marginTop: hp(1),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.regularsize,
    color: colors.Black,
    fontWeight: "600",
  },
  stockBadge: {
    backgroundColor: colors.litishblue,
    borderRadius: radius.radius4,
    paddingHorizontal: wp(3.2),
    paddingVertical: hp(0.7),
  },
  stockText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.extraSmall,
    color: colors.primaryColor,
    fontWeight:"700"
  },
  cardSubtitle: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.regSmall,
    color: colors.textSecondaryColor,
    marginTop: hp(0.5),
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  price: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
    color: colors.primaryColor,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.avgSmall,
    color: colors.textColor,
    marginLeft: wp(1),
  },})