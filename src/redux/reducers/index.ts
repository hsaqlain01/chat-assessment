import { combineReducers } from 'redux';

import loadingReducer from './loading/loading.reducer';
import chatReducer from '../../modules/chat/redux/chat.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  chat: chatReducer,
  chatUser: userReducer,
});

export default rootReducer;
