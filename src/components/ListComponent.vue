<template>
  <div class="list">
    <h2>{{ list.title }}</h2>
    <div v-for="(card, index) in list.cards" :key="index">
      <Card :card="card" />
    </div>
    <button @click="addTask">タスク追加</button>
  </div>
</template>

<script>
import Card from './CardComponent.vue';

export default {
  components: {
    Card
  },
  props: ['list'],
  methods: {
    addTask() {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        title: '新しいタスク',
        description: 'タスクの説明'
      };
      this.list.cards.push(newTask);
    }
  }
}
</script>

<style>
.list {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}
</style>
