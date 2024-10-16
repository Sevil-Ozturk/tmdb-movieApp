import { defineStore } from 'pinia' 
import { ref } from 'vue'
import type { Media,Person } from '~/types'
export const usePersonStore=defineStore("personStore", () => {
   
const persons = ref<Person[]>([])
const selectedPerson = ref<Person>()
const featuredPeople = ref<Person[]>([]);
const {$axios}=useNuxtApp();
  
const fetchPersons = async () => {
    try {
     const response = await $axios.get('/person/popular', {
     params: { language: 'tr-TR',page:1 }
    })
    persons.value = response.data.results
    } catch (error) {
    console.error('Hata:', error)
    }
};

const fetchPersonDetail= async (personId: number) => {
    try{
        const response = await $axios.get(`/person/${personId}`, {
        params: { language: 'tr-TR' }
      })
      selectedPerson.value=response.data;
    } catch (error) {
    console.error('person detaydan veri alma Hatası:', error)}
  }

  const fetchFeaturedPeople = async (movieId:string) => {
    try {
      const response = await $axios.get(`/movie/${movieId}/credits?`, {
        params: { api_key:process.env.TMDB_API_KEY , language: 'tr-TR' }
      })
    featuredPeople.value = response.data.cast;

    } catch (error) {
      console.error('Hata', error);
    }
  };

  
    return{
        fetchPersons,
        selectedPerson,
        persons,
        fetchPersonDetail,
        fetchFeaturedPeople,
        featuredPeople,
      }
        
})
