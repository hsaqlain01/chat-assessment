import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../../utilities/responsive';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: heightPercentageToDP(1),
  },

  receiverContainer: {
    alignItems: 'flex-end',
  },

  senderContainer: {
    alignItems: 'flex-start',
  },

  bubble: {
    paddingHorizontal: heightPercentageToDP(1.5),
    paddingVertical: heightPercentageToDP(1),
    borderBottomLeftRadius: heightPercentageToDP(1.5),
    borderBottomRightRadius: heightPercentageToDP(1.5),
  },

  receiverBubble: {
    backgroundColor: theme?.color?.blue?.original,
    borderTopLeftRadius: heightPercentageToDP(1.5),
    marginLeft: heightPercentageToDP(4),
  },

  senderBubble: {
    backgroundColor: theme?.color?.blue?.light,
    borderTopRightRadius: heightPercentageToDP(1.5),
    marginRight: heightPercentageToDP(4),
  },

  title: {
    fontSize: heightPercentageToDP(1.5),
    fontFamily: 'Poppins-SemiBold',
    color: theme?.color?.black?.original,
    textTransform: 'capitalize',
  },
  receiver: {
    color: theme?.color?.white?.original,
    textAlign: 'left',
  },
  sender: {
    color: theme?.color?.black?.original,
    textAlign: 'left',
  },

  message: {
    fontSize: heightPercentageToDP(1.65),
    fontFamily: 'Poppind-Regular',
    fontWeight: '500',
  },

  time: {
    fontSize: heightPercentageToDP(1.2),
    fontFamily: 'Poppins-Medium',
    color: theme?.color?.black?.original,
  },

  receiverTime: {
    color: '#fff',
    textAlign: 'left',
  },

  senderTime: {
    color: 'black',
    textAlign: 'right',
  },
});
