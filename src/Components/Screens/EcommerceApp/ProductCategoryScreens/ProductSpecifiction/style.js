import { StyleSheet } from "react-native";
import {
  wp,
  hp,
  colors,
  fontSize,
  fontFamily,
  radius,
} from "../../../../constant"

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: colors.DarkWhite,
    paddingHorizontal: wp(4),
  },
  searchBox: {
    backgroundColor: colors.lightGray,
    borderRadius: radius.radius6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    height: hp(5),
    width: '68%',
  },
  searchIcon: {
    width: wp(5),
    height: wp(5),
    tintColor: colors.dimBlack,
  },
  searchInput: {
    flex: 1,
    marginLeft: wp(2),
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.regSmall,
    color: colors.Black,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: radius.radius5,
  },
  swiperContainer: {
    height: hp(59),
  },
  productImage: {
    width: '100%',
    height: hp(55),
    borderRadius: radius.radius6,
    marginTop: hp(2),
  },
  overlayIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1.5),
    position: 'absolute',
    top: hp(2),
    right: wp(4),
  },
  pagination: {},
  activeDot: {
    borderWidth: 2.5,
    borderColor: colors.primaryColor,
    height: wp(2.8),
    width: wp(2.8),
    borderRadius: radius.radius5,
    backgroundColor: colors.grey,
  },
  dropdownStyle: {
    borderWidth: 0,
    paddingTop: 0,
    marginTop: 0,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  dropdownTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
    color: colors.Black,
  },
  descriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(0.5),
    marginBottom: hp(2),
  },
  descriptionTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.statusSize,
    color: colors.Black,
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
  },
  reviewText: {
    fontSize: fontSize.small,
    color: colors.darkestgrey,
    fontFamily: fontFamily.DMreg,
  },
  readMore: {
    color: colors.primaryColor,
    fontWeight: '600',
    fontSize: fontSize.small,
  },
  specTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.statusSize,
    color: colors.Black,
    fontWeight: '500',
    marginTop: hp(2),
    marginBottom:hp(2)
  },
  specRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    // marginTop: hp(1.5),
  },
  specDot: {
    height: wp(1.2),
    width: wp(1.2),
    backgroundColor: colors.darkestgrey,
    borderRadius: radius.radius5,
  },
  specText: {
    fontSize: fontSize.small,
    color: colors.darkestgrey,
    fontFamily: fontFamily.DMreg,
  },
  reviewBox: {
    borderColor: colors.dimWhite,
    marginTop: hp(2),
    borderRadius: radius.radius2,
    gap: hp(2),
  },
  reviewTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.statusSize,
    color: colors.Black,
    fontWeight: '500',
  },
  reviewHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  ratingValue: {
    fontSize: fontSize.small,
    color: colors.primaryColor,
    fontWeight: '500',
  },
  reviewCount: {
    fontSize: fontSize.small,
    color: colors.darkestgrey,
    fontWeight: '400',
  },
  singleReviewBox: {
    gap: hp(1),
    marginBottom: hp(1),
  },
  singleReviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
  reviewImage: {
    height: hp(7),
    width: hp(7),
    borderRadius: radius.radius5,
  },
  userName: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    fontWeight: '500',
  },
  userReview: {
    fontSize: fontSize.avgSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.darkestgrey,
  },
  reviewDate: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.lightestgrey,
  },
});
export default styles