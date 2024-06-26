'use client';

import Header from './Header';
import Container from '@mui/material/Container';
import ShowTask from './ShowTask';
import AddTask from './AddTask';
import { useEffect, useState } from 'react';
const DefaultLayout = ({ children }) => {
    // const [taskList, setTaskList] = useState(localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : []);
    const [task, setTask] = useState({});
    const [taskList, setTaskList] = useState([]);
    // useEffect(() => {
    //     localStorage.setItem("taskList", JSON.stringify(taskList));
    // }, [taskList]);

    return (
        <div>
            <Header />
            {/* {children} */}
            <Container>
                <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
                <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
            </Container>
            <footer>
                <p>&copy; Roka 2024 NextJS Application</p>
            </footer>
        </div>
    );
};

export default DefaultLayout;
