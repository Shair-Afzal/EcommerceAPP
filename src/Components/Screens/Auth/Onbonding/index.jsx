import {  Text, View,Image,ImageBackground,TouchableOpacity, StatusBar} from 'react-native'
import React, { useState } from 'react'
import styles from "./style"
import Arrowbtn from "../../../assets/SVG/Arrowbtn.svg"
import { hp, wp } from '../../../constant'

const Onbonding = () => {
   const [step, setStep] = useState(0);
    const images = [
    require('../../../assets/images/onboard/Onboarding1-a.png'),
    require('../../../assets/images/onboard/Onboarding2.jpg'),
    require('../../../assets/images/onboard/Onboarding3.jpg'),
  ];
  const titles = [
    "New designs\neveryday",
    "Discover unique\ncollections",
    "Style your home\nwith comfort"
  ];
  return (
    <View style={styles.container}>
     <StatusBar
     hidden={true}
  translucent={true}
  backgroundColor="transparent"
  barStyle="light-content"   
/>
     <ImageBackground
        source={require('../../../assets/images/onboard/Onboarding1-a.png')}
        style={styles.mainBackground}
        resizeMode="cover"
      >
        <View style={styles.gradientOverlay} />
        <View style={styles.content}>
          <Text style={styles.title}>
            New designs{'\n'}everyday
          </Text>
          <Text style={styles.subtitle}>
            Shopee adds new designs every day. Explore and find the best furniture for your home and offices.
          </Text>
          <View style={styles.paginationContainer}>
            <View style={[styles.paginationDot, styles.activeDot]} />
            <View style={[styles.paginationDot, styles.inactiveDot]} />
            <View style={[styles.paginationDot, styles.inactiveDot]} />
          </View>
        </View>
        {/* Navigation Button - Centered at bottom */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} >
             <Arrowbtn height={wp(16)} width={wp(16)}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Onbonding;

