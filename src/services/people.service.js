import ApiService from "@/services/api.service";

class PeopleService extends ApiService {
  constructor({ url, endpoints }) {
    super({ url });
    this.createEntity({ name: endpoints });
    this.methods = this.createBasicCRUDEndpoints({ name: endpoints });
  }

  getAllPeople(config = {}) {
    return this.methods.getAll(config);
  }

  getPeopleById(id) {
    return this.methods.getOne({ id });
  }
}

export default PeopleService;
