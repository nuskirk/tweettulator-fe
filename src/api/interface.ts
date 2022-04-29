export interface IMessage {
  text: string;
  writer: string,
  reps?: IMessage[]
  parentId?: string,
  _id?: string, 
  createdAt?: string,
}

export interface ICreateMessage extends IMessage { }
