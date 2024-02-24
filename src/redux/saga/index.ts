import { all } from 'redux-saga/effects';
import { watchMessages } from '../../modules/chat/redux/chat.saga';

export function* rootSaga() {
  yield all([watchMessages()]);
}
