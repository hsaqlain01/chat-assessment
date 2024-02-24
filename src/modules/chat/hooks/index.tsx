import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

import { chatCreators } from '../redux/chat.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Collection } from '../enums';
import { CHAT_PAGINATION_LIMIT } from '../constants';

function useMessages() {
  const dispatch = useDispatch();
  const { lastDoc, totalMessages, messages } = useSelector(
    (state: IInitialStates) => state.chat
  );
  const { isFetchingMessages } = useSelector(
    (state: IInitialStates) => state.loading
  );

  const onSend = async (message: IMessage) => {
    try {
      const { text } = message;
      if (text) {
        await firestore().collection(Collection.Chat).add(message);
      }
    } catch (error) {
      Alert.alert("Message didn't send due to some problem");
    }
  };

  const onSnapshot = () => {
    let query = firestore()
      .collection(Collection.Chat)
      .orderBy('createdAt', 'desc');

    return query.onSnapshot(
      (querySnapshot) => {
        const updatedMessages: IMessage[] = [];
        querySnapshot.forEach((doc) => {
          updatedMessages.push({
            _id: doc.id,
            createdAt: doc.data().createdAt,
            text: doc.data().text,
            user: doc.data().user,
          });
        });
        dispatch(chatCreators.appendMessages(updatedMessages[0]));
      },
      (error) => {
        console.error('Error fetching and subscribing to messages: ', error);
      }
    );
  };

  // messages pagination
  const onEndReached = () => {
    if (messages?.length == 0 || isFetchingMessages) return;
    if (messages?.length < totalMessages) {
      let remainingRecords = totalMessages - messages?.length;
      const remainingLimit =
        remainingRecords >= CHAT_PAGINATION_LIMIT
          ? CHAT_PAGINATION_LIMIT
          : remainingRecords;

      dispatch(
        chatCreators.fetchMessages({
          append: true,
          lastDoc,
          limit: remainingLimit,
        })
      );
    }
  };

  return { onSend, onSnapshot, onEndReached };
}

export default useMessages;
