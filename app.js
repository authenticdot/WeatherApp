// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
// .options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe:'Address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help','h')
// .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

//3212884ca0206f388b72241335987fdd

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/3212884ca0206f388b72241335987fdd/28.6930443,77.1350949',
    json: true
}, (error, response, body) => {
    if(!error && reponse.statusCode === 200){
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather');
    } 
});