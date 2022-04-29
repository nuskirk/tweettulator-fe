import axios from "axios";

function createClient() {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  client.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.isAxiosError) {
        return Promise.reject(err.response);
      }
      return Promise.reject(err);
    }
  );
  return client;
}

export default createClient();