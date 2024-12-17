import axios from "axios";


const baseURL = 'https://api.unsplash.com';
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;


const axiosService = axios.create({
        baseURL,
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
    },
);

export {
    axiosService
}