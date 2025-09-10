import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
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
import Message from '../../../../assets/SVG/Messageicon.svg';
import CustomDropdown from '../../../../CustomComp/CustomDropdown/CustomDropDown';
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import Star from '../../../../assets/SVG/Stars.svg';
import { specificationdata, specificationsData } from '../../../../Utils/Dummydata/Dummydata';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';

const ProductDetails = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);

  const fullText =
    'Crafted from premium natural stone, our granite slabs combine timeless beauty with exceptional durability. Featuring a polished finish that enhances the stone’s rich patterns and colors.';
  const previewText = fullText.slice(0, 128);

  const data = [1, 2, 3, 4];
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.scrollViewContent,
        paddingBottom: insets.bottom,
        paddingTop: insets.top,
        paddingBottom: hp(4),
        paddingTop:hp(2)
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}
          onPress={()=>navigation.goBack()}
          >
            <Vector height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
          <Text style={styles.title}>Countertop Slabs</Text>
          <View style={styles.iconcontainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Message height={hp(6)} width={wp(6)} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Heart height={hp(6)} width={wp(6)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../assets/images/img.png')}
          style={styles.image}
        />
        <View style={styles.stockcontainer}>
          <Text style={styles.stockText}>In stock</Text>
        </View>
      </View>

      {/* Horizontal squares */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <View style={styles.squarecontainer} />}
        contentContainerStyle={styles.squareList}
        showsHorizontalScrollIndicator={false}
      />

      <CustomDropdown data={specificationsData} titile="Specification" btn
      onPress={()=>navigation.navigate("ProductSpecification")}
       />

      {/* Price + Quantity */}
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>$ 39.99</Text>
        <View style={styles.quantityRow}>
          <Text style={styles.quantityLabel}>Quantity</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity style={styles.minusButton}>
              <Text style={styles.minusText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>1</Text>
            <TouchableOpacity style={styles.plusButton}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CustomButton
          btnTitle={'Add To Cart'}
          style={styles.addToCartButton}
          txtstyle={styles.buttonText}
          onPress={()=>navigation.navigate("Cart")}
        />
      </View>

      {/* Reviews + Description */}
      <View style={styles.reviewBox}>
        <Text style={styles.reviewTitle}>Reviews</Text>
        <View style={styles.reviewHeader}>
          <View style={styles.ratingRow}>
            <Star height={hp(2)} width={wp(20)} />
            <Text style={styles.ratingValue}>4.5</Text>
          </View>
          <Text style={styles.reviewCount}>12 Reviews</Text>
        </View>

        <Text style={styles.reviewText}>
          {expanded ? fullText : previewText}
          <Text style={styles.readMore} onPress={() => setExpanded(!expanded)}>
            {expanded ? '  READ LESS <<' : '  READ MORE >>'}
          </Text>
        </Text>
        <View >
        <Text style={styles.specTitle}>Specification</Text>
        {specificationdata.map(item => (
          <View key={item.id} style={styles.specRow}>
            <View style={styles.specDot} />
            <Text style={styles.specText}>{item.txt}</Text>
          </View>
        ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;


