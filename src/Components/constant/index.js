import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = p => widthPercentageToDP(p);
export const hp = p => heightPercentageToDP(p);
export const MAP_KEY = 'AIzaSyBsj--YFeIgYUSXywCNBdJtHvlCwZD_rcE';
export const OPENCAGE_API_KEY = `b6eb041ec86f4cf983d97a391f18cf12`;

export const colors = {
  primaryColor: '#1D4ED8', // Original primary color
  secondaryColor: '#212529',
  backgroundColor: '#fff',
  textColor: '#A4A4A4',
  textSecondaryColor: '#949494',
  borderColor: '#ddd',
  lightGray: '#F9FAFB',
  DarkWhite: '#FFFFFF',
  white: '#FDFDFD',
  dimWhite: '#f9f9f9',
  modalBackground: '#6a6a6a',
  Black: '#000000',
  dimBlack: '#808080',
  lightBlack: '#2A2A2A',
  lightSilver: '#C4C4C44D',
  red: '#FF0000',
  cream: '#FF82111A',
  greenishBlue: '#3c5760',
  lightGreenishBlue: '#4e6c76',
  grey: '#9CA3AF',
  gold: '#EDB310',
  lightpink: '#FFF9E4',
  forgettxtcolor:"#2A2A2A",
  lightBlue:"#f4f6fd",
  headerborder:"#f8f8f8",
  inputborder:"#dae2f8",
  litishblue:"#e3e9f7",
  transparent:"#c9c3b9",
  darkgrey:"#D9D9D9",
  darkestgrey:"#989898",
  lightestgrey:"#d4d4d4",
  bordergrey:"#efefef",
  standardtextcolor:"#898989",
  greyborder:"#e5e5e5",
  green:"#E9FCEB",
  greentxt:"#4CD964"


};

export const radius = {
  radius1: wp(2),
  radius2: wp(5),
  radius3: wp(7),
  radius4: wp(10),
  radius5: wp(90),
  radius6:wp(3)
};

export const fontSize = {
  extraSmall: wp(2.5),
  regSmall: wp(3.1),
  avgSmall: wp(3.7),
  small: wp(4),
  statusSize: wp(5),
  medium: wp(6),
  large: wp(7),
  mediumLarge: wp(8),
  extraLarge: wp(10),
  doubleXLarge: wp(14),
  superLarge: wp(18),
  regularsize:wp(4.5)
};

export const fontFamily = {
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  DMreg: 'Poppins-Regular',
};
