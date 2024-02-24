import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utilities/responsive';

export const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: heightPercentageToDP(8),
    alignItems: 'center',
    position: 'absolute',
    bottom: 2,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  avatarContainer: {
    width: '12%',
    height: heightPercentageToDP(8),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '76%',
    height: heightPercentageToDP(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIconContainer: {
    width: '12%',
    height: heightPercentageToDP(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
