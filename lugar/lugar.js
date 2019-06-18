const axios = require('axios');

//console.log(encodeUrl);

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '57bca2821fmsh49014f7bfe835cep1d9e42jsn4d165b6bcabd' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No Hay Resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    // Make a request for a user with a given ID
    // instance.get()
    //     .then(resp => {
    //         // handle success
    //         console.log(resp.data);
    //     })
    //     .catch(error => {
    //         // handle error
    //         console.log(error);
    //     });

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}