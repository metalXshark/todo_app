<template>
  <div class="todo-item">
    <input type="checkbox" v-model="task.completed" @change="toggleComplete" />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button @click="deleteTask">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    toggleComplete() {
      this.$store.commit('toggleTaskCompletion', this.task.id);
    },
    deleteTask() {
      this.$store.commit('deleteTask', this.task.id);
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.completed {
  text-decoration: line-through;
}
button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
