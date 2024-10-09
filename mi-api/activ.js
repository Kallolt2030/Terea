const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.json({ message: '' });
});

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});

let tareas = [
    { id: 1, tarea: "Tender cama" },
    { id: 2, tarea: "Ver tele" },
    { id: 3, tarea: "Dormir" },
    { id: 4, tarea: "Comer" },
    { id: 5, tarea: "Hacer el aseo" },
];

app.get('/tareas', (req, res) => {
    res.json(tareas);
});

app.get('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(e => e.id === id);
    if (tarea) {
        res.json(tarea);
    } else {
        res.status(404).send('No existe la tarea');
    }
});

app.post('/tarea', (req, res) => {
    const nuevaTarea = {
        id: tareas.length + 1,
        tarea: req.body.tarea
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.put('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(e => e.id === id);
    if (tarea) {
        tarea.tarea = req.body.tarea;
        res.json(tarea);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

app.delete('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tareas.findIndex(e => e.id === id);
    if (index !== -1) {
        tareas.splice(index, 1);
        res.send('Tarea eliminada');
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});
