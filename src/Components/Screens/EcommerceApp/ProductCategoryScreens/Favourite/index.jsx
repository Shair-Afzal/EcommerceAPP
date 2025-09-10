import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput
} from 'react-native';
import { wp, hp, colors, fontSize, fontFamily, radius } from '../../../../constant';
import Fav from '../../../../assets/SVG/fav.svg'; // 🔹 Your SVG for heart icon
import Vector from '../../../../assets/SVG/Vector.svg';
import Bag from "../../../../assets/SVG/bag.svg"
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const FavouriteScreen = ({ navigation }) => {
  const data = [
    {
      id: '1',
      title: 'Marble Slabs–White',
      subtitle: 'Manufacture',
      price: '$ 45.00',
      image:
        require("../../../../assets/images/cartimg2.png") // placeholder product image
    },
    {
      id: '2',
      title: 'Marble Slabs–White',
      subtitle: 'Manufacture',
      price: '$ 45.00',
      image:
        require("../../../../assets/images/cartimg2.png"),
    },
    {
      id: '3',
      title: 'Marble Slabs–White',
      subtitle: 'Manufacture',
      price: '$ 45.00',
      image:
        require("../../../../assets/images/cartimg2.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />

        {/* Product Info */}
        <View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.price}>{item.price}</Text>
           
        </View>

       <TouchableOpacity>
        <Fav width={wp(10)} height={wp(10)}  />
        </TouchableOpacity>
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />
    </View>
  );
const inset =useSafeAreaInsets()
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
      {/* Wishlist List */}
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

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
    paddingTop: hp(2),
    paddingHorizontal:wp(4)
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
  iconBtn: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    height: wp(6),
    width: wp(6),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
    marginTop:hp(3)
  },
  image: {
    height: hp(10),
    width: wp(20),
    borderRadius: radius.radius1,
    marginRight: wp(3),
  },
  infoContainer: {
    // flex: 1,
  },
  title: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  subtitle: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textSecondaryColor,
    marginVertical: hp(0.5),
  },
  price: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
  },
  separator: {
    height: 1,
    backgroundColor: colors.greyborder,
    // marginHorizontal: wp(5),
    marginBottom: hp(1.5),
  },
  headerTitle: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.small,
    fontWeight: '500',
    color: colors.Black,
  },
});
