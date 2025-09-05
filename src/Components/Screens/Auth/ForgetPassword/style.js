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
    marginBottom: hp(3),
    color: colors.textColor,
  },
  selectconatiner: {
    backgroundColor: colors.lightGray,
    width: '100%',
    padding: hp(2.5),
    borderRadius: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
    borderColor: 'rgba(107, 114, 128, 0.4)',
  },
  elipsecontainer: {
    backgroundColor: 'rgba(107, 114, 128, 0.06)',
    height: wp(12),
    width: wp(12),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowwrapper: {
    flexDirection: 'row',
    gap: wp(4),
  },
  smstxt: {
    fontSize: fontSize.small,
    fontWeight: '600',
    color: colors.forgettxtcolor,
    marginBottom: hp(1),
  },
  subdescription: {
    fontSize: fontSize.regSmall,
    color: colors.textColor,
    fontWeight: '400',
  },
  emailtxt: {
    color: colors.Black,
  },
  rensedtxt: {
    fontFamily: fontFamily.DMreg,
    fontWeight: '400',
    fontSize: 12,
    // marginBottom: hp(3),
    color: colors.textColor,
    textAlign: 'center',
  },
  resendcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
 
});
