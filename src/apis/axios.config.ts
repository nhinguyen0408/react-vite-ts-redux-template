import Axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axios = Axios.create();
const baseUrl = import.meta.env.VITE_BASE_URL


// const [cookies, setCookie] = useCookies(['name']);


axios.defaults.timeout = 120000; // Milliseconds
axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Retreive token from Redux OR localStorage or ....
    // const store = await getStore();
    // const token = store?.getState()?.user?.token;

    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    //   config.headers["Access-Control-Allow-Credentials"] = true;
    // }
    config.url = baseUrl
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (error: AxiosError) => {
    if (error?.response?.status === 403) {
      // Handle forbidden error
    }
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
    }
    return Promise.reject(error);
  }
);

export type AxiosResponseType = AxiosResponse
export default axios;    