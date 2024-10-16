<script setup lang="ts">
const moviesStore = useMovieStore()
onMounted(async () => {
  await moviesStore.fetchMovies()
})
</script>

<template>
  <div>
    <h1 class="text-white-400/100 text-2xl font-bold p-5">
      Popüler Filmler
    </h1>
    <div class="flex flex-wrap w-full h-hull gap-4 justify-center hover-container">
      <MovieCard
        v-for="movie in moviesStore.movies"
        :key="movie.id"
        :media="movie"
        class="hover:scale-[1.05]"
        @click="() => {
          moviesStore.selectedMovie = movie
          moviesStore.movieDetailFetchMovie(movie.id)
          navigateTo({
            name: 'movieDetail',
            params: {
              id: movie.id,
            },
          })
        }"
      />
    </div>
  </div>
</template>
