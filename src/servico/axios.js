const axios = require('axios')

const api = axios.create({

    baseURL: 'https://alurie.saltzap.com/webhook/93d3ba0e-b54b-48db-be4a-b9dfd8b46965',
    params: {
        api_key: ''
    }

});
module.exports = api