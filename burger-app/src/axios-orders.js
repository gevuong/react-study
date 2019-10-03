import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-4e560.firebaseio.com/'
})

export default instance;