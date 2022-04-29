import axios from "axios";

function createClient() {
  const client = axios.create({
    baseURL: "http://localhost:3000/api",
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