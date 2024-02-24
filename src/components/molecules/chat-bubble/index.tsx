import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const ChatBubble = ({ isOwn, userName, message, time }: any) => {
  const containerStyle = isOwn
    ? styles.receiverContainer
    : styles.senderContainer;
  const bubbleStyle = isOwn ? styles.receiverBubble : styles.senderBubble;
  const textStyle = isOwn ? styles.receiver : styles.sender;
  const timeStyle = isOwn ? styles.receiverTime : styles.senderTime;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.bubble, bubbleStyle]}>
        {!isOwn && <Text style={[styles.title, textStyle]}>{userName}</Text>}
        <Text style={[styles.message, textStyle]}>{message}</Text>
        <Text style={[styles.time, timeStyle]}>{time}</Text>
      </View>
    </View>
  );
};

export default ChatBubble;
