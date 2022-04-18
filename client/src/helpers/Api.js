import axios from 'axios'

export default function API() {

    return {
        get: request('get'),
        post: request('post'),
        put: request('put'),
        delete: request('delete'),
    }

    function request(method) {       
        return (url, body) => {            
            return axios[method](url, body)
            .then(response => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
                return Promise.reject(true)
            })

        }
    }

}