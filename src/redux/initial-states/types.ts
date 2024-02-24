interface IInitialStates {
  loading: ILoadingStates;
  chat: IChatStates;
  chatUser: IUesrStates;
}
interface ILoadingStates {
  isFetchingMessages: boolean;
}

interface IChatStates {
  messages: IMessage[];
  lastDoc: any;
  totalMessages: number;
}
interface IUesrStates {
  user: string;
}

interface IMessageParams {
  response: IResponse;
  append: boolean;
}

interface IResponse {
  messages: IMessage[];
  lastDoc: IMessage;
  totalMessages: number;
}
