<script setup>
const navBarItems = ref([{
  label: 'Popüler Filmler',
  name: 'movies',
}, {
  label: 'Oyuncular',
  name: 'persons',
}])
</script>

<template>
  <div class="w-full flex items-center justify-start gap-6 bg-gray-950 px-4">
    <div class="flex gap-2">
      <img src="/public/owl.svg" alt="owl image" class=" size-16  gap-3">
      <label class="font-bold text-5xl left-25 alighn-middle gap-3 bg-gradient-to-r from-amber-400 to-yellow-100 bg-clip-text text-transparent ">
        RoyOwl </label>
    </div>
    <div>
      <NuxtLink v-for="(item, index) in navBarItems" :key="index" :to="{ name: item.name }" class="text-white mx-2 font-semibold hover:underline">
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>
