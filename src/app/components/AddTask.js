'use client';

import React, { useState } from 'react'
import { Container, TextField, Button, Box } from '@mui/material';

export default function AddTask({ taskList, setTaskList, task, setTask }) {
    //    console.log(Object.keys(task).length === 0);
    console.log(taskList);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            // console.log(date);
            // console.log(e.target.task.value);
            let updatedTaskList = taskList.map((todo) => (
                todo.id === task.id ?
                    { id: task.id, name: task.name, time: `${date.toLocaleDateString()}` }
                    : todo
            ));
            setTaskList(updatedTaskList);
            e.target.task.value = "";
            setTask({})
        } else {
            //New task
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleDateString()}${date.toLocaleTimeString()}`
            }
            setTaskList([...taskList, newTask]);
            setTask({})
        }

    }
    return (
        <Container>
            <Box m={4}>

                <section className='addTask'>
                    <form onSubmit={handleSubmit}>
                        <TextField type='text' id="outlined-basic" value={task.name || ""} label="Task" variant="outlined"
                            name="task" autoComplete='off'
                            onChange={e => setTask({ ...task, name: e.target.value })} />
                        <Button variant="contained" type='submit' color='success'>{task.id ? "Update" : "ADD"}</Button>
                        {/* {Object.keys(task).length === 0 ?
                            <Button variant="contained" type='submit' color='success'>add</Button>
                            : <Button variant="contained" type='submit' color='success'>Update</Button>
                        } */}


                    </form>
                </section>
            </Box>

        </Container>
    )
}
