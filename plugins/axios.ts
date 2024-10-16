import { defineNuxtPlugin } from '#app'
import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {

 //nuxt.config.ts den runtimeconfig çağırdım
const config = useRuntimeConfig();

 const axiosInstance = axios.create({
   baseURL: 'https://api.themoviedb.org/3',
   headers: {
    //kimlik doğrulamada tmdbtoken kullanıyorum.
     Authorization:` Bearer ${config.public.tmdbToken}`
   }
 })

 return{
 provide:{
   axios : axiosInstance} }
})