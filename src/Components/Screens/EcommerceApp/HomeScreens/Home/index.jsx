import {
  View,
  Text,
  StyleSheet,
  StatusBar,
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
import Heart from '../../../../assets/SVG/Heart.svg';
import Scan from '../../../../assets/SVG/ion_scan.svg';
import Custominput from '../../../../CustomComp/Custominput/Custominput';
import Arrow from '../../../../assets/SVG/Arrowvector.svg';
import { materialData } from '../../../../Utils/Dummydata/Dummydata';
import Swiper from 'react-native-swiper';
import styles from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from "../../../../CustomComp/CustomHeader/CusomHeader"

const Home = ({navigation}) => {
  const inset = useSafeAreaInsets();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.container,
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
       
      }}
    >
       <StatusBar
       hidden={false}
       translucent={false}
       backgroundColor={colors.DarkWhite}
       barStyle="dark-content"
     />

      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>Arino B.</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Scan height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Heart height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/images/avatar.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View> */}
      <CustomHeader
        type="profile" // Changed to profile type for left alignment
        title="Arino B."
        showBackButton={false}
        showScanIcon={true}
        showHeartIcon={true}
        showProfileImage={true}
        profileImageSource={require("../../../../assets/images/avatar.png")} // Add your image
        onBackPress={() => console.log("Back pressed")}
        onScanPress={() => console.log("Scan pressed")}
        onHeartPress={() => console.log("Heart pressed")}
        onProfilePress={() => console.log("Profile pressed")}
      />

      <Custominput
        Lefticon={true}
        search
        placholder={'Ask AI or search Material..?'}
        inputstyle={styles.searchInput}
        styleinput={styles.input}
        style={styles.placholdertxt}
        onfocus={()=>navigation.navigate("AiAssistant")}
      />

      <View style={styles.swiperWrapper}>
        <Swiper
          autoplay={false}
          showsPagination={true}
          dotColor={colors.lightBlue}
          activeDotColor={colors.DarkWhite}
          paginationStyle={styles.pagination}
          activeDotStyle={styles.activeDot}
        >
          {[1, 2, 3, 4].map((_, index) => (
            <View key={index} style={styles.promoContainer}>
              <View style={styles.promoContent}>
                <View style={styles.txtcontainer}>
                  <Text style={styles.promoTitle}>Up to 40%{"\n"}OFF on{"\n"}New Arrivals!</Text>
                  <TouchableOpacity style={styles.shopNowButton}>
                    <Text style={styles.shopNowText}>Shop Now </Text>
                    <Arrow
                      style={styles.arrowIcon}
                      height={hp(3)}
                      width={wp(3)}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.promoImages}>
                  <Image
                    source={require('../../../../assets/images/light.png')}
                    style={styles.pendantImage1}
                  />
                </View>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.materialSection}>
        <Text style={styles.sectionTitle}>Shop By Material</Text>

        {materialData.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.materialCard}
            activeOpacity={0.9}
          >
            <Image source={item.image} style={styles.materialImage} />
            <View style={styles.materialOverlay}>
              <Text style={styles.materialTitle}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
