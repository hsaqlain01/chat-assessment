import { TouchableOpacity, View } from 'react-native';
import React from 'react';

import TextField from '../../atoms/text-field';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utilities/responsive';
import SendButton from '../../atoms/svgs/send';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const Footer = ({ onSend }: { onSend: (message: any) => void }) => {
  const { user } = useSelector((state: IInitialStates) => state.chatUser);

  const [messageContent, setMessageContent] = React.useState<string>('');
  const onSendMessage = () => {
    onSend({
      _id: Date.now() + 1,
      createdAt: Date.now(),
      text: messageContent,
      user,
    });
    setMessageContent('');
  };
  return (
    <View style={styles.footerContainer}>
      <TextField onChange={setMessageContent} value={messageContent} />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.sendIconContainer}
        onPress={onSendMessage}
      >
        <SendButton
          width={widthPercentageToDP(6.5)}
          height={heightPercentageToDP(6.5)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
