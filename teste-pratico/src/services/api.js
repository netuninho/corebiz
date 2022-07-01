import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1",
});

export const newsletter = async(email, name) => {
  try {
    const response = await baseUrl.post('/newsletter', {email, name})
    return response.data
  } catch(error) {
    alert(error.response.data)
  }
}

export const getProducts = async() => {
  try {
    return await baseUrl.get('/products')
  } catch(error) {
    alert(error.response.data)
  }
}