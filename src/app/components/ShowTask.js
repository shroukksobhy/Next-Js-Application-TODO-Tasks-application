import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';

export default function ShowTask({ taskList, setTaskList, task, setTask }) {
    function clarTasks() {
        setTaskList([])
    }
    function handleDelete(id) {
        setTaskList(taskList.filter((task) => task.id !== id));
    }
    function handleEditTask(id) {
        let selectedTask = taskList.find((task) => task.id == id);
        setTask(selectedTask);
    }
    return (
        <Box m={2}>
            <Card>
                <Container className='showTask'>
                    <Box p={2}>
                        <div className='head'>
                            <div>
                                <span className='title'>Todo Tasks #</span>
                                <span className='count'>{taskList.length}</span>
                            </div>
                            <Button className='clearAll' onClick={clarTasks}>Clear All</Button>
                        </div>
                        <ul>
                            {taskList.map((task) => (
                                <li key={task.id}>
                                    <p>
                                        <span className="name">{task.name}</span>
                                        <span className="time">{task.time}</span>
                                    </p>
                                    <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                                    <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                                    <Button className='deleteTask' onClick={() => handleDelete(task.id)}>Deelte</Button>
                                    <Button className='editTask' onClick={() => handleEditTask(task.id)} >Edit</Button>
                                </li>
                            ))}

                        </ul>
                    </Box>

                </Container>
            </Card>
        </Box >

    )
}
