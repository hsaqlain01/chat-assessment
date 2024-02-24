import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { chatCreators } from '../../../modules/chat/redux/chat.actions';
import useMessages from '../../../modules/chat/hooks';
import ChatMessages from './chat-messages';

const ChatOrganism = () => {
  const dispatch = useDispatch();

  const { onSend, onSnapshot } = useMessages();

  useEffect(() => {
    onSnapshot(); // Used for handling real-time message reception
    dispatch(chatCreators.fetchMessages({ append: false }));

    return () => {
      // Invoke the onSnapshot function to unsubscribe from real-time message updates when the component unmounts
      onSnapshot();
    };
  }, []);

  const onSendMessage = useCallback(async (message: IMessage) => {
    await onSend(message);
  }, []);

  return (
    <>
      <ChatMessages onSendMessage={onSendMessage} />
    </>
  );
};

export default ChatOrganism;
