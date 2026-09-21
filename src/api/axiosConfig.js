import axios from 'axios';

export default axios.create({
    baseURL:'http://3.237.61.29:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
