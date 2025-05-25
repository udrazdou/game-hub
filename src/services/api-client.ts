import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '62676d8c608a47ed89081c2413742666'
    }
})