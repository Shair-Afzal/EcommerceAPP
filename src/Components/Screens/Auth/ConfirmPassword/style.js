import { StyleSheet } from 'react-native';
import { wp, hp, colors, fontSize, fontFamily } from '../../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// const insert=useSafeAreaInsets()
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    gap: wp(3),
  },
  backButton: {
    height: hp(4),
    width: hp(4),
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 20,
    color: '#000000',
  },
  headerTitle: {
    fontFamily: fontFamily.DMreg,
    fontSize: fontSize.small,
    fontWeight: '500',
    color: '#000000',
  },
  mainContent: {
    flex: 1,
    paddingTop: hp(4.5),
  },
  greeting: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.mediumLarge,
    color: '#000000',
    marginBottom: hp(1),
    fontWeight: '600',
  },
  welcomeText: {
    fontFamily: fontFamily.DMreg,
    fontWeight: '400',
    fontSize: 12,
    marginBottom: hp(6),
    color: colors.textColor,
  },
  rowwrapper: {
    flexDirection: 'row',
    gap: wp(2),
  },
   rmemberbtn: {
    height: hp(2.7),
    width: wp(5),
    borderWidth: 1,
    borderRadius: wp(1),
    borderColor: colors.textColor,
  },
  errortxt:{
    fontSize:fontSize.small,
    color:colors.red,
    
  }
});
