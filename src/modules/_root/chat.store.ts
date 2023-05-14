import { defineStore } from 'pinia';

import { data } from './data';
import { DisplayedMessage } from './@types/DisplayedMessage';
import { Message } from './@types/Message';
import { MessageAction } from './@types/MessageAction';

interface ChatState {
  currentMessage: Message;
  messages: DisplayedMessage[];
}

interface ChatActions {
  runAction(action: MessageAction): boolean;
  loadHistory(keys: string[]): void;
}

export const useChatStore = defineStore<'chat', ChatState, {}, ChatActions>('chat', {
  state: () => {
    return {
      currentMessage: data[0],
      messages: [
        {
          key: data[0].key,
          text: data[0].text,
          type: 'message',
          isHidden: false,
        },
      ],
    };
  },
  actions: {
    runAction(action: MessageAction): boolean {
      const message = data.find(({ key }) => action.next === key) ?? null;
      if (message === null) return false;

      this.currentMessage = message;
      this.messages.push({
        key: action.key,
        text: action.text,
        type: 'action',
        isHidden: true,
      });
      this.messages.push({
        key: message.key,
        text: message.text,
        type: 'message',
        isHidden: true,
      });

      return true;
    },
    loadHistory(keys: string[]): void {
      this.messages = [];
      for (const _key of keys) {
        if (_key.includes('a')) {
          const messageKey = _key.split('a')[0];
          const message = data.find(({ key }) => messageKey === key) ?? null;
          if (message === null) return console.log('ERROR1', messageKey);
          const action = message.actions.find(({ key }) => _key === key) ?? null;
          if (action === null) return console.log('ERROR2', _key);

          this.messages.push({
            key: action.key,
            text: action.text,
            type: 'action',
            isHidden: true,
          });
          continue;
        }
        const message = data.find(({ key }) => _key === key) ?? null;
        if (message === null) return console.log('ERROR3', _key);

        this.messages.push({
          key: message.key,
          text: message.text,
          type: 'message',
          isHidden: true,
        });

      }
      const lastKey = keys.at(-1);
      const lastMessage = data.find(({ key }) => lastKey === key) ?? null;
      if (lastMessage === null) return console.log('ERROR4', lastKey);

      this.currentMessage = lastMessage;
    }
  },
})