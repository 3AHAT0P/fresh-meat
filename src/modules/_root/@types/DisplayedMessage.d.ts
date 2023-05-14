export interface DisplayedMessage {
  key: string;
  text: string;
  type: 'action' | 'message';
  isHidden: boolean;
}
