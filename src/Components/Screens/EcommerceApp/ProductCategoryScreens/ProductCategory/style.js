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
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: wp(4),
  },
  searchBox: {
    backgroundColor: colors.lightGray,
    borderRadius: radius.radius6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    height: hp(5),
    width: "68%",
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
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(3),
  },
  titleWrapper: {},
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
    color: colors.Black,
    fontWeight: "600",
  },
  sortWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "33%",
    backgroundColor: colors.lightBlue,
    justifyContent: "space-between",
    borderRadius: radius.radius6,
    height: hp(4.5),
    paddingHorizontal: wp(3),
  },
  sortText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.avgSmall,
    color: colors.textSecondaryColor,
  },
  listContentContainer: {
    paddingVertical: hp(2),
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
  btnstyle:{
    paddingVertical:hp(2)
  }
});
export default styles