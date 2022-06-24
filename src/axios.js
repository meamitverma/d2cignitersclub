import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://d2cignitersclub-backend.herokuapp.com'
})

export default instance