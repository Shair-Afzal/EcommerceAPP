import React, { useMemo, useRef, forwardRef, useImperativeHandle } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet"; // Import Backdrop if using
import { wp, hp, colors, fontSize, fontFamily, radius } from "../../constant";
import LocationIcon from "../../assets/SVG/location.svg"; // replace with your location SVG

// Backdrop component (optional: dims the map when sheet is open)
const CustomBackdrop = (props) => (
  <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={-1}
    appearsOnIndex={0}
    opacity={0.5}
  />
);

const LocationBottomSheet = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);

  // Snap points for bottom sheet
  const snapPoints = useMemo(() => ["40%"], []);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    close: () => {
      bottomSheetRef.current?.close();
    },
    expand: () => {
      bottomSheetRef.current?.expand();
    }
  }));

  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0} // Start closed; use expand() to open
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.handleIndicator}
      backdropComponent={CustomBackdrop} // Optional dimming
      onClose={props.onClose}
    >
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>Location Details</Text>
        <View style={styles.divider} />

        {/* Address */}
        <Text style={styles.label}>Address</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="267 New Avenue Park, New York"
            placeholderTextColor={colors.textColor}
            style={styles.input}
          />
          <LocationIcon width={wp(5)} height={wp(5)} />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleClose}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

// Remove the outer View with absolute positioning – BottomSheet handles it internally
// Styles remain mostly the same, but remove container style since it's not needed
const styles = StyleSheet.create({
  // Remove container style
  sheetBackground: {
    borderTopLeftRadius: radius.radius3,
    borderTopRightRadius: radius.radius3,
    backgroundColor: colors.backgroundColor,
  },
  handleIndicator: {
    backgroundColor: colors.grey,
    width: wp(15),
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  title: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    textAlign: "center",
    marginBottom: hp(1.5),
  },
  divider: {
    height: 1,
    backgroundColor: colors.bordergrey,
    marginBottom: hp(2),
  },
  label: {
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.bold,
    color: colors.Black,
    marginBottom: hp(1),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    borderRadius: radius.radius2,
    borderWidth: 1,
    borderColor: colors.inputborder,
    paddingHorizontal: wp(4),
    marginBottom: hp(3),
  },
  input: {
    flex: 1,
    fontSize: fontSize.regSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.Black,
    paddingVertical: hp(1.5),
  },
  button: {
    backgroundColor: colors.primaryColor,
    borderRadius: radius.radius2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(1.8),
  },
  buttonText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    color: colors.DarkWhite,
  },
});

export default LocationBottomSheet;