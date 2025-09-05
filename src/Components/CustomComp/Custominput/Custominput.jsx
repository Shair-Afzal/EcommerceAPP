import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {fontSize, wp,fontFamily, hp} from '../../constant/index'
import { colors } from '../../constant/index'
import Mail from "../../assets/SVG/mail.svg"
import Eyeoff from "../../assets/SVG/eye-off.svg"
import Person from "../../assets/SVG/Person.svg"
import Lock from "../../assets/SVG/lock.svg"
import Search from "../../assets/SVG/Searchicon.svg"


const Custominput = ({value,onChangeText,placholdercolor,placholder,righticon,Lefticon,inputstyle,secureTextEntry,eyepress,icon,fullname,search}) => {
  return (
   <View style={[styles.inputContainer,inputstyle]}>
                <View style={styles.inputWrapper}>
                   {
                    righticon&&
                    <>
                   {
                    icon?
                   <Lock height={hp(6)} width={wp(6)}/>:
                   fullname?
                   <Person height={hp(6)} width={wp(6)}/>:

                  <Mail height={hp(6)} width={wp(6)} />
                   }
                  </>
                   }
                  <TextInput
                    style={styles.input}
                    placeholder={placholder}
                    placeholderTextColor="#9CA3AF"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                  />
                  {
                    Lefticon&&
                    <>
                    {
                      search?
                      <Search height={hp(6)} width={wp(6)}/>:
                      <>
                   {secureTextEntry ? (
        <TouchableOpacity onPress={eyepress}>
          <Eyeoff height={hp(6)} width={wp(6)} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={eyepress}>
          <Eyeoff height={hp(6)} width={wp(6)} fill="gray" /> 
        
        </TouchableOpacity>
      )}
      </>
    }
                    </>
                  }
                </View>
              </View>
  )
}

export default Custominput

const styles = StyleSheet.create({
    inputContainer: {
    marginBottom: hp(2),
    width:"100%"
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingVertical: hp(1),
    paddingHorizontal:wp(4),
    width:"100%"
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
    color: colors.Black,
    paddingVertical: 0,
  },
})