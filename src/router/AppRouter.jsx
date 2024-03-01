import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../shared/components/Navbar'
import { AddTaskPage, EditTaskPage, ViewTasksPage } from '../tasks'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<ViewTasksPage />} />
                    <Route path="add" element={<AddTaskPage />} />
                    <Route path="edit/:id" element={<EditTaskPage />} />
                </Routes>
            </div>
        </>
    )
}
