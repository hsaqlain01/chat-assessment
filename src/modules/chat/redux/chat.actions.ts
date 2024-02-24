import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchMessages: ['params'],
  fetchMessagesSuccess: ['info'],
  fetchMessagesFailure: null,

  appendMessages: ['message'],
});

export const chatTypes = Types;
export const chatCreators = Creators;
