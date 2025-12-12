import axios from "axios"
import { CloudLightning } from "lucide-react"

const fetchAllProduct = async() => {
    const response = await axios.get("/api/product")
    return(response.data)
}

const fetchSingleProduct = async(id) => {
const response = await axios.get(`/api/product/${id}` )
console.log(response.data)
return(response.data)
}

const addProduct = async (formData, token) => {
    const options = { headers: { authorization: `Bearer ${token}` } }
    const response = await axios.post("/api/product/" , formData , options)
    // console.log(response.data)
    return response.data
}

// const update = async (formData, token) => {
//     const options = { headers: { authorization: `Bearer ${token}` } }
//     const response = await axios.put("/api/product/" + formData._id, formData, options)
//     // console.log(response.data)
//     return response.data
// }


const productService = {fetchAllProduct, fetchSingleProduct, addProduct}
export default productService
