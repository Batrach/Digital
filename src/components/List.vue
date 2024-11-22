<template>
  <div class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl font-bold mb-4">Список заявок</h2>
    <h3 class="text-lg font-bold">Заявки из формы A</h3>
    <table class="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border border-gray-300 p-2">ID</th>
          <th class="border border-gray-300 p-2">Сообщение</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(application, index) in applicationsA" :key="index">
          <td class="border border-gray-300 p-2">{{ application.id }}</td>
          <td class="border border-gray-300 p-2">{{ application.message }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="applicationsA.length === 0" class="mt-4">Нет заявок из формы A.</p>

    <h3 class="text-lg font-bold mt-4">Заявки из формы B</h3>
    <table class="min-w-full border-collapse border border-gray-300 mt-2">
      <thead>
        <tr>
          <th class="border border-gray-300 p-2">ID</th>
          <th class="border border-gray-300 p-2">Сообщение</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(application, index) in applicationsB" :key="index">
          <td class="border border-gray-300 p-2">{{ application.id }}</td>
          <td class="border border-gray-300 p-2">{{ application.message }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="applicationsB.length === 0" class="mt-4">Нет заявок из формы B.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFormStore } from '../store/formStore';

export default defineComponent({
  name: "List",
  setup() {
    const formStore = useFormStore();
    return {
      applicationsA: formStore.applicationsA,
      applicationsB: formStore.applicationsB,
    };
  },
});
</script>

<style scoped>
table {
  width: 100%;
}
</style>