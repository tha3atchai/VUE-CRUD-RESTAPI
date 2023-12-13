<template>
    <div class="flex gap-2 p-3 flex-col w-96 items-center justify-center rounded-md mx-3 shadow-md shadow-slate-300">
        <img class="w-28 rounded-full" src="https://i.pinimg.com/564x/b3/4d/7f/b34d7fbdfca111d4ac3dd7a4d3eee651.jpg" alt="">
        <div class="border w-full" />
        <slot name="card-name"></slot>
        <slot name="card-button"></slot>
        <slot name="card-desc"></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>