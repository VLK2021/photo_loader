import {axiosService} from "./axios.service";
import {urls} from "../constants";


const photoService = {
    searchPhoto: (query, count) => axiosService.get(urls.search(query, count)),
}

export {
    photoService
}