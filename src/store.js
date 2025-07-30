import { createStore } from 'vuex';

export default createStore({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    },
    mutations: {
        addTask(state, taskText) {
            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false
            };
            state.tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        toggleTaskCompletion(state, taskId) {
            const task = state.tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter(t => t.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    }
});
