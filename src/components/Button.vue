<script setup>
    const state = defineProps(["name", "handleClick"]);

</script>

<template>
    <button @click="state.handleClick" class="p-2 border rounded-sm hover:bg-blue-200">{{ state.name }}</button>
</template>


<style lang="scss" scoped>

</style>