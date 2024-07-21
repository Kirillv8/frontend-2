export interface Message {
  _id: string;
  text: string;
  user: {
    name: string;
    email: string;
  };
  createdAt: Date;
}

export const myArrayMessage: Message[] = [];

export interface DataObject {
  _id: string;
  text: string;
  user: {
    name: string;
    email: string;
  };
  createdAt: Date;
}

export interface GetMyData {
  email: string;
  name: string;
  token: string;
  __v: number;
  _id: string;
}
