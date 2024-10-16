<script setup lang="ts">
import type { Person } from '~/types';
const props = defineProps<{
  media: Person
}>()

const emit = defineEmits(['select']);

const handleClick = () => {
  emit('select', props.media.id);
}
</script>

<template>
  <div>
    <UCard class="w-64" @select="handleClick">
      <template #default>
        <img :src="getImage(props.media.profile_path)">
      </template>
      <template #footer> {{ props.media.name }} </template>
    </UCard>
  </div>
</template>