import ApiService from "@/services/api.service";

class VehicleService extends ApiService {
  constructor({ url, endpoints }) {
    super({ url });
    this.createEntity({ name: endpoints });
    this.methods = this.createBasicCRUDEndpoints({ name: endpoints });
  }

  getAllVehicle(config = {}) {
    return this.methods.getAll(config);
  }

  getVehicleById(id) {
    return this.methods.getOne({ id });
  }
}

export default VehicleService;
