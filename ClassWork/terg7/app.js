const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let tasks = [];

// Function to list all tasks
function listAllTasks() {
    return tasks;
}

// Function to add a new task
function addTask(title) {
    const newTask = {
        id: tasks.length + 1,
        title: title
    };
    tasks.push(newTask);
    return newTask;
}

// Function to update a task
function updateTask(id, newTitle) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].title = newTitle;
        return tasks[taskIndex];
    }
    return null;
}

// Function to remove a task
function removeTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length !== initialLength;
}

// Routes
app.get('/tasks', (req, res) => {
    res.json(listAllTasks());
});

app.post('/tasks', (req, res) => {
    const newTask = addTask(req.body.title);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = updateTask(id, req.body.title);
    if (updatedTask) {
        res.json(updatedTask);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const removed = removeTask(id);
    if (removed) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
