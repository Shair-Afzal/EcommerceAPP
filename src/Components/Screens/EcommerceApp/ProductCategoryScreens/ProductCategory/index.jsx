import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  wp,
  hp,
  colors,
  radius,
  fontSize,
  fontFamily,
} from '../../../../constant';
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import Icon from '../../../../assets/SVG/sorticon.svg';
import Star from '../../../../assets/SVG/RatingStar.svg';
import Vector from '../../../../assets/SVG/Vector.svg';
import Heart from '../../../../assets/SVG/Heart.svg';
import styles from './style';
import dummyData from '../../../../Utils/Dummydata/Dummydata';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Categorycard from "../../../../CustomComp/CategoryCard/Categorycard"

const ProductCategory = ({ navigation }) => {
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
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
          <View style={styles.searchBox}>
            <Image
              source={{
                uri: 'https://img.icons8.com/material-outlined/24/000000/search.png',
              }}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.textColor}
              style={styles.searchInput}
            />
            <Icon height={hp(4)} width={wp(4)} />
          </View>
          <TouchableOpacity style={styles.iconButton}
          onPress={()=>navigation.navigate('Favourite')}
          >
            <Heart height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Title + Sort */}
      <View style={styles.rowBetween}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Stone Products</Text>
        </View>
        <View style={styles.sortWrapper}>
          <Text style={styles.sortText}>Sort By</Text>
          <Icon height={hp(4)} width={wp(4)} />
        </View>
      </View>

      <Categorycard data={dummyData} onpress={()=>navigation.navigate("ProductDetails")}/>
    </View>
  );
};

// ⬇️ Cleaned styles (removed unused ones)

export default ProductCategory;
