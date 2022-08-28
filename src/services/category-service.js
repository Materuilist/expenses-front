import BaseService from "./base-service";

class CategoryService extends BaseService {
  constructor() {
    super("/category");
  }

  getAll() {
    return this.request("/");
  }

  addCategory(data) {
    return this.request("/add", "POST", data);
  }

  deleteCategory(categoryId) {
    return this.request("/", "DELETE", { categoryId });
  }
}

export default CategoryService;
