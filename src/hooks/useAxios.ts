import axios from 'axios'

export const useAxios = (url?: string, post?: any, ptch?: object | string) => {
    if (url) {
        axios.get(url)
            .then(res => {
                return res.data
            })
        if (!ptch) {
            if (typeof (post) === 'object' || typeof (post) === 'string') {
                axios.post(url, post)
                    .then(res => {
                        return res
                    });
            } 
            if(typeof(post) === 'number') {
                axios.delete(`${url}/${post}`)
                    .then(res => {
                        return res
                    });
            }
        }
        if (ptch) {
            axios.patch(`${url}/${post}`, ptch)
                .then(res => {
                    return res
                });
        }
    }
}