<script setup>


defineProps({
    headers: Array
})


</script>


<template>
    <div class="overflow-x-auto">
        <table class="table">
            <thead>
                <th v-for="header in headers"> {{ header }}
                </th>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>