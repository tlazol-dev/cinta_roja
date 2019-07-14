const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://berenice:1234567654321@cluster0-o2qfz.azure.mongodb.net/test?retryWrites=true&w=majority';

const {User} = require('./models/user')


mongoose.connect(mongoUrl, {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Todo ok');
    }
 })

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





// endpoint  (espacio en la url en donde se ejecuta una accion)


app.get('/', ( request, response ) => {
    response.send('<h1>Express & Mongo</h1>')
});


app.post('/create/user', (request, response) => {
    const params = request.body
    console.log(params);
    let newUser = User ({
        userName : params.userName,
        email : params.email,
        password: params.password
    });

    newUser.save((err, user) => {
        if(err){
           return response.status(500).json({message: 'ocurrio un error'});
        }
        else if(user){
           return response.status(201).send({data: params})
        } 
    });

});


app.post('/login', (request, response) => {
    let params = request.body
    if(params.email && params.password){
        User.findOne({email: params.email}).exec((err, user) => {
            if(err){
                console.log(err)
                response.send(err)
            } 
            if(user){
                if(user.password === params.password){
                    console.log('encontro el usuario', user);
                    response.send(user)
                } else {
                    response.status(404).send( {message: 'Usuario o contraseña incorrectos'})
                }
            } else {
                response.status(404).send( {message: `no se encontro el mail ${params.email}`})
            }
        })
    } else {
        response.status(400).send( {message: 'no enviaste datos'})
    }
   
})




// if(typeof userName.params === null && typeof password === null){
//     console.log('Ingresa tus datos');
// } else if( typeof userName === string && typeof password === string){
//     console.log('Has ingresado exitosamente');
// }





app.listen(PORT, () => {
    console.log('estoy en el puerto 3000');
});



