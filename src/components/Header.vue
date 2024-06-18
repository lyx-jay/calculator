<template>
    <el-menu
        default-active="0"
        flex
        items-center
        mode="horizontal"
        :ellipsis="false"
        :router="true"
    >
        <el-menu-item index="0" route="/"> Home </el-menu-item>
        <el-menu-item index="1" route="/blog"> Blog </el-menu-item>
        <div class="flex-grow" />
        <el-button text @click="toggleDark()">
            <button class="i-carbon-sun dark:i-carbon-moon" />
        </el-button>
    </el-menu>
</template>

<script lang="ts" setup></script>

<style>
.flex-grow {
    flex-grow: 1;
}
</style>
