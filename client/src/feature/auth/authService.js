import axios from "axios";

const register = async (formData) => {
  const res = await axios.post("/api/auth/register", formData);

  // Store full user object
  localStorage.setItem("user", JSON.stringify(res.data));
  localStorage.setItem('token', res.data.token)
  return res.data; // backend already gives user object
};

const login = async (formData) => {
  const res = await axios.post("/api/auth/login", formData);

  localStorage.setItem("user", JSON.stringify(res.data));
  localStorage.setItem('token', res.data.token)
  return res.data;
};

const authService = { register, login };
export default authService;
