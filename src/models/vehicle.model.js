import moment from "moment";
import Base from "./base";
class Vehicle extends Base.Model {
  constructor({
    name,
    model,
    vehicle_class,
    manufacturer,
    length,
    cost_in_credits,
    crew,
    passengers,
    max_atmosphering_speed,
    cargo_capacity,
    consumables,
    films,
    pilots,
    url,
    created,
    edited,
  }) {
    super({
      name,
      model,
      vehicle_class,
      manufacturer,
      length,
      cost_in_credits,
      crew,
      passengers,
      max_atmosphering_speed,
      cargo_capacity,
      consumables,
      films,
      pilots,
      url,
      created,
      edited,
    });
  }

  get defaults() {
    return {
      name: "",
      model: "",
      vehicle_class: "",
      manufacturer: "",
      length: "",
      cost_in_credits: "",
      crew: "",
      passengers: "",
      max_atmosphering_speed: "",
      cargo_capacity: "",
      consumables: "",
      films: [],
      pilots: [],
      url: "",
      created: "--",
      edited: "--",
    };
  }

  get formattedCreated() {
    if (!this.created) {
      return "--";
    }
    return moment(this.created).format("MMMM DD, YYYY");
  }

  get formattedEdited() {
    if (!this.edited) {
      return "--";
    }
    return moment(this.edited).format("MMMM DD, YYYY");
  }
}

class VehicleList extends Base.List {
  constructor(items = []) {
    super(items);
  }

  get model() {
    return Vehicle;
  }

  findByName(val) {
    return this.models.find((item) => item.name === val);
  }

  filterByPosition(val) {
    return this.models.filter((item) => item.position === val);
  }
}

export default { Vehicle, VehicleList };
