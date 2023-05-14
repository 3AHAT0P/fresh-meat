<script setup lang="ts">
import { reactive, ref, toRefs, watch, watchEffect } from 'vue';

import { MessageAction } from './@types/MessageAction';
import { useChatStore } from './chat.store';

const chatStore = useChatStore();

const messageListEl = ref();

watch(
  () => chatStore.messages.length,
  () => {
    requestAnimationFrame(() => {
      messageListEl.value.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    });
  }
);

const applyAction = (action: MessageAction) => {
  if (!chatStore.runAction(action)) return;
};
</script>

<template>
  <div class="main">
    <div class="scroll-wrapper">
      <div class="messages" ref="messageListEl">
        <div v-for="message in chatStore.messages" :key="message.key"
          :class="{ 'message': true, 'answer': message.type === 'action' }">
          {{ message.text }}
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="actions">
      <div v-for="action in chatStore.currentMessage.actions" :key="action.key" class="action" @click="applyAction(action)">
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

@keyframes fade-in {
  0%    { opacity: 0; }
  100%  { opacity: 1; }
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
  animation-name: fade-in;
  animation-duration: .4s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-delay: 0s;
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
