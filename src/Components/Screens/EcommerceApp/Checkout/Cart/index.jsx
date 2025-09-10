import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { wp, hp, colors, radius, fontSize, fontFamily } from '../../../../constant';
import Vector from '../../../../assets/SVG/Vector.svg';
import { SwipeListView } from 'react-native-swipe-list-view';
import CustomButton from '../../../../CustomComp/CustomButton/CustomButton';
import Trash from "../../../../assets/SVG/Trash.svg";
import styles from "./style"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: 'Marble Slabs-White',
      subtitle: 'Manufacture',
      price: 45,
      qty: 1,
      image: require("../../../../assets/images/cartimg2.png"),
    },
    {
      id: 2,
      title: 'Granite Slabs',
      subtitle: 'Manufacture',
      price: 45,
      qty: 5,
      image: require("../../../../assets/images/caetimg.png"),
    },
  ]);

  const [promo, setPromo] = useState('');
  const [activePromo, setActivePromo] = useState(false);
  const shipping = 25;
  const discount = 50;

  const handleQty = (id, type) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: type === 'inc' ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item,
      ),
    );
  };

  const handleDelete = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subTotal = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  const total = subTotal + shipping - discount;
  const insets=useSafeAreaInsets()

  return (
    <View style={{...styles.container,paddingTop:insets.top,paddingBottom:insets.bottom,paddingTop:hp(2),}}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Order</Text>
        </View>
      </View>
      
       <SwipeListView
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          disableRightSwipe={true}
          rightOpenValue={-wp(10)}
          stopRightSwipe={-wp(10)}
          renderItem={({ item }) => (
            <View style={styles.visibleContainer}>
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} />

                <View style={styles.cardTextContainer}>
                  <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                  <Text style={styles.itemPrice}>$ {item.price.toFixed(2)}</Text>
                </View>

                {/* Quantity */}
                <View style={styles.qtyContainer}>
                  <TouchableOpacity
                    onPress={() => handleQty(item.id, 'dec')}
                    style={[styles.qtyBtn, styles.qtyBtnLeft]}
                  >
                    <Text style={styles.qtyBtnText}>−</Text>
                  </TouchableOpacity>

                  <Text style={styles.qtyText}>{item.qty}</Text>

                  <TouchableOpacity
                    onPress={() => handleQty(item.id, 'inc')}
                    style={[styles.qtyBtn, styles.qtyBtnRight]}
                  >
                    <Text style={styles.qtyBtnTextPlus}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          renderHiddenItem={({ item }) => (
            <View style={styles.hiddenContainer}>
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                style={styles.deleteBtn}>
                <Trash height={hp(4)} width={wp(4)} />
              </TouchableOpacity>
            </View>
          )}
        />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
       

        {/* Promo sections */}
        {activePromo && (
          <>
            <View style={styles.deliveryBox}>
              <Text style={styles.deliveryTitle}>Delivery Eligibility</Text>
              <Text style={styles.deliverySubtitle}>
                Add 1 more item to qualify for standard delivery
              </Text>
            </View>

            <View style={styles.summaryWrapActive}>
              <Text style={styles.summaryTitle}>Freight Summary</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total Weight</Text>
                <Text style={styles.summaryValue}>$ {subTotal.toFixed(2)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Freight rate</Text>
                <Text style={styles.summaryValue}>$ {subTotal.toFixed(2)}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Estimated freight:</Text>
                <Text style={styles.totalValue}>$ {total.toFixed(2)}</Text>
              </View>
            </View>

            <View style={styles.summaryWrapActive}>
              <Text style={styles.summaryTitle}>Order Summary</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>$ {subTotal.toFixed(2)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Freight rate</Text>
                <Text style={styles.summaryValue}>$ {subTotal.toFixed(2)}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total</Text>
                <Text style={styles.totalValue}>$ {total.toFixed(2)}</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {!activePromo && (
        <View style={styles.summaryWrap}>
          {/* Promo row */}
          <View style={styles.promoContainer}>
            <TouchableOpacity
              style={[styles.promoBtn, activePromo && styles.promoBtnActive]}
              onPress={() => setActivePromo(true)}
              activeOpacity={0.7}
            >
              <Text style={[styles.promoText, activePromo && styles.promoTextActive]}>
                Promo code
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={!activePromo ? styles.applyBtn : styles.promoBtn}
              onPress={() => setActivePromo(false)}
              activeOpacity={0.7}
            >
              <Text style={[styles.promoText, !activePromo && styles.applyText]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>

          {/* Lines */}
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Sub - Total</Text>
            <Text style={styles.summaryValue}>$ {subTotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryValue}>$ {shipping.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount</Text>
            <Text style={styles.summaryDiscount}>- $ {discount.toFixed(2)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Cost</Text>
            <Text style={styles.totalValue}>$ {total.toFixed(2)}</Text>
          </View>
        </View>
      )}

      {/* Checkout Button */}
      <CustomButton btnTitle={"Proceed to Checkout"} 
      style={{marginBottom:hp(1)}}
      onPress={()=>navigation.navigate('Shipping')}
      />
    </View>
  );
};

export default CartScreen;

