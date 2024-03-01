import { Link } from "react-router-dom"
import { updateTask } from '../helpers';

export const TasksItem = ({
    title,
    task,
    isCompleted,
    createdAt,
    id
}) => {

    const onStatusChange = async () => {

        await updateTask({
            id,
            title,
            description: task,
            isCompleted: (isCompleted) ? 0 : 1
        })

        window.location.reload();
    }

  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{(isCompleted) ? 'Done' : 'Pending'}</h6>
            <p className="card-text">{task}</p>

            <button
                className="btn btn-outline-primary mt-1"
                onClick={onStatusChange}
            >
                Mark as {(isCompleted) ? 'pending' : 'complete'}
            </button>
            
            <hr />
            <Link to={`/edit/${id}`}>
                Edit
            </Link>

            
        </div>
    </div>
  )
}
