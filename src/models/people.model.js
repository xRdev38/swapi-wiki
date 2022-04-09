import moment from "moment";
import Base from "./base";
class People extends Base.Model {
  constructor({
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
    homeworld,
    species,
    starships,
    vehicles,
    films,
    url,
    created,
    edited,
  }) {
    super({
      name,
      birth_year,
      eye_color,
      gender,
      hair_color,
      height,
      mass,
      skin_color,
      homeworld,
      species,
      starships,
      vehicles,
      films,
      url,
      created,
      edited,
    });
  }

  get defaults() {
    return {
      name: "",
      birth_year: "",
      eye_color: "",
      gender: "",
      hair_color: "",
      height: "",
      mass: "",
      skin_color: "",
      homeworld: "",
      species: [],
      starships: [],
      vehicles: [],
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

class PeopleList extends Base.List {
  constructor(items = []) {
    super(items);
  }

  get model() {
    return People;
  }

  findByName(val) {
    return this.models.find((item) => item.name === val);
  }

  filterByPosition(val) {
    return this.models.filter((item) => item.position === val);
  }
}

export default { People, PeopleList };
