<script setup lang="ts">
import Calculator from "@/core";
import { Plugin } from "@/core";

const plugins: Plugin = [
    {
        name: "add",
        exec: (currentValue, value) => currentValue + value,
    },
    {
        name: "sub",
        exec: (currentValue, value) => currentValue - value,
    },
    {
        name: "square",
        exec: (currentValue, value) => currentValue * currentValue,
    },
    {
        name: "divide",
        exec: (currentValue, value) => currentValue + value,
    },
];

const initialValue = ref(0);

const calclator = new Calculator({ initialValue: initialValue.value, plugins });

const handleClickAdd = () => {
    initialValue.value = calclator.trigger("add", 1);
};
const handleClickSub = () => {
    initialValue.value = calclator.trigger("sub", 1);
};

const handleClickSquare = () => {
    initialValue.value = calclator.trigger("square", 1);
};
</script>

<template>
    <div>Counter: {{ initialValue }}</div>
    <button @click="handleClickAdd">+</button>
    <button @click="handleClickSub">-</button>
    <button @click="handleClickSquare">Square</button>
</template>

<style scoped></style>
