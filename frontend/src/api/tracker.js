import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
  baseURL: "http://6dc810114672.ngrok.io",
});

// Configure axios instance to include jwt token in header upon making request
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("JWT_TOKEN");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
