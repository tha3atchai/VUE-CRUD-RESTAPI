<template>
    <form @submit.prevent="onSubmit">
        <div>
            <input class="border" v-model.trim="input.name" />
        </div>
        <div>
            <input class="border" v-model="input.salary" />
        </div>
        <div>
            <Button name="Submit" type="submit" />
        </div>
    </form>
</template>

<script setup>
import { reactive } from "vue";
import Button from "./Button.vue";
    const emit = defineEmits(["createData"]);

    const input = reactive({
        name: "",
        salary: 0,
    });

    const resetForm = () => {
        input.name = "";
        input.salary = 0;
    };

    const onSubmit = () => {
        emit("createData", input);
        resetForm();
    };

</script>

<style scoped>

</style>