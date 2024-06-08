<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { onMounted, ref } from 'vue';


const profileImageUrl = ref('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')
const email = ref('')
const name = ref('')


const hdlFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const updateProfile = () => {
    const profileData = {
        imageUrl: profileImageUrl.value,
        name: name.value,
        email: email.value
    }

    localStorage.setItem('profile-data', JSON.stringify(profileData))
}

onMounted(() => {
    let profileData = localStorage.getItem('profile-data')
    if (profileData) {
        profileData = JSON.parse(profileData)
        profileImageUrl.value = profileData.imageUrl
        email.value = profileData.email
        name.value = profileData.name
    }
})

</script>

<template>
    <div>
        <UserLayout>
            <div class=" max-w-2xl mx-auto border border-base-200 shadow-xl px-4 pb-4">
                <div class="font-bold text-2xl">Your Profile</div>
                <div class="flex flex-col items-center">
                    <div class="avatar">
                        <div class="w-36 rounded-full">
                            <img :src="profileImageUrl" />
                        </div>
                    </div>
                    <input class="mt-4" type="file" @change="hdlFileUpload($event)">
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text">Email</span>
                        </div>
                        <input v-model="email" type="text" placeholder="Type here"
                            class="input input-bordered w-full rounded-none" />
                        <div class="label">
                            <span class="label-text">Name</span>
                        </div>
                        <input v-model="name" type="text" placeholder="Type here"
                            class="input input-bordered w-full rounded-none" />
                    </label>
                    <button @click="updateProfile" class="btn btn-neutral w-full mt-4">Update Profile</button>
                </div>
            </div>
        </UserLayout>
    </div>
</template>