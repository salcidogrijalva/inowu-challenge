export const updateTask = async (body) => {
    if (!body.id)  {
        throw new Error('Task ID should always be sent.')
    }

    if (body.title === '' || body.description === '') {
        throw new Error('Title or description are not valid, cannot be empty.')
    }
    
    body.isCompleted = (body.isCompleted) ? 1 : 0

    console.log('esto es body', body)
    const request = await fetch(`http://localhost:3000/tasks/${body.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(body)
    })

    const task = await request.json()

    return task
}