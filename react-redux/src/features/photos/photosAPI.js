export const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json()
}