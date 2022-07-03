import axios from "axios";

export const api = axios.create({
  baseURL: "https://sistemagauci.herokuapp.com",
});

export const createSession = async (email, password) => {
  return api.post("/session", { email, password });
};
