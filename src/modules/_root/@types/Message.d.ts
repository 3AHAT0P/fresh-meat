import { MessageAction } from './MessageAction';

export interface Message {
  key: string;
  text: string;
  actions: MessageAction[];
}
