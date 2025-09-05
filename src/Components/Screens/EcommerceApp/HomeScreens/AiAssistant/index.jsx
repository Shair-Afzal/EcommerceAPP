import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import {
  wp,
  hp,
  colors,
  radius,
  fontSize,
  fontFamily,
} from '../../../../constant'; // Assuming the constant file is named constants.js in the same directory

const AIAssistantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundColor} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>AI Assistant</Text>
      </View>
      <View style={styles.chatContainer}>
        <View style={styles.aiMessageContainer}>
          <View style={styles.aiBubble}>
            <Text style={styles.aiText}>
              Hi! I'm your personal AI assistant for home improvement materials. I can help you find perfect match stone, tile, lighting and more. What project are you working on?
            </Text>
          </View>
          <View style={styles.aiActions}>
            <TouchableOpacity>
              <Text style={styles.actionText}>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.thumbsUp}>
              <Text style={styles.thumbsIcon}>👍</Text>
            </TouchableOpacity>
            <Text style={styles.timeText}>10:52</Text>
          </View>
        </View>
        <View style={styles.userMessageContainer}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>What's the best tile for kitchen backsplash?</Text>
          </View>
        </View>
        <Text style={styles.quickResponsesTitle}>Quick Responses</Text>
        <TouchableOpacity style={styles.quickResponseButton}>
          <Text style={styles.quickResponseText}>What's the best tile for kitchen backsplash?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickResponseButton}>
          <Text style={styles.quickResponseText}>Show me backdoor lighting options.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickResponseButton}>
          <Text style={styles.quickResponseText}>I need stone for fireplace.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask about materials, compare options..."
          placeholderTextColor={colors.textColor}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendIcon}>▶</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
  },
  backButton: {
    marginRight: wp(4),
  },
  backIcon: {
    fontSize: fontSize.medium,
    color: colors.Black,
    fontFamily: fontFamily.medium,
  },
  title: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    color: colors.Black,
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
  actionText: {
    fontSize: fontSize.extraSmall,
    color: colors.textSecondaryColor,
    fontFamily: fontFamily.medium,
    marginRight: wp(2),
  },
  thumbsUp: {
    marginRight: wp(2),
  },
  thumbsIcon: {
    fontSize: fontSize.extraSmall,
    color: colors.textSecondaryColor,
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
  quickResponsesTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(1),
  },
  quickResponseButton: {
    backgroundColor: colors.DarkWhite,
    borderRadius: radius.radius1,
    padding: wp(3),
    marginBottom: hp(1),
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  quickResponseText: {
    fontSize: fontSize.regSmall,
    color: colors.Black,
    fontFamily: fontFamily.DMreg,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
  },
  input: {
    flex: 1,
    backgroundColor: colors.DarkWhite,
    borderRadius: radius.radius2,
    paddingHorizontal: wp(3),
    paddingVertical: Platform.OS === 'ios' ? hp(1.5) : hp(1),
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.Black,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  sendButton: {
    marginLeft: wp(2),
  },
  sendIcon: {
    fontSize: fontSize.medium,
    color: colors.primaryColor,
  },
});

export default AIAssistantScreen;