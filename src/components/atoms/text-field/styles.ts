import { StyleSheet } from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utilities/responsive';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.color.blue.light,
    width: '90%',
    borderRadius: heightPercentageToDP(1.5),
    paddingHorizontal: widthPercentageToDP(2),
    height: heightPercentageToDP(6),
  },
  inputField: {
    paddingHorizontal: heightPercentageToDP(0.5),
    fontSize: heightPercentageToDP(1.8),
    color: theme?.color?.black?.original,
    fontFamily: 'Poppins-Regular',
    top: heightPercentageToDP(0.4),
    maxHeight: heightPercentageToDP(7),
  },
});
