import axios from "axios";

const idToken = localStorage.getItem('token')
const instance = axios.create({
    baseURL: "http://localhost:8800/",
    headers: {
        'Authorization': idToken
    }

}); 

export default instance;