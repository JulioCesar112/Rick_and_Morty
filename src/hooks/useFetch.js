import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = url => {

    const [responce, setResponce] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setResponce(res.data))
        .catch(err => console.log(err))

    }, [])

    return responce
    
}

export default useFetch