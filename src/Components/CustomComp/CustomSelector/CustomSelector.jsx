import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DropArrow from '../../assets/SVG/downarrow.svg';
import { wp, hp, colors, radius, fontSize, fontFamily } from '../../constant';

const CustomSelector = ({ label, data, placeholder, value, onChange }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Dropdown
        style={[
          styles.dropdown,
          isFocus && { borderColor: colors.primaryColor },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={hp(30)}
        labelField="label"
        valueField="value"
        placeholder={placeholder || 'Select an option'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onChange(item.value);
          setIsFocus(false);
        }}
        renderRightIcon={() => (
          <DropArrow
            width={wp(4.5)}
            height={wp(4.5)}
            style={{
              transform: [{ rotate: isFocus ? '180deg' : '0deg' }],
            }}
          />
        )}
      />
    </View>
  );
};

export default CustomSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(1),
  },
  label: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.secondaryColor,
    marginBottom: hp(0.7),
  },
  dropdown: {
    height: hp(7),
    borderColor: colors.inputborder,
    // borderWidth: 1,
    borderRadius: radius.radius1,
    paddingHorizontal: wp(4),
    backgroundColor: colors.white,
    elevation:5,
  },
  placeholderStyle: {
    fontSize: fontSize.regSmall,
    color: colors.textColor,
    fontFamily: fontFamily.DMreg,
  },
  selectedTextStyle: {
    fontSize: fontSize.regSmall,
    color: colors.Black,
    fontFamily: fontFamily.medium,
  },
  itemTextStyle: {
    fontSize: fontSize.regSmall,
    color: colors.secondaryColor,
    fontFamily: fontFamily.DMreg,
  },
  inputSearchStyle: {
    height: hp(5),
    fontSize: fontSize.regSmall,
    borderRadius: radius.radius6,
  },
  iconStyle: {
    marginRight: wp(2),
  },
});
