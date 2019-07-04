const request = require('request');

const newPost = ( title, cuerpo, userId ) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const uri = 'posts';
    const URL = url + uri;
    var json = JSON.stringify({
        title : title,
        body : cuerpo, 
        userId : userId
    });

    //console.log(json);

    return new Promise( ( resolve, reject) => {
        var options = {
            method: 'POST',
            body: json, 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        request.post(URL, options, ( err, res, body) => {
            if(res.statusCode === 201){
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(res.statusCode);
            } 
        });
    });
};

newPost('este es un post', 'este es el body', 1)
.then(resp => console.log(resp))
.catch(err => console.log(err))

// const request= require('request');


// const newPetition = ( nombre, apellido, biografia, genero, edad ) => {
//     const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';
//     const uri = ''    

// }

