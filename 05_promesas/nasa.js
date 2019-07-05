// import { request } from "https";

// const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=';
// const API_KEY = 'a73nTGWyyibEkLxCGtuOgKMVdkyB0XkOtZdmVbCR';
// let URL_NASA_FINAL = URL_NASA + API_KEY;

// let getPotentiallyHazardous = () => {
//     request.get(NASA_FINAL, (error, response, body) => {
//         if(response.statuscode == 200){
//             let asteriodes = JSON.parse(body).near_earth_objects;
//         }
//     })
// }