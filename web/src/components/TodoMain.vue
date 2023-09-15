<script setup>
import { useTaskStore } from "@/store/todo";
import { useSnackbarStore } from "@/store/snackbar";
import { storeToRefs } from "pinia";
import { ref, onBeforeMount } from "vue";
import TodoList from "@/components/TodoList.vue";

// Declaring task store
const taskStore = useTaskStore();

// Declaring reactive variables
const { task, tasks } = storeToRefs(taskStore);
const form = ref();
const isEditing = ref(false);
const isDeleting = ref(false);
const dialog = ref(false);

// Declaring functions
const isRequired = (value) => !!value || "Required field";
const createTask = async () => {
  let message = "";
  const hasForm = await form.value.validate();

  if (!hasForm.valid) return;

  let result = !isEditing.value
    ? await taskStore.create(task.value)
    : await taskStore.update(task.value);

  if (result.data.status) {
    form.value.reset();
    isEditing.value ? (message = "Task updated!") : (message = "Task created!");
  } else {
    message = "Something wrong!";
  }
  useSnackbarStore().showSnackbar(message);
};
const markAsDone = async (id) => {
  let result = await taskStore.markAsDone(id);
  if (result.data.status) {
    useSnackbarStore().showSnackbar("It's done!");
  }
};
const editTask = (t) => {
  isEditing.value = true;
  taskStore.task._id = t.task._id;
  taskStore.task.description = t.task.description;
  taskStore.task.priority = t.task.priority;
};
const confirmRemove = (id) => {
  dialog.value = true;
  taskStore.task._id = id;
}
const deleteTask = async () => {
  dialog.value = false;
  let result = await taskStore.remove(taskStore.task._id);
  if (result.data.status) {
    useSnackbarStore().showSnackbar("Task removed!");
  }
};

onBeforeMount(async () => {
  await taskStore.getAll();
});
</script>

<template>
  <v-container fluid class="pa-15">
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-card class="text-center pa-10">
          <v-card-title>
            <p class="text-h4 font-weight-light ma-10">A Simple TODO List</p>
          </v-card-title>
          <v-form ref="form">
            <v-card-text>
              <v-row>
                <v-col cols="8">
                  <v-text-field
                    v-model="task.description"
                    data-test="input-task-description"
                    id="description"
                    name="task"
                    label="Task description"
                    :rules="[isRequired]"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-select
                    v-model="task.priority"
                    data-test="select-task-priority"
                    id="priotiry"
                    :items="taskStore.taskPriority"
                    item-title="label"
                    item-value="value"
                    label="Set priority"
                    :rules="[isRequired]"
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <v-btn
              data-test="btn-create-task"
              color="primary"
              @click="createTask()"
            >
              {{ isEditing ? "Save" : "Create" }}
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <!-- {{ tasks }}
     -->
    <TodoList
      :tasks="tasks"
      @markAsDone="markAsDone"
      @editTask="editTask"
      @confirmRemove="confirmRemove"
    />
    <v-dialog v-model="dialog" width="500">
      <v-card title="Delete task?">
        <v-card-text>
          Do you want to delete this task?
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click="deleteTask"
            data-test="btn-delete-task"
            >Continue</v-btn
          >
          <v-btn color="secondary" @click="dialog=false"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
