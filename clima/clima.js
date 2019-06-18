const axios = require('axios');


const getClima = async(lat, lng) => {
    let pass = '8aa0472e275dfb3ea48c3d8044cdb477';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ pass }&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}