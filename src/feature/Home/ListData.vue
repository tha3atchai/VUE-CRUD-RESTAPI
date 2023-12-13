<template>
    <div class="flex flex-col gap-2">
        <Person v-for="(el, index) in employees" :key="index" :data="el" @showData="toggleData" @deleteData="deleteData"/>
    </div>
</template>

<script setup>
import Person from "./Person.vue"
import { reactive, ref } from "vue";

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
    console.log("id", id);
    employees.value = employees.value.filter(x => x.id !== id);
   };

</script>

<style scoped>

</style>