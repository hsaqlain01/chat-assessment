import { call, put, takeEvery } from 'redux-saga/effects';

import { chatCreators, chatTypes } from './chat.actions';
import { fetchAllMessages } from './api';

export function* watchMessages() {
  yield takeEvery(chatTypes.FETCH_MESSAGES, fetchMessages);
}

function* fetchMessages({ params }: ISagaParams): any {
  try {
    const response = yield call(
      fetchAllMessages,
      params?.lastDoc,
      params?.limit
    );

    yield put(
      chatCreators.fetchMessagesSuccess({ response, append: params?.append })
    );
  } catch (e) {
    yield put(chatCreators.fetchMessagesFailure(e));
  }
}
