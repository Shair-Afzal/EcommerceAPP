import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { wp, hp, colors, radius, fontSize, fontFamily } from '../../constant';
import Close from '../../assets/SVG/x.svg';
import ChevronDown from '../../assets/SVG/arrowdown.svg';
import Check from '../../assets/SVG/check.svg';
import CustomButton from '../CustomButton/CustomButton';

const CustomDropdown = ({
  data,
  titile,
  price,
  btn,
  styleTitle,
  style,
  onPress,
}) => {
  const [selectedSpec, setSelectedSpec] = useState(null); // which spec is clicked
  const [specValues, setSpecValues] = useState(
    data.reduce((acc, item) => {
      acc[item.id] = item.value;
      return acc;
    }, {}),
  );

  const handleSelect = (specId, option) => {
    setSpecValues({ ...specValues, [specId]: option });
    setSelectedSpec(null);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.titlecontainer}>
        <Text style={[styles.heading, styleTitle]}>{titile}</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>

      {data.map(spec => (
        <TouchableOpacity
          key={spec.id}
          style={styles.row}
          onPress={() => setSelectedSpec(spec.id)}
        >
          <Text style={styles.label}>{spec.title}</Text>
          <View style={styles.valueContainer}>
            {spec.title === 'Color' ? (
              <View
                style={[
                  styles.colorDot,
                  {
                    backgroundColor:
                      spec.colors?.[
                        spec.options.indexOf(specValues[spec.id])
                      ] || '#B5B58B',
                  },
                ]}
              />
            ) : (
              <Text style={styles.value}>{specValues[spec.id]}</Text>
            )}
            <ChevronDown height={hp(4)} width={wp(4)} />
          </View>
        </TouchableOpacity>
      ))}
      {btn && (
        <CustomButton
          btnTitle={'View /Download Spec Sheet'}
          style={{ paddingVertical: hp(2.3) }}
          txtstyle={styles.buttonText}
          onPress={onPress}
        />
      )}

      <Modal visible={!!selectedSpec} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {data.find(s => s.id === selectedSpec)?.title}
              </Text>
              <TouchableOpacity onPress={() => setSelectedSpec(null)}>
                <Close height={hp(6)} width={wp(6)} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={data.find(s => s.id === selectedSpec)?.options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                const spec = data.find(s => s.id === selectedSpec);
                const isSelected = specValues[selectedSpec] === item;
                const colorIndex = spec?.options.indexOf(item);

                return (
                  <TouchableOpacity
                    style={[styles.option, isSelected && styles.activeOption]}
                    onPress={() => handleSelect(selectedSpec, item)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.activeOptionText,
                      ]}
                    >
                      {item}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: wp(2),
                      }}
                    >
                      {spec?.title === 'Color' && (
                        <View
                          style={[
                            styles.colorDot,
                            { backgroundColor: spec?.colors[colorIndex] },
                          ]}
                        />
                      )}
                      {isSelected && <Check height={hp(3.5)} width={wp(3.5)} />}
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: colors.DarkWhite,
    borderWidth: 1,
    borderRadius: radius.radius2,
    marginTop: hp(2),
    borderColor: colors.greyborder,
  },
  heading: {
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.medium,
    color: colors.Black,
    marginBottom: hp(1.5),
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: radius.radius1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    marginBottom: hp(1.5),
  },
  label: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.Black,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  value: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  colorDot: {
    height: hp(2.5),
    width: hp(2.5),
    borderRadius: 100,
  },
  buttonText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.DarkWhite,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    paddingHorizontal: wp(3),
  },
  modalContent: {
    backgroundColor: colors.DarkWhite,
    borderTopLeftRadius: radius.radius2,
    borderTopRightRadius: radius.radius2,
    padding: wp(4),
    maxHeight: hp(50),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  modalTitle: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    color: colors.Black,
  },
  option: {
    height: hp(7),
    paddingHorizontal: wp(3),
    borderRadius: radius.radius1,
    backgroundColor: colors.lightGray,
    marginBottom: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeOption: {
    backgroundColor: colors.primaryColor,
  },
  optionText: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.medium,
    color: colors.Black,
  },
  activeOptionText: {
    color: colors.DarkWhite,
  },
  priceText: {
    fontSize: fontSize.statusSize,
    fontFamily: fontFamily.bold,
    color: colors.primaryColor,
    fontWeight: '700',
  },
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: hp(1.5),
  },
});
