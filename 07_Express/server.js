//server con http

const http = require('http');

http.createServer( (request, response) => {
    response.writeHead(200,{'Content-Type': 'application/json'});

    let salida = {
        name: 'Arturo',
        edad: 26
    };

    response.write(JSON.stringify(salida));
    response.end();
})

.listen(3000);
console.log('Escuchando en el puerto 3000');


//header nos dicen el origen de la peticion