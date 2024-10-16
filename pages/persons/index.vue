<script setup lang="ts">
const personStore = usePersonStore()
onMounted(async () => {
  await personStore.fetchPersons()
})
</script>

<template>
  <div>
    <h1 class="text-white-400/100 text-2xl font-bold p-5">
      Popüler Oyuncular
    </h1>
    <div class="flex flex-wrap w-full h-hull gap-4 justify-center">
      <PersonCard
        v-for="person in personStore.persons" :key="person.id" :media="person" class="hover:scale-[1.05]"
        @click="() => {
          personStore.selectedPerson = person
          personStore.fetchPersonDetail(person.id)
          navigateTo({
            name: 'personDetail',
            params: {
              id: person.id,
            },
          })
        }"
      />
    </div>
  </div>
</template>
