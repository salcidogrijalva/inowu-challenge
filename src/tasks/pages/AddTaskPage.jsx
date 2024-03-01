import { useState } from 'react';
import { addTask } from '../helpers';


export const AddTaskPage = () => {
    const [taskTitle, setTitle] = useState('')
    const [taskDescription, setDescription ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (taskTitle.trim().length <= 1 || taskDescription.trim().length <= 1) return;

        addTask(taskTitle, taskDescription)
    }

    return (
        <>
            <h1>Add Task</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Task title"
                            name="taskTitle"
                            autoComplete="off"
                            value={taskTitle}
                            onChange={({target}) => setTitle(target.value)}
                        />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter a task description"
                            name="taskDescription"
                            autoComplete="off"
                            value={taskDescription}
                            onChange={({target}) => setDescription(target.value)}
                        />
                        <button
                            type='submit'
                            className="btn btn-outline-primary mt-1"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
