import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  storeUserId: null,
});

export const userTypes = Types;
export const userCreators = Creators;
