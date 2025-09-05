import { StyleSheet } from 'react-native';
import { wp, hp, colors, fontSize, fontFamily } from '../../../constant';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:colors.DarkWhite,
    paddingHorizontal:wp(4)
   
  },
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    gap:wp(3)
    
  },
  backButton: {
    height:hp(4),
    width:hp(4),
    backgroundColor:colors.lightGray,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
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
  },
    greeting: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.mediumLarge,
    color: '#000000',
    marginBottom: hp(1),
    fontWeight:"600"
  },
  welcomeText: {
    fontFamily: fontFamily.DMreg,
    fontWeight: '400',
    fontSize: 12,
    marginBottom: hp(7),
    color: colors.textColor,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 331,
    height: 56,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 0,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  emailIcon: {
    width: 18,
    height: 14,
    marginRight: 12,
    borderWidth: 1.5,
    borderColor: '#6B7280',
  },
  lockIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: fontFamily.DMreg,
    fontSize: 16,
    color: '#000000',
    paddingVertical: 0,
  },
  eyeIcon: {
    padding: 4,
  },
  eyeIconImage: {
    width: 20,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#6B7280',
  },
  signUpButton: {
    width: 331,
    height: 56,
    backgroundColor: '#1D4ED8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  signUpButtonDisabled: {
    backgroundColor: '#A4A4A4',
  },
  signUpButtonText: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    marginBottom: hp(5),
    marginTop:hp(3)
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: '#A4A4A4',
    marginHorizontal: 15,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(4),
  },
 socialButton: {
     height:hp(7),
     width:"47%",
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  socialButtonIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    marginTop: 0,
  },
  footerText: {
    fontFamily: fontFamily.DMreg,
    fontSize: 14,
    color: '#A4A4A4',
  },
  loginText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: '#1D4ED8',
    fontWeight: '600',
  },
  btncontainer:{
    marginTop: hp(3)
  }
});
