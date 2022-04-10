import moment from "moment";
import Base from "./base";
class Species extends Base.Model {
  constructor({
    name,
    classification,
    eye_colors,
    designation,
    hair_colors,
    average_height,
    average_lifespan,
    skin_colors,
    homeworld,
    language,
    people,
    films,
    url,
    created,
    edited,
  }) {
    super({
      name,
      classification,
      eye_colors,
      designation,
      hair_colors,
      average_height,
      average_lifespan,
      skin_colors,
      homeworld,
      language,
      people,
      films,
      url,
      created,
      edited,
    });
  }

  get defaults() {
    return {
      name: "",
      classification: "",
      eye_colors: "",
      designation: "",
      hair_colors: "",
      average_height: "",
      average_lifespan: "",
      skin_colors: "",
      homeworld: "",
      language: "",
      people: [],
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

class SpeciesList extends Base.List {
  constructor(items = []) {
    super(items);
  }

  get model() {
    return Species;
  }

  findByName(val) {
    return this.models.find((item) => item.name === val);
  }

  filterByPosition(val) {
    return this.models.filter((item) => item.position === val);
  }
}

export default { Species, SpeciesList };
