interface IMessage {
  _id: string;
  createdAt: string;
  text: string;
  user: string;
}

interface ISagaParams {
  params: {
    lastDoc: IMessage;
    append: boolean;
    limit: number;
  };
  type: string;
}
