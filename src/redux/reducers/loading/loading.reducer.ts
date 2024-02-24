import { createReducer } from 'reduxsauce';

import initialStates from '../../initial-states';
import { resetStatesTypes } from '../../actions/reset-states/reset-states.action';
import { chatTypes } from '../../../modules/chat/redux/chat.actions';

export const INITIAL_STATE = initialStates.loading;

const fetchingMessagesStart = (state: ILoadingStates) => ({
  ...state,
  isFetchingMessages: true,
});

const fetchingMessagesEnd = (state: ILoadingStates) => ({
  ...state,
  isFetchingMessages: false,
});

const resetStates = () => INITIAL_STATE;
export const HANDLERS = {
  [chatTypes.FETCH_MESSAGES]: fetchingMessagesStart,
  [chatTypes.FETCH_MESSAGES_SUCCESS]: fetchingMessagesEnd,
  [chatTypes.FETCH_MESSAGES_FAILURE]: fetchingMessagesEnd,

  [resetStatesTypes.RESET_ALL_STATES]: resetStates,
};

export default createReducer(INITIAL_STATE, HANDLERS);
