export const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    return response.json()
}