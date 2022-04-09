import moment from "moment";
import Base from "./base";
class Planet extends Base.Model {
  constructor({
    name,
    diameter,
    rotation_period,
    orbital_period,
    gravity,
    population,
    climate,
    terrain,
    surface_water,
    residents,
    films,
    url,
    created,
    edited,
  }) {
    super({
      name,
      diameter,
      rotation_period,
      orbital_period,
      gravity,
      population,
      climate,
      terrain,
      surface_water,
      residents,
      films,
      url,
      created,
      edited,
    });
  }

  get defaults() {
    return {
      name: "",
      diameter: "",
      rotation_period: "",
      orbital_period: "",
      gravity: "",
      population: "",
      climate: "",
      terrain: "",
      surface_water: "",
      residents: [],
      films: [],
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

class PlanetList extends Base.List {
  constructor(items = []) {
    super(items);
  }

  get model() {
    return Planet;
  }

  findByName(val) {
    return this.models.find((item) => item.name === val);
  }

  filterByPosition(val) {
    return this.models.filter((item) => item.position === val);
  }
}

export default { Planet, PlanetList };
