import axios from 'axios'

const intance = axios.create({
    baseURL: 'https://tinder-backend128.herokuapp.com/',
})

export default intance;