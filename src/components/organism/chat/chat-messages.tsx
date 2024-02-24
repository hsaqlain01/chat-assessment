import { FlatList, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../molecules/header';
import ChatBubble from '../../molecules/chat-bubble';
import Footer from '../../molecules/footer';
import { useTimeFormatter } from '../../../utilities/format-date';
import { styles } from './styles';
import Loader from '../../atoms/loader';
import useMessages from '../../../modules/chat/hooks';

const ChatMessages = ({
  onSendMessage,
}: {
  onSendMessage: (message: IMessage) => void;
}) => {
  const { user } = useSelector((state: IInitialStates) => state.chatUser);
  const { messages, lastDoc } = useSelector(
    (state: IInitialStates) => state.chat
  );
  const { isFetchingMessages } = useSelector(
    (state: IInitialStates) => state.loading
  );
  const { onEndReached } = useMessages();

  return (
    <>
      <Header title={user} />
      <View style={styles.chatContainer}>
        <FlatList
          inverted
          showsHorizontalScrollIndicator={false}
          data={messages}
          keyExtractor={(item: IMessage) => item?._id}
          ListEmptyComponent={<Loader loading={isFetchingMessages} />}
          renderItem={({ item }) => {
            return (
              <View style={styles.conversationContent}>
                <ChatBubble
                  userName={item?.user}
                  isOwn={user === item?.user}
                  message={item?.text}
                  time={useTimeFormatter(item?.createdAt)}
                />
              </View>
            );
          }}
          ListFooterComponent={
            <Loader loading={isFetchingMessages && !!messages?.length} />
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
        />
      </View>
      <Footer onSend={onSendMessage} />
    </>
  );
};

export default ChatMessages;
