const express = require('express')
const https = require('https')
const cors = require('cors')
const NodeCache = require("node-cache")
const app = express()
const port = 8899

var reqHostsList = [] // List used to keep track of hostnames that access the proxy
const cache = new NodeCache( { stdTTL: 600, checkperiod: 60} ) // Timed cache used for storing data. TTL is 600sec (10min) with 60sec (1min) alive check

app.use(cors())

// Handles requests for hostname statistics
app.get('/apistats', (req, res) => {
    res.send(JSON.stringify(reqHostsList))
})

// Handles requests for cache statistics
app.get('/pokeapistats', (req, res) => {
    var ttlList = []

    // Formats the ourput into a more reasonable form
    cache.keys().forEach(key => {
        ttlList.push( { [key]: (cache.getTtl(key) - Date.now()) / 1000 } ) // TTL has a data type of Date, subtracting the current date gives TTL in miliseconds. Dividing by 1000 gives TTL in seonds
    });

    res.send(JSON.stringify(ttlList))
})

// Handles all requests for individual pokemon data
app.get('/pokemon/:pokeId', (req, res) => {

    // Hostname check
    checkIp(req.hostname)

    // Checks if the data is already cached
    if (cache.has('https://pokeapi.co/api/v2/pokemon/' + req.params.pokeId)) {
        // True, send cached data
        res.send(cache.get('https://pokeapi.co/api/v2/pokemon/' + req.params.pokeId))

    }
    else {
        // False, request data, cache it and send data
        https.get('https://pokeapi.co/api/v2/pokemon/' + req.params.pokeId, (resp) => {
            let data = ''
    
            resp.on('data', (chunk) =>{
                data += chunk
            })
    
            resp.on('end', () => {
                cache.set('https://pokeapi.co/api/v2/pokemon/' + req.params.pokeId, data)
                res.send(data)
            })
        })
    }
})

// Handles all requests to "/" that feature a page number. Added regex so that it triggers only with numbers as parameters to prevent triggering the base "/"
app.get('/:page(\\d+)', (req, res) => {

    // Hostname check
    checkIp(req.hostname)

    // Checks if the data is already cached
    if (cache.has('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + (req.params.page*20))) {
        // True, send cached data
        res.send(cache.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + (req.params.page*20)))
    }
    else {
        // False, request data, cache it and send data
        https.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + (req.params.page*20), (resp) => {
            let data = ''
    
            resp.on('data', (chunk) =>{
                data += chunk
            })
    
            resp.on('end', () => {
                cache.set('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + (req.params.page*20), data)
                res.send(data)
            })
        })
    }
})

// Base address, should only trigger on the very first request since all following request will most likely feature a page number
app.get('/', (req, res) => {

    // Hostname check
    checkIp(req.hostname)

    // Checks if the data is already cached
    if (cache.has('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')) {
        // True, send cached data
        res.send(cache.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'))
    }
    else {
        // False, request data, cache it and send data
        https.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0', (resp) => {
            let data = ''
    
            resp.on('data', (chunk) =>{
                data += chunk
            })
    
            resp.on('end', () => {
                cache.set('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0', data)
                res.send(data)
            })
        })
    }
})

// Handles the checking if a hostname already exists in the list and incrementing said hostname
function checkIp(ip) {

    // Check if hostname already exists in list
    if (reqHostsList.filter(e => e.ip === ip).length > 0){
        // True, get index of hostname and increment request counter
        var index = reqHostsList.findIndex(r => r.ip == ip)
        reqHostsList[index].requests++  
    }
    else {
        // False, add hostname to list with request counter at 1
        reqHostsList.push({"ip": ip, "requests": 1})
    }
}

// Standard listen call
app.listen(port, () => {
  console.log(`Proxy listening on port ${port}`)
})