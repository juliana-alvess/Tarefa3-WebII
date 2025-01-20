const express = require('express');
const app = express();
app.use(express.json());

let temas = [];
let categorias = [];

app.get('/autor', (req, res) => {
    if (req.headers.accept === 'application/json') {
        res.json({ autor: 'Maria Juliana' });
    } else {
        res.send('<html><body><h1>Autor: Maria Juliana </h1></body></html>');
    }
});

app.get('/temas', (req, res) => {
    res.json(temas);
});

app.post('/temas', (req, res) => {
    const tema = req.body;
    temas.push(tema);
    res.status(201).json(tema);
});

app.put('/temas/:id', (req, res) => {
    const id = req.params.id;
    temas[id] = req.body;
    res.json(temas[id]);
});

app.delete('/temas/:id', (req, res) => {
    const id = req.params.id;
    const removedTema = temas.splice(id, 1);
    res.json(removedTema);
});

app.get('/categorias', (req, res) => {
    res.json(categorias);
});

app.post('/categorias', (req, res) => {
    const categoria = req.body;
    categorias.push(categoria);
    res.status(201).json(categoria);
});

app.put('/categorias/:id', (req, res) => {
    const id = req.params.id;
    categorias[id] = req.body;
    res.json(categorias[id]);
});

app.delete('/categorias/:id', (req, res) => {
    const id = req.params.id;
    const removedCategoria = categorias.splice(id, 1);
    res.json(removedCategoria);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
