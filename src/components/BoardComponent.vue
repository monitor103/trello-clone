<template>
  <div class="board">
    <div v-for="(list, index) in lists" :key="index" class="list">
      <h2>{{ list.title }}</h2>
      <div v-for="(card, cardIndex) in list.cards" :key="cardIndex" class="card">
        {{ card.title }}
      </div>
      <button @click="addTask(index)">タスク追加</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['lists'])
  },
  methods: {
    addTask(index) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        title: '新しいタスク',
        description: 'タスクの説明'
      };
      this.lists[index].cards.push(newTask);
    }
  }
}
</script>

<style>
.board {
  display: flex;
  flex-direction: row;
}

.list {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.card {
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
