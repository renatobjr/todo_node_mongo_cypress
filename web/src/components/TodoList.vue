<script setup>
defineProps(['tasks'])

</script>

<style>
.urgent {
  color: red !important;
}
.normal {
  color: orange !important;
}
.low {
  color: gray !important;
}
</style>

<template>
  <v-row align="center" justify="center">
      <v-col
        v-if="tasks != undefined && tasks.length > 0"
        cols="8">

        <v-card
          v-for="task in tasks"
          :key="task._id"
        >
          <v-list
            density="compact"
            class="pa-0"
            data-test="list-item-task"
          >
            <v-row style="margin: 0 auto !important;">
              <v-col
                cols="1"
                style="display: flex;align-items: center;"
              >
                <v-icon data-test="icon-task-priority" :class="task.priority">mdi-alert-rhombus</v-icon>
              </v-col>
              <v-col cols="9">
                <v-list-item data-test="list-title-task" :title="task.description"> </v-list-item>
              </v-col>
              <v-col cols="2" style="display: flex;align-items: center;">
                <v-icon data-test="btn-mark-as-done-task" class="mr-5" @click="$emit('markAsDone', task._id)">mdi-check</v-icon>
                <v-icon data-test="btn-edit-task" class="mr-5" @click="$emit('editTask', {task})">mdi-pencil</v-icon>
                <v-icon data-test="btn-remove-task" class="mr-5" @click="$emit('confirmRemove', task._id)">mdi-delete</v-icon>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-list>
        </v-card>
      </v-col>
      <v-col
        cols="8"
        v-else
      >
        <span class="pa-0" style="display: flex; justify-content: center;">
          <v-icon size="x-large">mdi-party-popper</v-icon>
        </span>
        <p style="text-align: center;" class="text-h5 font-weight-light ma-2">There's nothing ToDo!</p>
      </v-col>
    </v-row>
</template>
