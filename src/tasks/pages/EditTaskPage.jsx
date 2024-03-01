import { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom'
import { getTaskById, updateTask, deleteTask } from '../helpers';


export const EditTaskPage = () => {
    const { id } = useParams()
    const [task, setTask] = useState({});
    const [taskTitle, setTitle] = useState('')
    const [taskDescription, setDescription ] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const taskRequest = await getTaskById(id)
            setTask(taskRequest.data[0])
            setDescription(taskRequest.data[0].task)
            setTitle(taskRequest.data[0].title)
        }

        fetchData()
    }, [])

    console.log('esto es task', task)

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log({taskTitle, taskDescription})
        if (taskTitle.trim().length <= 1 || taskDescription.trim().length <= 1) return;

        updateTask({
            id,
            title: taskTitle,
            description: taskDescription,
            isCompleted: task.isCompleted
        })
    }

    const handleDelete = async () => {
        await deleteTask(id)

        navigate('/', {
            replace: true
        })
    }

    return (
        <>
            <h1>Edit Task</h1>
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
                            Edit
                        </button>
                        <button
                            className="btn btn-outline-danger mt-1"
                            onClick={() => handleDelete()}
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
