import {  Text, View,Image,ImageBackground,TouchableOpacity, StatusBar} from 'react-native'
import React, { useState } from 'react'
import styles from "./style"
import Arrowbtn from "../../../assets/SVG/Arrowbtn.svg"
import { colors, hp, wp } from '../../../constant'
import CustomButton from '../../../CustomComp/CustomButton/CustomButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Onbonding = ({navigation}) => {
   const [step, setStep] = useState(0);
    const images = [
    require('../../../assets/images/onboard/Onboarding1-a.png'),
    require('../../../assets/images/onboard/Onboarding2.jpg'),
    require('../../../assets/images/onboard/Onboarding3.jpg'),
  ];
  const titles = [
    "New designs\neveryday",
    "Minimal Look\nBetter quality",
    "Make Your Space \nTruly Yours"
  ];
  const handleNext = () => {
    if (step < images.length - 1) {
      setStep(step + 1);
    } else {
      
      navigation.navigate('Login')
    }
  };
  const insert=useSafeAreaInsets();
  return (
    <View style={{...styles.container,paddingTop:insert.top,paddingBottom:insert.bottom}}>
     <StatusBar
     hidden={true}
  translucent={true}
  backgroundColor="transparent"
  barStyle="light-content"   
/>
     <ImageBackground
        source={images[step]}
        style={styles.mainBackground}
        resizeMode="cover"
      >
        
        <View style={styles.content}>
          <Text style={{...styles.title,color:step==1?colors.Black:colors.DarkWhite}}>
            {titles[step]}
          </Text>
          <Text style={styles.subtitle}>
            Shopee adds new designs every day. Explore and find the best furniture for your home and offices.
          </Text>
          <View style={styles.paginationContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  step === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          {
            step==2?
            <View style={styles.btncontainer}>
            <CustomButton btnTitle={"Get Started"}
            onPress={handleNext}
            />
            </View>
            :
          <TouchableOpacity  
          activeOpacity={0.8}
          onPress={handleNext}
          >
             <Arrowbtn height={wp(16)} width={wp(16)}/>
          
          </TouchableOpacity>
}
        </View>
      </ImageBackground>
    </View>
  )
}

export default Onbonding;

