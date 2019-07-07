const request = require('request')

const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-04&end_date=2019-07-11&api_key=';
const KEY = 'a73nTGWyyibEkLxCGtuOgKMVdkyB0XkOtZdmVbCR';

const NASA_FINAL = URL_NASA + KEY;

let getPotentiallyHazardous = () => {
    request.get(NASA_FINAL, (error, res, body) => {
        let asteroides = JSON.parse(body).near_earth_objects
        let aster = Object.values(asteroides)

        let potHazz = [];
        aster.forEach(e => {
            e.forEach( (e, i) => {
                if(e.is_potentially_hazardous_asteroid)
                potHazz.push(e)
         
            })
        })
  

        res.statusCode === 200
        ? console.log(potHazz)
        : console.log('no respuesta')
    })
}






getPotentiallyHazardous()