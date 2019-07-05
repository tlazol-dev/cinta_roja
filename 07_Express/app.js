
const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    console.log('hola en express');
    res.status(200).send('servicio en express');
})

app.listen(PORT, () => {
    console.log(`corriendo el puerto ${PORT}`);
})
