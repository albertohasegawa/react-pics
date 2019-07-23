import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 136c5136cf1a594cfd8453b4dbdb754b4d4c6949afc121ca53fe2f5b50faa1e5"
  }
});
