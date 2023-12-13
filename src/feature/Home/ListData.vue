<template>
  <FormComponent @createData="createData" />
    <ul class="flex flex-col gap-2">
        <Person v-for="(el, index) in employees" :key="index" :data="el" @showData="toggleData" @deleteData="deleteData"/>
    </ul>
</template>

<script setup>
import FormComponent from "@/components/FormComponent.vue";
import Person from "./Person.vue"
import { ref } from "vue";

const employees = ref([
  {id: 1, name: "kong", salary: 40000, department: "โปรแกรมเมอร์", isVisible: false},
  {id: 2, name: "kam", salary: 30000, department: "ฝ่ายการตลาด", isVisible: false},
  {id: 3, name: "jojo", salary: 20000, department: "โปรแกรมเมอร์", isVisible: false},
  {id: 4, name: "tuktan", salary: 18000, department: "กราฟฟิก", isVisible: false},
]);

   const toggleData = id => {
    employees.value.map(x => x.id === id ? x.isVisible = !x.isVisible: x);
   };

   const deleteData = id => {
    employees.value = employees.value.filter(x => x.id !== id);
   };

   const createData = (input) => {
    const newEmployees = {
      id: employees.value.length + 1,
      name: input.name,
      salary: input.salary,
      department: "programmer",
      isVisible: false,
    };
    employees.value.push(newEmployees);
   };

</script>

<style scoped>

</style>