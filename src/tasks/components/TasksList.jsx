import { useEffect, useState } from "react"
import { getTasks } from "../helpers"
import { TasksItem } from "./TasksItem"

export const TasksList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function fetchData() {
            const tasksRequest = await getTasks()
            setTasks(tasksRequest.data)
        }

        fetchData()
    }, [])

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {tasks.map((task) => (
                <TasksItem key={task.id} {...task}/>
            ))}
        </div>
    )
}
