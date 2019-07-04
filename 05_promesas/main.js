
let empleadosDb = [
    {
        'name': 'Fernando',
        'id': 1
    },
    {
        'name': 'Lola Mento',
        'id': 2
    },
    {
        'name': 'Maria',
        'id': 3
    }
];


let cintasDB = [
    {
        'id': 1, 
        'cinta': 'Blanca'
    },{
        'id': 2, 
        'cinta': 'Roja'
    },
    {
        'id': 3, 
        'cinta': 'Negra'
    }
];


const getDev = (id) => {
    console.log(id);
    return new Promise( (resolve, reject) => {
        let developer = empleadosDb.find( dev => dev.id === id); //dev hace referencia a la propiedad del objeto empleadosDB
        //console.log(developer)
        if(!developer){
            reject(`El dev con Id ${id} no existe`)
        } else {
            resolve(developer)
        }
    })

};


const getCintaDev = (dev) => {
    return new Promise ( ( resolve, reject) => {
        let developerId = cintasDB.find( cinta => cinta.id === dev.id);
        if(!developerId){
            reject(`No existe cinta para el dev ${dev.name}`)
        } else {
            resolve({
                cinta: cintasDB.cinta,
                dev: dev.name
        });
      }
    });
};


getDev(1)
    .then(res => {
        console.log(res)
        getCintaDev(res)
            .then(data => {
                console.log(`El dev ${data.dev} esta en la cinta ${data.cinta}`)
            })
            .catch(err => console.log(err) )

    })
    .catch(err => console.log(err))


































