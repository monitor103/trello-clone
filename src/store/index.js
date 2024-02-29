import { createStore } from 'vuex';

export default createStore({
  state: {
    lists: [
      {
        title: 'ToDo',
        cards: [
          { id: 1, title: 'Task 1', description: 'Description for Task 1' },
          { id: 2, title: 'Task 2', description: 'Description for Task 2' }
        ]
      },
      {
        title: 'Doing',
        cards: [
          { id: 3, title: 'Task 3', description: 'Description for Task 3' }
        ]
      },
      {
        title: 'Done',
        cards: [
          { id: 4, title: 'Task 4', description: 'Description for Task 4' },
          { id: 5, title: 'Task 5', description: 'Description for Task 5' }
        ]
      }
    ]
  },
  mutations: {
    // タスクの追加を処理するミューテーション
    addTask(state, payload) {
      const { listIndex, task } = payload;
      state.lists[listIndex].cards.push(task);
    },
    // 他のミューテーションをここに追加する
  },
  actions: {
    // タスクの追加を処理するアクション
    addTask({ commit }, payload) {
      commit('addTask', payload);
    },
    // 他のアクションをここに追加する
  },
  modules: {
    // モジュールの定義
  }
});
