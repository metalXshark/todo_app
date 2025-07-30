<template>
  <div id="app">
    <div class="todo-container">
      <h1 class="title">Todo List</h1>
      <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          class="todo-input"
          placeholder="Enter a new task"
      />
      <ul class="todo-list">
        <li
            v-for="todo in todos"
            :key="todo.id"
            class="todo-item"
        >
          <input
              type="checkbox"
              :checked="todo.completed"
              @change="toggleTodo(todo)"
              class="todo-checkbox"
          />
          <span :class="{ completed: todo.completed }" class="todo-text">{{ todo.text }}</span>
          <button @click="deleteTodo(todo.id)" class="delete-button">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 1, text: 'Выучить Vue', completed: false },
        { id: 2, text: 'Попасть на стажировку в Ozon Tech', completed: false }
      ]
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === '') return;
      this.todos.push({
        id: Date.now(),
        text: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  }
};
</script>

<style scoped>

/* Обеспечиваем 100% высоту для html и body */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Полная высота экрана */
  width: 100%;
}

#app {
  height: 100%; /* Растягиваем на всю высоту */
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}



.title {
  text-align: center;
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
}

.todo-input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.todo-input:focus {
  border-color: #3b82f6;
  outline: none;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s ease;
}

.todo-item:hover {
  background-color: #f0f0f0;
}

.todo-checkbox {
  margin-right: 10px;
}

.todo-text {
  flex-grow: 1;
  font-size: 1.1em;
  color: #333;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #e53935;
}

.delete-button:focus {
  outline: none;
}

/* Анимации */
.todo-item-enter-active,
.todo-item-leave-active {
  transition: opacity 0.3s;
}

.todo-item-enter,
.todo-item-leave-to {
  opacity: 0;
}
</style>
