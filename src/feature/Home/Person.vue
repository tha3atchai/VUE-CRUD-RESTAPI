<template>
    <Card>
        <template v-slot:card-name>
            <h1 class="text-2xl font-semibold">{{ state.data.name }}</h1>
        </template>
        <template v-slot:card-button>
            <div class="flex gap-2 justify-center">
                <Button :name="'รายละเอียด'" :handleClick="handleClick"/>
                <Button :name="'ลบข้อมูล'" :handleClick="() => handleClick('delete')"/>
            </div>
        </template>
        <template v-slot:card-desc>
            <div v-show="state.data.isVisible">
                เงินเดือน: {{ state.data.salary }} ตำแหน่งงาน: {{ state.data.department }}
            </div>
        </template>
    </Card>
</template>

<script setup>
import Card from "@/components/Card.vue";
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