<template>
    <li class="flex gap-2 flex-col shadow-md shadow-slate-300 list-none rounded-md justify-center items-center mx-3 p-2">
        <h1 class="text-2xl font-semibold">{{ state.data.name }}</h1>
        <div class="flex gap-2 justify-center">
            <Button :name="'รายละเอียด'" :handleClick="handleClick"/>
            <Button :name="'ลบข้อมูล'" :handleClick="() => handleClick('delete')"/>
        </div>
        <div v-show="state.data.isVisible">
            เงินเดือน: {{ state.data.salary }} ตำแหน่งงาน: {{ state.data.department }} isVisible: {{ state.data.isVisible }}
        </div>
    </li>
</template>

<script setup>
import Button from "../../components/Button.vue"

    const emit = defineEmits(["showData", "deleteData"]);

    const handleClick = (name) => {
       if(name === "delete")return emit("deleteData", state.data.id);
       emit("showData", state.data.id); 
    };

    const state = defineProps(["data"]);
</script>

<style scoped>

</style>