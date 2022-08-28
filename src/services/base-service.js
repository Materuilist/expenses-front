import { TOKEN_KEY } from "../const";

class BaseService {
  constructor(url = "") {
    this.baseUrl = "http://localhost:3200" + url;
  }

  async request(url, method, body, headers) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: method ?? "GET",
      body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
        ...headers,
      },
    });

    const { result, errorMessage } = await response.json();

    if (errorMessage) {
      return alert(errorMessage);
    } else {
      return result;
    }
  }
}

export default BaseService;
