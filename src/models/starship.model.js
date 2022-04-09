import moment from "moment";
import Base from "./base";
class StarShip extends Base.Model {
  constructor({
    name,
    model,
    starship_class,
    manufacturer,
    cost_in_credits,
    length,
    crew,
    passengers,
    max_atmosphering_speed,
    hyperdrive_rating,
    MGLT,
    cargo_capacity,
    consumables,
    url,
    created,
    edited,
    films,
    pilots,
  }) {
    super({
      name,
      model,
      starship_class,
      manufacturer,
      cost_in_credits,
      length,
      crew,
      passengers,
      max_atmosphering_speed,
      hyperdrive_rating,
      MGLT,
      cargo_capacity,
      consumables,
      url,
      created,
      edited,
      films,
      pilots,
    });
  }

  get defaults() {
    return {
      name: "",
      model: "",
      starship_class: "",
      manufacturer: "",
      cost_in_credits: "",
      length: "",
      crew: "",
      passengers: "",
      max_atmosphering_speed: "",
      hyperdrive_rating: "",
      MGLT: "",
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

class StarShipList extends Base.List {
  constructor(items = []) {
    super(items);
  }

  get model() {
    return StarShip;
  }

  findByTitle(val) {
    return this.models.find((item) => item.title === val);
  }

  filterByPosition(val) {
    return this.models.filter((item) => item.position === val);
  }
}

export default { StarShip, StarShipList };
