import axios from "axios";

const API_URL = "http://localhost:8000/"
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token-access");
    if (token && config.url !== "register" && config.url !== "api/token") {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function refresh_token() {
  const refresh = localStorage.getItem("token-refresh")
  return instance
    .post("api/token/refresh", { refresh })
    .then((response) => {
      console.log(response.data)
      if (response.data.access) {
        localStorage.setItem("token-access", response.data.access);
      }
      return response.data;
    });
}

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "register" && originalConfig.url !== "api/token" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        console.log("EXPIRED")
        originalConfig._retry = true;
        try {
          const rs = await refresh_token();
          const access = localStorage.getItem("token-access");
          localStorage.setItem("token-access", access);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
      if (originalConfig._retry) {
        localStorage.removeItem("token-access");
        localStorage.removeItem("token-refresh");
      }
    }
    return Promise.reject(err);
  }
);
export default instance;