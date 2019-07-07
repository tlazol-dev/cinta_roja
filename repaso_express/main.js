const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



app.listen(9999, () => {
    console.log('estoy en el puerto 9999');
});

// endpoint  (espacio en la url en donde se ejecuta una accion)


app.get('/', ( request, response ) => {
    response.send('estoy en casa')
});

app.get('/home', (request, response) => {
    response.send({message: 'Mensaje en el home'})
});


app.get('/users/:id', (request, response) => {
    console.log(request.params);
    const userId = request.params.id
    response.send({message: `El id que buscas es: ${userId}`})
});


app.get('/search', (request, response) => {
    console.log(request.query);
    const {q, color, vidas} = request.query
    response.send({q, color, vidas})
});


app.post('/create/user', (request, response) => {
    console.log(request.body);
    const {name, link, content, img} = request.body;
    response.status(201).send({
        id:'19',
        name,
        link,
        content,
        img: 'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/12/reino-unido-venta-cachorros-perros-gatos-tiendas-lucy-law.jpg'
    })
});

app.patch('/update/user', (request, response) => {
    console.log(request.body);
    const {name, link, content, img} = request.body;
    response.status(201).send({
        id,
        name,
        link,
        content,
        img
    })
});
