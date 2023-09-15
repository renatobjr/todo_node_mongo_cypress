import { defineStore } from 'pinia';
import { ref} from 'vue';

export const useSnackbarStore = defineStore('snackbar', () => {
  const snackbar = ref({
    show: false,
    message: ''
  })

  const showSnackbar = (message) => {
    snackbar.value.show = true;
    snackbar.value.message = message;
  }

  return { snackbar, showSnackbar }
});
