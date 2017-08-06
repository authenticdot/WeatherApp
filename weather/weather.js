const request = require('request');

var getWeather = (lat, lng, callback) => {
   
    request({
        url: `https://api.darksky.net/forecast/3212884ca0206f388b72241335987fdd/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        } else {
            callback("Can't fetch weather");
        } 
    });

};

module.exports = {
    getWeather
}
