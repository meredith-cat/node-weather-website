const request = require('postman-request')

const forecast = (lattitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=18d1e4870bbb648fae4401c5f79087f8&query='+lattitude+','+longitude+'&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined)
        } else if (body.error){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
                } 
    })
}

module.exports = forecast;