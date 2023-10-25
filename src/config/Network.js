import client from "./Env";

export default {
  get: async (Url, data, header, config = {}) => {
    return await client.get(Url, data, config);
  },
  post: async (Url, data, headers, config = {}) => {
    return await client.post(Url, data, config);
  },
  put: async (Url, headers, data, config = {}) => {
    return await client.put(Url, data, config);
  },
  delete: async (Url, headers, data, config = {}) => {
    return await client.delete(Url, data, config);
  },
};
