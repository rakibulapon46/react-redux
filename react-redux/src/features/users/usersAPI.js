export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json()
}