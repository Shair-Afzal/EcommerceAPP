import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native"
import {
  wp,
  hp,
  colors,
  fontSize,
  fontFamily,
  radius,
} from "../../../../constant"
import Heart from "../../../../assets/SVG/Heart.svg"
import Scan from "../../../../assets/SVG/ion_scan.svg"
import Custominput from "../../../../CustomComp/Custominput/Custominput"
import Arrow from "../../../../assets/SVG/Arrowvector.svg"
import { materialData } from "../../../../Utils/Dummydata/Dummydata"
import Swiper from "react-native-swiper"
import styles from "./style"

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      {/* Header */}
      <View style={styles.header}>
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
              source={require("../../../../assets/images/avatar.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <Custominput
        Lefticon={true}
        search
        placholder={"Ask AI or search Material..?"}
        inputstyle={styles.searchInput}
      />

      {/* Promo Section */}
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
                <View>
                  <Text style={styles.promoTitle}>Up to 40%</Text>
                  <Text style={styles.promoSubtitle}>OFF on</Text>
                  <Text style={styles.promoSubtitle}>New Arrivals!</Text>
                  <TouchableOpacity style={styles.shopNowButton}>
                    <Text style={styles.shopNowText}>Shop Now </Text>
                    <Arrow style={styles.arrowIcon} height={hp(4)} width={wp(4)} />
                  </TouchableOpacity>
                </View>
                <View style={styles.promoImages}>
                  <Image
                    source={require("../../../../assets/images/light.png")}
                    style={styles.pendantImage1}
                  />
                </View>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      {/* Shop By Material Section */}
      <View style={styles.materialSection}>
        <Text style={styles.sectionTitle}>Shop By Material</Text>

        {materialData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.materialCard}
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
  )
}



export default Home
