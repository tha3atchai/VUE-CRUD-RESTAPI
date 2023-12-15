<template>
    <div class="flex justify-center">
        <q-form @submit.prevent="onSubmit" class="flex flex-col w-[480px] mt-16">
            <q-input v-model="input.fname" label="First Name" />
            <q-input v-model="input.lname" label="Last Name" />
            <q-input v-model="input.username" label="Username Name" />
            <q-input v-model="input.password" label="Password Name" />
            <q-input v-model="input.email" label="Email" />
            <q-input v-model="input.avatar" label="Avatar" />
            <q-btn type="submit">submit</q-btn>
        </q-form>
    </div>
</template>

<script setup>
import router from "@/router";
import axios from "axios";
import { reactive } from "vue";

    const input = reactive({
        fname: "Cat",
        lname: "Chat",
        username: "cat.chat@melivecode.com",
        password: "1234",
        email: "cat.chat@melivecode.com",
        avatar: "https://www.melivecode.com/users/cat.png"
    });


    const onSubmit = async() => {
       await axios.post("https://www.melivecode.com/api/users/create", input); 
       router.push("/page1");
    };
</script>

<style scoped>

</style>