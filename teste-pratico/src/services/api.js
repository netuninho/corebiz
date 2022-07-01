import axios from "axios";

export const api = axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1",
});

export const newsletter = async(email, name) => {
  try {
    const response = await baseURL.post('/newsletter', {email, name})
    return response.data
  } catch(error) {
    alert(error.response.data)
  }
} 