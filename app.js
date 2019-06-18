const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `el clima de ${direccion} es de ${temp}`;

    } catch (e) {
        return `No se puedo determinar el clima ${e}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);