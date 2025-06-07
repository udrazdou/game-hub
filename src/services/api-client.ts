import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
count: number;
next: string | null;
results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '62676d8c608a47ed89081c2413742666'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res=> res.data)

    }
}

export default APIClient;

