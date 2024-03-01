export const addTask = async (title, description) => {
    if (title === '' || description === '') {
        throw new Error('Title or description are not valid, cannot be empty.')
    }
    
    const request = await fetch(`http://localhost:3000/tasks`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            title,
            description,
            isCompleted: 0
        })
    })

    const task = await request.json()

    return task
}