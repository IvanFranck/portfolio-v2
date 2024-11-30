<template>
    <div>
        projet {{ route.params.id }}
    </div>
</template>

<script setup>

const route = useRoute();

console.log('route', route);
</script>