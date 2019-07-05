
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('hola en express');
    res.status(200).send('<h1>Bienvenido a Express</h1>');
})

app.listen(PORT, () => {
    console.log(`corriendo el puerto ${PORT}`);
})


//