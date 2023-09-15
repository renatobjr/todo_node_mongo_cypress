<template>
  <v-main class="bg-grey-lighten-4">
    <router-view />

    <v-snackbar
      v-model="snackbar.show"
      data-test="snackbar-component-task"
    >
    <span data-test="snackbar-span-message">
      {{snackbar.message}}
    </span>

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar.show = false"
          data-test="snackbar-btn-dismiss"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script setup>
import { useSnackbarStore } from "@/store/snackbar";
import { storeToRefs } from "pinia";

const snackbarStore = useSnackbarStore();
const { snackbar } = storeToRefs(snackbarStore);

</script>
