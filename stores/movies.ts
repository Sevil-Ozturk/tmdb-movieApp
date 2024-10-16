import { defineStore } from 'pinia' 
import { ref } from 'vue'
import type { Media, Video } from '~/types'

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref<Media[]>([])
  const selectedMovie = ref<Media>()
  const trailers=ref<Video[]>([])


  const {$axios}=useNuxtApp();
  
  const fetchMovies = async ()   => {
    try {
      const response = await $axios.get('/movie/popular', {
        params: { language: 'tr-TR'  }
      })
      movies.value = response.data.results
    } catch (error) {
      console.error('Hata:', error)
    }
  };
//error lens extension
  const movieDetailFetchMovie= async (movieId: number) => {
    try
      {
        const response = await $axios.get(`/movie/${movieId}`, {
        params: { language: 'tr-TR' }
      })
      selectedMovie.value=response.data;
    
  } catch (error) {
    console.error('Hata:', error)
  }
  }


  const fetchMovieVideoTrailers = async (VideoId: number) => {
    try {
      const response = await $axios.get(`/movie/${VideoId}/videos`, {
        params: { language: 'tr-TR'  }
      })
      trailers.value = response.data.results.filter((video:Video) => video.type === 'Trailer')
    } catch (error) {
      console.error('-video gelmiyor bne:nolmuşkineee:', error)
    }
  };

 
  return {
    movies,
    selectedMovie,
    fetchMovies,
    movieDetailFetchMovie,
    fetchMovieVideoTrailers,
    trailers,
  }
})
