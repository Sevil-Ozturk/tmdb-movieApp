export const getImage = (path: string | undefined) => {
    const _public = useRuntimeConfig().public;
    return `${_public.tmdbImgBaseUrl}/${path}`
}