import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../../utilities/responsive';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  avatar: {
    width: heightPercentageToDP(4.5),
    height: heightPercentageToDP(4.5),
    backgroundColor: theme.color.blue.original,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPercentageToDP(1),
  },
  avatarTitle: {
    fontSize: heightPercentageToDP(2),
    color: theme?.color?.white?.original,
    textTransform: 'capitalize',
  },
});
