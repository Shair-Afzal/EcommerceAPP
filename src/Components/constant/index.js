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
  secondaryColor: '#323142D4',
  backgroundColor: '#fff',
  textColor: '#333',
  textSecondaryColor: '#666',
  borderColor: '#ddd',
  lightGray: '#F9FAFB',
  DarkWhite: '#FFFFFF',
  white: '#FDFDFD',
  dimWhite: '#f9f9f9',
  modalBackground: '#6a6a6a',
  Black: '#000000',
  dimBlack: '#808080',
  lightBlack: '#0D0D0DCC',
  lightSilver: '#C4C4C44D',
  red: '#FF0000',
  cream: '#FF82111A',
  greenishBlue: '#3c5760',
  lightGreenishBlue: '#4e6c76',
  grey: '#B0B0B0',
  gold: '#EDB310',
  lightpink: '#FFF9E4',

};

export const radius = {
  radius1: wp(2),
  radius2: wp(5),
  radius3: wp(7),
  radius4: wp(10),
  radius5: wp(90),
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
};

export const fontFamily = {
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  DMreg: 'Poppins-Regular',
};
