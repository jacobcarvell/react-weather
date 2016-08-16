var axios = require('axios');

const OPEN_WEATHER_MAP_URL= 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=0b8825843d60a32c6bde6ad8e6ecc804';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};
