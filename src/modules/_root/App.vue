<script setup lang="ts">
  const messages = [
    {
      id: 1,
      text: '123',
    },
  ];
  const actions = [
    {
      id: 1,
      text: 'qwe',
    },
  ]
</script>

<template>
  <div class="main">
    <div class="messages">
      <div v-for="message in messages" :key="message.id" class="message">{{ message.text }}</div>
    </div>
    <div class="actions">
      <div v-for="action in actions" :key="action.id" class="action">{{ action.text }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
