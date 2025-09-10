import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Keyboard,
  FlatList,
} from 'react-native';
import {
  wp,
  hp,
  colors,
  radius,
  fontSize,
  fontFamily,
} from '../../../../constant';
import Vector from '../../../../assets/SVG/Vector.svg';
import Custominput from '../../../../CustomComp/Custominput/Custominput';
import Chat from '../../../../assets/SVG/Chat.svg';
import Copy from '../../../../assets/SVG/copyicon.svg';
import Like from '../../../../assets/SVG/Like.svg';
import Unlike from '../../../../assets/SVG/unlike.svg';
import styles from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AIAssistantScreen = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const flatListRef = useRef();
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: "Hi! I'm your personal AI assistant for home improvement materials. I can help you find perfect match stone, tile, lighting and more. What project are you working on?",
      time: '10:52',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showQuickResponses, setShowQuickResponses] = useState(true);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardVisible(true),
    );
    const hideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardVisible(false),
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setShowQuickResponses(false);
    const userMessage = {
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages(prev => [...prev, userMessage]);

    setInputValue('');
    setTimeout(() => {
      const aiMessage = {
        type: 'ai',
        text: "That's a great choice! I’ll show you some options for your request.",
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
        
      }}
    >
        <StatusBar
        hidden={false}
        translucent={false}
        backgroundColor={colors.DarkWhite}
        barStyle="dark-content"
      />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Vector height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>AI Assistant</Text>
        </View>
      </View>

      <View style={styles.chatContainer}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          onContentSizeChange={() =>
            flatListRef.current.scrollToEnd({ animated: true })
          }
          onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
          renderItem={({ item }) =>
            item.type === 'ai' ? (
              <View style={styles.aiMessageContainer}>
                <Chat height={hp(6)} width={wp(6)} />
                <View style={styles.aiBubble}>
                  <Text style={styles.aiText}>{item.text}</Text>
                </View>
                <View style={styles.aiActions}>
                  <TouchableOpacity style={styles.copyButton}>
                    <Copy height={hp(3)} width={wp(3)} />
                    <Text style={styles.actionText}>Copy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.thumbsUp}>
                    <Like height={hp(3)} width={wp(3)} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.thumbsUp}>
                    <Unlike height={hp(3)} width={wp(3)} />
                  </TouchableOpacity>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.userMessageContainer}>
                <View style={styles.userBubble}>
                  <Text style={styles.userText}>{item.text}</Text>
                </View>
                <Image
                  source={require('../../../../assets/images/avatar.png')}
                  style={styles.userAvatar}
                />
              </View>
            )
          }
          contentContainerStyle={{ paddingBottom: hp(2) }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {!isKeyboardVisible && showQuickResponses && (
        <View style={styles.quickResponseWrapper}>
          <Text style={styles.quickResponsesTitle}>Quick Responses</Text>
          <TouchableOpacity
            style={styles.quickResponseButton}
            onPress={() =>
              setInputValue("What's the best tile for kitchen backsplash?")
            }
          >
            <Text style={styles.quickResponseText}>
              What's the best tile for kitchen backsplash?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickResponseButton}
            onPress={() => setInputValue('Show me backdoor lighting options.')}
          >
            <Text style={styles.quickResponseText}>
              Show me backdoor lighting options.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickResponseButton}
            onPress={() => setInputValue('I need stone for fireplace.')}
          >
            <Text style={styles.quickResponseText}>
              I need stone for fireplace.
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.inputContainer}>
        <Custominput
          Lefticon
          send
          value={inputValue}
          onChangeText={setInputValue}
          styleinput={styles.inputStyle}
          placholder={'Ask about materials, compare options.....'}
          sendpress={handleSend}
          style={styles.input}
          
        />
      </View>
    </View>
  );
};

export default AIAssistantScreen;
