import BaseService from "./base-service";

class AuthService extends BaseService {
  constructor() {
    super("/auth");
  }

  signUp(login, password) {
    return this.request("/signup", "POST", { login, password });
  }

  signIn(login, password) {
    return this.request("/signin", "POST", { login, password });
  }
}

export default AuthService;
