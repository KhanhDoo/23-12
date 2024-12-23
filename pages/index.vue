<template>
    <div>
        Homepages
    </div>
    <pre>{{ user }}</pre>
    <NuxtLink to="/auth/login">Login</NuxtLink>
    <NuxtLink to="/auth/register">Regiser</NuxtLink>
    <NuxtLink to="/admin">Admin</NuxtLink>
    <NuxtLink to="/admin/categories">Category</NuxtLink>

    <Button @click="logout">Logout</Button>

</template>

<script setup lang="ts">

const {user, clear} = useUserSession();

definePageMeta({
    middleware: 'auth',
})

const logout = async () => {
    await clear();
    navigateTo('/auth/login');
}

</script>

<style scoped>

</style>