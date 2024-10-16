<script setup lang="ts">
const personStore = usePersonStore()
const router = useRouter()

definePageMeta({
  name: 'personDetail',
})

onMounted(async () => {
  const personId = Number(router.currentRoute.value.params.id)
  await personStore.fetchPersonDetail(personId)
})

const selectPerson = computed(() => personStore.selectedPerson)
</script>

<template>
  <div
    class="detailStyle bg-gradient-to-r from-slate-900 to-slate-700  flex-col justify-center items-align-center gap-3 p-5 "
  >
    <div class="flex relative gap-3 rounded ">
      <div class="relative w-8/12 right-0 p-3 rounded ">
        <img class="left-0  w-4/12 rounded" :src="getImage(selectPerson?.profile_path)">
        <p class="font-bold capitalize text-3xl w-[500px] p-3 ">
          {{ selectPerson?.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detailStyle {
  border-radius: 15px;
  align-content: center;
  width: 70%;
}
</style>
