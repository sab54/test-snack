import axios from "axios";

const API_BASE_URL = "http://35.177.183.47:3000/auth";

export const signup = async (userData) => {
  try {
    console.log("Sending signup request with data:", userData);  // Log request data
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error.response?.data || "Signup failed";
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};
