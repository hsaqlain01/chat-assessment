import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../../utilities/responsive';

export const styles = StyleSheet.create({
  conversationContent: { width: '94%', alignSelf: 'center' },

  chatContainer: { flex: 1, marginBottom: heightPercentageToDP(8) },
});
