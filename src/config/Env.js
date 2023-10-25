import { create } from "apisauce";

const client = create({
  baseURL: "https://dummyjson.com",
});

export default client;
