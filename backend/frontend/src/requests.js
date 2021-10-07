import axios from "axios";

const BASE_URL = "https://mern-shop-35.herokuapp.com/";
const TOKEN = JSON.parse(localStorage.getItem("currentUser"))?.accessToken || "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
