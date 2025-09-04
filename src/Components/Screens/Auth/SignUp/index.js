import { StyleSheet } from 'react-native';
import { wp, hp, colors, fontSize, fontFamily } from '../../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 375, // Exact screen width
    height: 812, // Exact screen height
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    width: 331, // Exact content width
    position: 'absolute',
    top: 100, // Adjusted to make room for header
    left: '50%',
    transform: [{ translateX: -165.5 }], // Half of content width (331/2)
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    position: 'absolute',
    top: -110,
    left: '50%',
    transform: [{ translateX: -165.5 }], // Half of content width (331/2)
    width: 331,
    zIndex: 10,
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    fontSize: 20,
    color: '#000000',
  },
  headerTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  mainContent: {
    flex: 1,
  },
  greeting: {
    width: 201,
    height: 29,
    fontFamily: fontFamily.bold,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  welcomeText: {
    width: 234,
    height: 18,
    fontFamily: fontFamily.DMreg,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0,
    color: '#A4A4A4',
    marginBottom: 50,
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
    marginBottom: 50,
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
    marginBottom: 50,
  },
  socialButton: {
    width: 160,
    height: 56,
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
});
