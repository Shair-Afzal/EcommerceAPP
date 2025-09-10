import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  wp,
  hp,
  colors,
  radius,
  fontSize,
  fontFamily,
} from '../../../../constant';
import Vector from '../../../../assets/SVG/Vector.svg';
import Heart from '../../../../assets/SVG/Heart.svg';
import Icon from '../../../../assets/SVG/sorticon.svg';
import Fav from '../../../../assets/SVG/fav.svg';
import Dawload from '../../../../assets/SVG/dawload.svg';
import Star from '../../../../assets/SVG/RatingStar.svg';
import Swiper from 'react-native-swiper';
import CustomDropdown from '../../../../CustomComp/CustomDropdown/CustomDropDown';
import {
  specData,
  specificationdata,
} from '../../../../Utils/Dummydata/Dummydata';
import StarRate from '../../../../assets/SVG/Stars.svg';
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import styles from './style';

const ProductSpecification = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);

  const fullText =
    'Crafted from premium natural stone, our granite slabs combine timeless beauty with exceptional durability. Featuring a polished finish that enhances the stone’s rich patterns and colors the are loking very good';
  const previewText = fullText.slice(0, 148);
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollViewContent,
        { paddingBottom: insets.bottom, paddingTop: insets.top,paddingTop:hp(2),paddingBottom:hp(4)},
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
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
          <TouchableOpacity style={styles.iconButton}>
            <Heart height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.swiperContainer}>
        <Swiper
          autoplay={false}
          showsPagination={true}
          dotColor={colors.DarkWhite}
          activeDotColor={colors.DarkWhite}
          paginationStyle={styles.pagination}
          activeDotStyle={styles.activeDot}
        >
          {[1, 2, 3, 4].map((_, index) => (
            <View key={index}>
              <Image
                source={require('../../../../assets/images/spec.png')}
                style={styles.productImage}
              />
              <View style={styles.overlayIcons}>
                <TouchableOpacity>
                  <Fav height={hp(11)} width={wp(11)} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Dawload height={hp(11)} width={wp(11)} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      <CustomDropdown
        data={specData}
        titile="Countertop Slabs"
        price="$ 39.99"
        style={styles.dropdownStyle}
        styleTitle={styles.dropdownTitle}
      />

      <View style={styles.descriptionHeader}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <View style={styles.ratingWrapper}>
          <Star height={hp(4)} width={wp(4)} />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
      </View>

  
      <Text style={styles.reviewText}>
        {expanded ? fullText : previewText}
        <Text style={styles.readMore} onPress={() => setExpanded(!expanded)}>
          {expanded ? '  READ LESS <<' : '  READ MORE >>'}
        </Text>
      </Text>

      <View>
      <Text style={styles.specTitle}>Specification</Text>
      {specificationdata.map(item => (
        <View key={item.id} style={styles.specRow}>
          <View style={styles.specDot} />
          <Text style={styles.specText}>{item.txt}</Text>
        </View>
      ))}
      </View>

      {/* Reviews */}
      <View style={styles.reviewBox}>
        <Text style={styles.reviewTitle}>Reviews</Text>
        <View style={styles.reviewHeader}>
          <View style={styles.ratingRow}>
            <StarRate height={hp(2)} width={wp(20)} />
            <Text style={styles.ratingValue}>4.5</Text>
          </View>
          <Text style={styles.reviewCount}>12 Reviews</Text>
        </View>
      </View>

      
      <View style={styles.singleReviewBox}>
        <View style={styles.singleReviewHeader}>
          <View style={styles.userRow}>
            <Image
              source={require('../../../../assets/images/avatar.png')}
              style={styles.reviewImage}
            />
            <Text style={styles.userName}>Alex M</Text>
          </View>
          <StarRate height={hp(2)} width={wp(20)} />
        </View>
        <Text style={styles.userReview}>
          “Absolutely love the granite slabs! The color variations are
          beautiful, and the polished finish gives my kitchen an elegant,
          high-end look.”
        </Text>
        <Text style={styles.reviewDate}>12 days ago</Text>
      </View>
      <View style={styles.singleReviewBox}>
        <View style={styles.singleReviewHeader}>
          <View style={styles.userRow}>
            <Image
              source={require('../../../../assets/images/avatar.png')}
              style={styles.reviewImage}
            />
            <Text style={styles.userName}>Alex M</Text>
          </View>
          <StarRate height={hp(2)} width={wp(20)} />
        </View>
        <Text style={styles.userReview}>
          “Absolutely love the granite slabs! The color variations are
          beautiful, and the polished finish gives my kitchen an elegant,
          high-end look.”
        </Text>
        <Text style={styles.reviewDate}>12 days ago</Text>
      </View>


      <CustomButton btnTitle={'Add to Cart'} />
    </ScrollView>
  );
};

export default ProductSpecification;


