import axios from "axios"

export const useCrud = {
    Get: (url: string) => {
        axios.get(url)
            .then(res => {
                localStorage.setItem('arr', JSON.stringify(res.data))
            })
        return localStorage.getItem('arr') || []
    },
    Post: (url: string, obj: object) => {
        axios.post(url, obj)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    console.log('Your object posted successful');
                }
            })
    },

    Patch: (url: string, id: number, obj: object) => {
        axios.patch(`${url}/${id}`, obj)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    console.log('Your object edited successful');
                }
            })
    },

    Delete: (url: string) => {
        console.count('works')
        axios.delete(url)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    console.log('Your object deleted successful');
                }
            })
    },
}