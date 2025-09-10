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
    flex: 1,
    backgroundColor: colors.DarkWhite,
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  scrollContent: { paddingBottom: hp(6),marginTop:hp(2) },
  listContent: { paddingBottom: hp(2) },

  /* Header */
  headerWrapper: { width: '100%' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(1),
    justifyContent: 'space-between',
    width: '60%',
  },
  backButton: {
    height: hp(4),
    width: hp(4),
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.small,
    fontWeight: '500',
    color: '#000000',
  },

  /* Swipe List Containers */
  visibleContainer: {
    marginBottom: hp(1),
    borderRadius: radius.radius1,
    borderBottomWidth:1,
    borderColor:colors.bordergrey
  },
  hiddenContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: hp(1),
  },

  /* Cart row */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    backgroundColor: colors.white,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: wp(3),
  },
  image: {
    width: wp(20),
    height: hp(10.2),
    borderRadius: radius.radius1,
  },
  itemTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight: "500",
  },
  itemSubtitle: {
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textColor,
    marginTop: hp(0.3),
  },
  itemPrice: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    marginTop: hp(0.8),
    fontWeight: "700",
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(2),
    alignSelf: "flex-end",
  },
  qtyBtn: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(1.5),
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnLeft: {
    marginRight: wp(1.5),
  },
  qtyBtnRight: {
    marginLeft: wp(1.5),
    backgroundColor: colors.primaryColor,
  },
  qtyBtnText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    lineHeight: fontSize.small * 1.1,
  },
  qtyBtnTextPlus: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
    lineHeight: fontSize.small * 1.1,
  },
  qtyText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.medium,
    color: colors.Black,
    marginHorizontal: wp(1.8),
  },

  /* Delete swipe */
  deleteBtn: {
    width: wp(10),
    height: '100%',
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.radius1,
  },

  /* Summary card */
  summaryWrap: {
    marginTop: hp(2),
    backgroundColor: colors.white,
    borderRadius: radius.radius6,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderWidth: 2,
    borderColor: colors.headerborder,
    marginBottom:hp(2)
  },
  summaryWrapActive: {
    marginTop: hp(3),
    backgroundColor: colors.white,
    borderRadius: radius.radius6,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderWidth: 1,
    borderColor: colors.headerborder,
  },
  summaryTitle: {
    fontSize: fontSize.avgSmall,
    color: colors.Black,
    fontWeight: "500",
    marginBottom: hp(2),
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(5),
    borderRadius: radius.radius5,
    backgroundColor: colors.lightBlue,
    marginBottom: hp(2.2),
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
  promoBtn: {
    height: hp(5.3),
    borderRadius: wp(7),
    justifyContent: 'center',
    paddingHorizontal: wp(3),
  },
  promoBtnActive: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  promoText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.grey,
    marginHorizontal: wp(2),
  },
  promoTextActive: {
    color: colors.primaryColor,
    fontFamily: fontFamily.bold,
  },
  applyBtn: {
    height: hp(5),
    paddingHorizontal: wp(8),
    borderRadius: wp(7),
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.white,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(0.6),
    
  },
  summaryLabel: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.textSecondaryColor,
  },
  summaryValue: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight: "700",
  },
  summaryDiscount: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: colors.headerborder,
    marginVertical: hp(1.4),
  },
  totalValue: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    fontWeight: "700",
  },

  /* Delivery box */
  deliveryBox: {
    backgroundColor: colors.lightBlue,
    padding: wp(4),
    borderRadius: radius.radius1,
    paddingLeft: wp(6),
  },
  deliveryTitle: {
    fontSize: fontSize.avgSmall,
    color: colors.primaryColor,
    fontWeight: "500",
  },
  deliverySubtitle: {
    fontSize: fontSize.extraSmall,
    color: colors.grey,
    fontWeight: "500",
  },
});
export default styles
