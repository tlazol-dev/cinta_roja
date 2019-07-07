//server con express


const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
// app.use((require, response, next) => {
//     console.log('este es el middleware');
//     //termina la ejecucion del middelware
//     next();

// });


app.use(express.static(__dirname + '/public'));

app.get('/', (require, response) => {
    console.log('hola en express');
    response.status(200).send('<h1>Bienvenido a Express</h1>');
})

app.listen(PORT, () => {
    console.log(`corriendo el puerto ${PORT}`);
});


//