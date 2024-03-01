export const getTasks = async (page = 1) => {
    const request = await fetch(`http://localhost:3000/tasks?page=${page}`)
    const tasks = await request.json()

    return tasks
}