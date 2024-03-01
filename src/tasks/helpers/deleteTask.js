export const deleteTask = async (id) => {
    if (!id)  {
        throw new Error('Task ID should always be sent.')
    }

    const request = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
    })

    const task = await request.json()

    return task
}