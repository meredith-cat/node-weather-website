const request = require('postman-request')

const forecast = (lattitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=18d1e4870bbb648fae4401c5f79087f8&query='+lattitude+','+longitude

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined)
        } else if (body.error){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, "The current weather is: " + body.current.weather_descriptions[0]+". It is " + body.current.temperature + "°C. It feels like " + body.current.feelslike + "°C. The humidity is "+body.current.humidity+".")
                } 
    })
}

module.exports = forecast;