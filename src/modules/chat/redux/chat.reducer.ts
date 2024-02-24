import { createReducer } from 'reduxsauce';
import initialStates from '../../../redux/initial-states';
import { chatTypes } from './chat.actions';
import { resetStatesTypes } from '../../../redux/actions/reset-states/reset-states.action';

export const INITIAL_STATE = initialStates.chat;

const fetchMessagesSuccess = (
  state: IChatStates,
  { info }: { info: IMessageParams }
) => {
  const { response, append } = info;
  return {
    ...state,
    messages: !append
      ? response?.messages
      : [...(state.messages || []), ...(response?.messages || [])],
    lastDoc: response?.lastDoc,
    totalMessages: response?.totalMessages,
  };
};

const appendMessages = (
  state: IChatStates,
  { message }: { message: IMessage }
) => {
  return {
    ...state,
    messages: [message, ...(state.messages || [])],
  };
};

const resetStates = () => INITIAL_STATE;
export const HANDLERS = {
  [chatTypes.FETCH_MESSAGES_SUCCESS]: fetchMessagesSuccess,
  [chatTypes.APPEND_MESSAGES]: appendMessages,
  [resetStatesTypes.RESET_ALL_STATES]: resetStates,
};

export default createReducer(INITIAL_STATE, HANDLERS);
