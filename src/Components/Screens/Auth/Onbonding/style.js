import { StyleSheet } from 'react-native';
import { wp, hp, colors, fontSize, fontFamily } from '../../../constant';
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainBackground: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  // gradientOverlay: {
  //   ...StyleSheet.absoluteFillObject, // fills entire screen
  //   backgroundColor: 'rgba(0, 0, 0, 0.4)',
  // },
  content: {
    flex: 1,
   padding:wp(4)
  },
  title: {
    fontFamily: fontFamily.large,
    fontWeight: '500', 
    fontSize: fontSize.extraLarge, 
    letterSpacing: 0, 
    color: colors.DarkWhite,
    textAlign: 'left',
    marginTop:hp(5)
  },
  subtitle: {
    marginTop: hp(2), 
    fontFamily: fontFamily.DMreg,
    fontWeight: '400', 
    fontSize: fontSize.small, 
    color: colors.white,
    backgroundColor: 'transparent', 
    textAlign: 'left', 
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
  },
  paginationDot: {
    width: wp(3),
    height: wp(3),
    borderRadius: 100,
    marginRight: hp(1),
  },
  activeDot: {
    backgroundColor: colors.primaryColor,
  },
  inactiveDot: {
    backgroundColor: colors.DarkWhite,
    
  },
  buttonContainer: {
    position: 'absolute',
    bottom: hp(10),
    left: 0,
    right: 0,
    alignItems: 'center', // Center horizontally
   
  },
  btncontainer: {
    width:"100%",
    paddingHorizontal:wp(4),
    position:"absolute",
    top:hp(0.3)
   

  },
  
});
export default styles