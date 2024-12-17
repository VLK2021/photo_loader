import {axiosService} from "./axios.service";
import {urls} from "../constants";


const photoService = {
    searchPhoto: (page, query, count) => axiosService.get(urls.search(page, query, count)),
    searchCollections: (page, query, count) => axiosService.get(urls.collections(page, query, count)),
}

export {
    photoService
}