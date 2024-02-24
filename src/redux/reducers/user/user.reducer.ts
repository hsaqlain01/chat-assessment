import { createReducer } from 'reduxsauce';
import initialStates from '../../initial-states';
import { resetStatesTypes } from '../../actions/reset-states/reset-states.action';
import { userTypes } from '../../actions/user/user.action';
import { generateRandomUsername } from '../../../utilities/generate-random-user';

export const INITIAL_STATE = initialStates.chatUser;

const storeUserId = (state: IUesrStates) => {
  return {
    ...state,
    user: generateRandomUsername(),
  };
};

const resetStates = () => INITIAL_STATE;
export const HANDLERS = {
  [userTypes.STORE_USER_ID]: storeUserId,
  [resetStatesTypes.RESET_ALL_STATES]: resetStates,
};

export default createReducer(INITIAL_STATE, HANDLERS);
