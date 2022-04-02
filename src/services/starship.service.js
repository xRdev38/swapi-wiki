import ApiService from "@/services/api.service";

class StarshipService extends ApiService {
  constructor({ url, endpoints }) {
    super({ url });
    this.createEntity({ name: endpoints });
    this.methods = this.createBasicCRUDEndpoints({ name: endpoints });
  }

  getAllStarShip(config = {}) {
    return this.methods.getAll(config);
  }

  getStarShipById(id) {
    return this.methods.getOne(id);
  }
}

export default StarshipService;
