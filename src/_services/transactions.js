import { API } from '../_api';

export const getTransactions = async () => {
  try {
    const { data } = await API.get('/transactions', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
    // Kembalikan seluruh response agar frontend bisa akses success, message, data
    return data;
  } catch (error) {
    // Jika error dari backend, kembalikan response error agar bisa ditangani di frontend
    if (error.response && error.response.data) {
      return error.response.data;
    }
    throw error;
  }
}

export const createTransaction = async (data) => {
  try {
    const response = await API.post('/transactions', data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    // Kembalikan seluruh response agar frontend bisa akses success, message, data
    return response.data; 
  } catch (error) {
    // Jika error dari backend, kembalikan response error agar bisa ditangani di frontend
    if (error.response && error.response.data) {
      return error.response.data;
    }
    throw error;
  }
}