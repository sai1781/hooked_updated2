import axios from 'axios'


const Req = axios.create({
    baseURL:"http://www.omdbapi.com/",
    timeout: 15000,
    params: {
        apikey:"e09df99a"
    }
});

export {Req}