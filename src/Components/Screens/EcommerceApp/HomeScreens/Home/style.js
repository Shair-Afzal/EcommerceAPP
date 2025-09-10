import { StyleSheet } from 'react-native';
import {
  wp,
  hp,
  colors,
  fontSize,
  fontFamily,
  radius,
} from '../../../../constant';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(3),
  },
  headerTitle: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.medium,
    color: colors.Black,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  iconButton: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: radius.radius5,
  },
  profileImage: {
    width: wp(11),
    height: wp(11),
    borderRadius: radius.radius5,
  },
  searchInput: {
    marginTop: hp(1.5),
    paddingVertical: hp(0),
    borderRadius: radius.radius5,
    // backgroundColor: colors.lightBlue,
  },
  swiperWrapper: {
    height: hp(23),
  },
  pagination: {
    bottom: hp(1),
  },
  activeDot: {
    borderWidth: 3,
    borderColor: colors.primaryColor,
    height: wp(2.8),
    width: wp(2.8),
    borderRadius: radius.radius5,
  },
  promoContainer: {
    backgroundColor: colors.lightpink,
    borderRadius: radius.radius2,
    // padding: wp(4),
    // paddingTop:0,
    // paddingBottom:hp(3)
    height: hp(18.5),
  },
  promoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  promoTitle: {
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight: '700',
  },
  promoSubtitle: {
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight: '700',
  },
  shopNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1),
  },
  shopNowText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    fontWeight: '600',
  },
  arrowIcon: {
    marginTop: hp(0.5),
  },
  promoImages: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: wp(2),
  },
  pendantImage1: {
    width: wp(30),
    height: wp(32),
    resizeMode: 'cover',
  },
  materialSection: {
    marginTop: hp(0),
  },
  sectionTitle: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight: '500',
    marginBottom: wp(3),
  },
  materialCard: {
    marginBottom: wp(3),
    borderRadius: radius.radius6,
    overflow: 'hidden',
    position: 'relative',
  },
  materialImage: {
    width: '100%',
    height: hp(20),
    resizeMode: 'cover',
  },
  materialOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: wp(4),
  },
  materialTitle: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
    fontWeight: '500',
  },
  txtcontainer: {
    marginLeft: wp(7),
    marginTop: hp(2),
    justifyContent: 'space-between',
    gap: hp(2),
  },
  input:{
    paddingVertical: hp(0.4)
  },placholdertxt:{
    fontSize:fontSize.small
  }
});
export default styles;
