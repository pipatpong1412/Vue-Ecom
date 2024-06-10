<script setup>


</script>


<template>
    <div class="h-screen flex items-center">
        <div class="max-w-2xl flex-1 shadow-xl mx-auto p-8">
            <div class="flex items-center justify-center">
                <h1 class="text-3xl font-bold">Login</h1>
            </div>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Email</span>
                </div>
                <input type="email" placeholder="Your Email" class="input input-bordered w-full" />
            </label>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Password</span>
                </div>
                <input type="password" placeholder="Your Password" class="input input-bordered w-full" />
            </label>
            <RouterLink :to="{ name: 'admin-dashboard' }" class="btn btn-neutral w-full mt-4">Login</RouterLink>
        </div>
    </div>

</template>