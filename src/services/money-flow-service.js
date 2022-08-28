import BaseService from "./base-service";

class MoneyFlowService extends BaseService {
  constructor() {
    super("/moneyFlow");
  }

  getMoneyFlows(filters) {
    return this.request("/", "POST", { filters });
  }

  addMoneyFlow(data) {
    return this.request("/add", "POST", data);
  }

  deleteMoneyFlows(ids) {
    return this.request("/", "DELETE", { ids });
  }
}

export default MoneyFlowService;
