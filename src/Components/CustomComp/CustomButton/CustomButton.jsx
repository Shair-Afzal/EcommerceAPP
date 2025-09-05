import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {fontSize, wp} from '../../constant/index'
import { colors } from '../../constant/index'
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'
const CustomButton = ({btnTitle,onPress,style,txtstyle}) => {
  return (
      <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
        <Text style={[styles.btn,txtstyle]}>{btnTitle}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor:colors.primaryColor,
    padding: wp(5),
    borderRadius: 16,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"

  },
  btn:{
    fontSize:fontSize.small,
    color:colors.white
  }
});

