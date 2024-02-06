import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '495f35a9bd4c4b26b880759f99102d88'
    }
})

