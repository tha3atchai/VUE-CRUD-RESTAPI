<template>
    <div class="flex justify-center">
        <q-form @submit.prevent="onSubmit" class="flex flex-col w-[480px] mt-16">
            <q-input v-model="input.id" label="ID" readonly />
            <q-input v-model="input.fname" label="First Name" />
            <q-input v-model="input.lname" label="Last Name" />
            <q-input v-model="input.username" label="Username Name" />
            <q-input v-model="input.password" label="Password Name" />
            <q-input v-model="input.email" label="Email" />
            <q-input v-model="input.avatar" label="Avatar" />
            <q-btn type="submit">Edit</q-btn>
        </q-form>
    </div>
</template>

<script setup>
import router from "@/router";
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const fetchData = async() => {
    const res = await axios.get(`https://www.melivecode.com/api/users/${route.params.id}`);
    input.value = res.data.user;
};

fetchData();

    const input = ref({
        id: "",
        fname: "",
        lname: "",
        username: "",
        password: "",
        email: "",
        avatar: "",
    });

    const onSubmit = async() => {
        await axios.put("https://www.melivecode.com/api/users/update", input.value);
        router.push("/page1");
    };
</script>

<style scoped>

</style>