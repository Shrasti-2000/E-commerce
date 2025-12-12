import axios from "axios"

const fetchAllUser = async(token) => {
    const options = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get("/api/admin/user", options)
    console.log(response.data)
    return response.data
}


const getAllProducts = async (token) => {
    const res = await axios.get(`${API}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };


const adminService = {fetchAllUser,getAllProducts}

export default adminService