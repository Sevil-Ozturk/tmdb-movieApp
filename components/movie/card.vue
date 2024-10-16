<script setup lang="ts">
import { useMovieStore } from "#imports";
import type { Media } from "~/types";
const moviesStore = useMovieStore();
const props = defineProps<{
  media: Media;
}>();
const emit = defineEmits(['select']);

const getStarRating = (rating: number) => Math.round(rating / 2);
const isHovered = ref(false);
const handleMouseOver = () => {
  isHovered.value = true;
}
const handleMouseLeave = () => {
  isHovered.value = false;
}
</script>

<template>
  <div @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" class="relative">
    <UCard class="w-64 movie-card " @select="emit('select', props.media.id)" :class="{ 'hovered': isHovered }">
      <template #default>
        <img :src="getImage(props.media.poster_path)" alt="Poster">
      </template>
      <template #footer>
        <div class="font-semibold">
          {{ props.media.title }}
        </div>
        <div class="star-rating">
          <span v-for="n in 5" :key="n" class="star"
            :class="{ filled: n <= getStarRating(props.media.vote_average) }">★</span>
          <!-- <p class="items-align-center left-0 bottom-0">{{ props.media.vote_average }}</p> -->
        </div>
        <!-- <img :src="`data:image/png;base64,${useImageStore().emptyStar}`" alt=""> -->

        <div v-if="isHovered"
          class=" absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] text-white p-5 rounded-[10px] w-full h-full hover:font-medium backdrop-filter: opacity(0.7);">
          <div><strong>Özet:</strong>
            <span class="line-clamp-5">{{ props.media.overview }}</span>
          </div><br>
          <div class="overlay  flex font-weight-4 gap-1 place-items-end">
            <img class="w-[24px] justify-center" src="/public/star-emoji.svg" alt="imdb Star">
            <strong>IMDB:</strong>
            {{ props.media.vote_average }}
          </div><br>
          <div class="flex font-weight-4 gap-1">
            <img class=" w-[20px] justify-center" src="/public/date.svg" alt="imdb Star">
            {{ props.media.release_date }}
          </div><br>
          <div class="flex font-weight-4 gap-1">
            <ol>
              <li v-for="(genre, _) in moviesStore.selectedMovie?.genres">
                <a class="flex-wrap text-white">
                  {{ genre.name }}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
.star-rating {
  display: inline-flex;
}

.star {
  font-size: 1.5rem;
  color: #ddd;
  margin-right: 0.1rem;
}

.star.filled {
  color: gold;
}

.review {
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 0 0 16px 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 0;
}

.movie-card.hovered {
  filter: brightness(0.85);
}
</style>
