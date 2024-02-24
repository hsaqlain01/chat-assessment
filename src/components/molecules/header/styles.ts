import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utilities/responsive';

import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  headerContainer: {
    borderColor: 'lightgrey',
    width: '100%',
    alignItems: 'center',
  },

  boxShadow: {
    borderBottomWidth: 1,
  },

  container: {
    width: '94%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(1.5),
  },

  greeting: {
    fontSize: heightPercentageToDP(1.8),
    fontFamily: 'Poppins-Regular',
  },

  title: {
    marginLeft: heightPercentageToDP(1.6),
    fontSize: heightPercentageToDP(1.8),
    fontFamily: 'Poppins-Medium',
    color: theme.color.grey.dark,
  },

  centerAlign: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

  centerTitle: {
    fontSize: heightPercentageToDP(1.9),
    fontFamily: 'Poppins-Medium',
    color: theme.color.grey.original,
    marginLeft: 5,
  },
});
