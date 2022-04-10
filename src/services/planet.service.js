import ApiService from "@/services/api.service";

class PlanetService extends ApiService {
  constructor({ url, endpoints }) {
    super({ url });
    this.createEntity({ name: endpoints });
    this.methods = this.createBasicCRUDEndpoints({ name: endpoints });
  }

  getAllPlanet(config = {}) {
    return this.methods.getAll(config);
  }

  getPlanetById(id) {
    return this.methods.getOne({ id });
  }
}

export default PlanetService;
