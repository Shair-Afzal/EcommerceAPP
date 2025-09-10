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
    paddingTop: hp(2),
  },
  headerWrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.headerborder,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(1),
    justifyContent: 'space-between',
    width: '65%',
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
  chatContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  aiMessageContainer: {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    marginBottom: hp(2),
  },
  aiBubble: {
    backgroundColor: colors.lightGray,
    borderRadius: radius.radius2,
    padding: wp(3),
  },
  aiText: {
    fontSize: fontSize.regSmall,
    color: colors.Black,
    fontFamily: fontFamily.DMreg,
    lineHeight: hp(2.5),
  },
  aiActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
    justifyContent: 'flex-start',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  actionText: {
    fontSize: fontSize.extraSmall,
    color: colors.textSecondaryColor,
    fontFamily: fontFamily.medium,
    marginRight: wp(2),
  },
  thumbsUp: {
    marginRight: wp(2),
  },
  timeText: {
    fontSize: fontSize.extraSmall,
    color: colors.textSecondaryColor,
    fontFamily: fontFamily.DMreg,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    maxWidth: '80%',
    marginBottom: hp(3),
  },
  userBubble: {
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius2,
    padding: wp(3),
  },
  userText: {
    fontSize: fontSize.regSmall,
    color: colors.DarkWhite,
    fontFamily: fontFamily.DMreg,
    lineHeight: hp(2.5),
  },
  userAvatar: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'cover',
    alignSelf: 'flex-end',
  },
  quickResponseWrapper: {
    paddingVertical: hp(4),
    borderTopWidth: 1,
    borderColor: colors.borderColor,
  },
  quickResponsesTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(1),
  },
  quickResponseButton: {
    backgroundColor: colors.DarkWhite,
    borderRadius: wp(3.5),
    padding: wp(3),
    marginBottom: hp(1),
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  quickResponseText: {
    fontSize: fontSize.regSmall,
    color: colors.textColor,
    fontFamily: fontFamily.DMreg,
  },
  inputContainer: {
    paddingVertical: hp(2.5),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
  },
  inputStyle: {
    paddingVertical: hp(0.1),
    borderWidth: 1,
    borderColor: colors.inputborder,
  },
  input:{
    fontSize:fontSize.regSmall,
  }
});
export default styles