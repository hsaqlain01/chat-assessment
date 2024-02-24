import firestore from '@react-native-firebase/firestore';

import { Collection } from '../enums';
import { CHAT_PAGINATION_LIMIT } from '../constants';

export const fetchAllMessages = async (
  lastVisible: IMessage,
  limit?: number
) => {
  try {
    let query = firestore()
      .collection(Collection.Chat)
      .orderBy('createdAt', 'desc')
      .limit(limit || CHAT_PAGINATION_LIMIT);

    if (lastVisible) {
      query = query.startAfter(lastVisible);
    }

    const querySnapshot = await query.get();

    const messages = querySnapshot.docs.map((doc) => ({
      _id: doc.data()._id,
      createdAt: doc.data().createdAt,
      text: doc.data().text,
      user: doc.data().user,
    }));

    // Get the last visible document to be used for pagination
    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    const messagesCount = await firestore().collection('chats').get();

    return { messages, lastDoc, totalMessages: messagesCount.size };
  } catch (error) {
    console.error('Error fetching messages: ', error);
    throw error;
  }
};
