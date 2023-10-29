import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

const httpService = axios.create({
    baseURL: `https://catfact.ninja`
})

httpService.interceptors.request.use((config) =>{config.headers["TOKEN"] = 'BCDAF291ASDFSDF'; return config})

export default httpService