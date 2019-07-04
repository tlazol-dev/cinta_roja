
// const request = require('request'); //de esta forma imoprto los modulos, librerias etc para peticiones 
// const url = 'https://jsonplaceholder.typicode.com'; 

// request(`${url}/users`, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// request(`${url}/post`, (error, response, body) => {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });


// const request = require('request');
// const url = 'https://swapi.co/api/';

// // request.get(`${url}/planets/5/`,(error, response, body) => {
// //    console.log(error);
// //    const json = JSON.parse(body);
// //    //console.log('statusCode:', response && response.statusCode);
// //    //console.log('body', body);
// //    console.log(json.name)
// // });

// const getStarships = (path, id) => {
//    request.get(`${url}${path}/${id}/`,(error, response, body) => {
//       console.log(error);
//       const json = JSON.parse(body);
//       console.log(json.name)
//    });
// }

// getStarships('people', '6');



const request = require('request');
const pokapp = 'https://pokeapi.co/api/v2/';

   const getPokemon = (path, id) => {
   request.get(`${pokapp}${path}/${id}/`, (error, response, body) => {
      console.log(error);
      console.log('statusCode:', response && response.statusCode);
      const json = JSON.parse(body);
      console.log(json.moves[0].move.name);
   });
}

getPokemon('pokemon', '777');




