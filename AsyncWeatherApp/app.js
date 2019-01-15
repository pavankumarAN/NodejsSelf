const request = require('request');

request({
    url: 'https://www.openstreetmap.org/#map=8/12.966/77.615',
    json : true
},(error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});