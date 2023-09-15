import { defineStore } from 'pinia';
import { ref } from 'vue';
import { createTask, updateTask, removeTask, fetchTodos, markTaskDone } from '@/service/todo';

// Compositing API Like
export const useTaskStore = defineStore('task', () => {
  // Reactive variables
  const task = ref({})
  const tasks = ref();

  // Select options for priority
  const taskPriority = [
    { label: "Low", value: "low" },
    { label: "Normal", value: "normal" },
    { label: "Urgent", value: "urgent" },
  ];

  // Functions:
  async function getAll() {
    let response = await fetchTodos();
    if (response.data.status) {
      this.tasks = response.data.response;
    }
  }

  async function create(task) {
    let response = await createTask(task);
    if (response.data.status) {
      this.getAll();
    }
    return response;
  }

  async function update(task) {
    let response = await updateTask(task);
    if (response.data.status)
      this.getAll();
    return response;
  }

  async function remove(id) {
    let response = await removeTask(id);
    if (response.data.status) {
      this.getAll();
    }
    return response;
  }

  async function markAsDone(id) {
    let response = await markTaskDone(id);
    if (response.data.status) {
      this.getAll();
    }
    return response;
  }

  return {
    task,
    tasks,
    taskPriority,
    getAll,
    create,
    update,
    remove,
    markAsDone }
});


