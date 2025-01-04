const express   =   require('express');
const app       =   express();
const port      =   5005;
const getSurnames   =   require('./data/alumns');
const logMessage    =   require('./middleware/validation')

app.get('/:id', logMessage, (req,res) => {
    res.status(200).json(getSurnames(req.params.id));
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})