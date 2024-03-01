export const getTaskById = async (id) => {
    const request = await fetch(`http://localhost:3000/tasks?id=${id}`)
    const task = await request.json()

    return task
}