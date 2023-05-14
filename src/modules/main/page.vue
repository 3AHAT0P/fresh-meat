<script setup lang="ts">
import { reactive, ref } from 'vue';

import { data } from './data';

interface MessageAction {
  key: string;
  text: string;
  next: string;
}

interface Message {
  key: string;
  text: string;
  actions: MessageAction[];
}

interface DisplayedMessage {
  key: string;
  text: string;
  type: 'action' | 'message';
  isHidden: boolean;
}

const state = {

};

const currentMessage = ref<Message>(data[0]);

const messageListEl = ref();

const messages: DisplayedMessage[] = reactive([
  {
    key: data[0].key,
    text: data[0].text,
    type: 'message',
    isHidden: false,
  }
]);

const applyAction = (action: MessageAction) => {
  const message = data.find(({ key }) => action.next === key) ?? null;
  if (message === null) return;

  currentMessage.value = message;
  messages.push({
    key: action.key,
    text: action.text,
    type: 'action',
    isHidden: true,
  });
  messages.push({
    key: message.key,
    text: message.text,
    type: 'message',
    isHidden: true,
  });

  requestAnimationFrame(() => {
    messages[messages.length - 2].isHidden = false;
    setTimeout(() => {
      requestAnimationFrame(() => {
        messages[messages.length - 1].isHidden = false;

        messageListEl.value.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      });
    }, 100);
  });
};
</script>

<template>
  <div class="main">
    <div class="scroll-wrapper">
      <div class="messages" ref="messageListEl">
        <div v-for="message in messages" :key="message.key"
          :class="{ 'message': true, hidden: message.isHidden, 'answer': message.type === 'action' }">
          {{ message.text }}
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="actions">
      <div v-for="action in currentMessage.actions" :key="action.key" class="action" @click="applyAction(action)">
        {{ action.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 600px;
  height: 100%;
  display: grid;
  grid-template-rows: 80% 2px 1fr;
  gap: 16px;
  box-sizing: border-box;
}

@media (max-width: 800px) {
  .main {
    width: 100%;
    padding: 0 8px;
  }
}

.scroll-wrapper {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.messages {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: start;
  place-content: end;
  gap: 8px;
  padding: 8px 0px;
}

.message {
  max-width: 80%;
  width: fit-content;
  border: 1px solid hsl(250deg 100% 75% / 50%);
  border-radius: 24px;
  border-bottom-left-radius: 0px;
  padding: 4px 16px 4px 16px;
  opacity: 1;
  transition: opacity .2s ease-in 0s;
}

.message.hidden {
  opacity: 0;
}

.message.answer {
  justify-self: end;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 0px;
}

.separator {
  border: 1px dashed hsl(0deg 0% 96% / 40%);
  height: 0px;
}

.actions {
  display: flex;
  gap: 16px;
}

.action {
  width: fit-content;
  height: fit-content;
  border: 1px solid hsl(250deg 100% 75% / 50%);
  border-radius: 24px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
}
</style>
