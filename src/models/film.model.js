import moment from "moment";
import Base from "./base";
class Film extends Base.Model {
  constructor({
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    species,
    starships,
    vehicles,
    characters,
    planets,
    url,
    created,
    edited,
  }) {
    super({
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
      species,
      starships,
      vehicles,
      characters,
      planets,
      url,
      created,
      edited,
    });
  }

  get defaults() {
    return {
      title: "",
      episode_id: 0,
      opening_crawl: "",
      director: "",
      producer: "",
      release_date: "",
      species: [],
      starships: [],
      vehicles: [],
      characters: [],
      planets: [],
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

class FilmList extends Base.List {
  constructor(items = []) {
    super(items);
  }

  get model() {
    return Film;
  }

  findByTitle(val) {
    return this.models.find((item) => item.title === val);
  }

  filterByPosition(val) {
    return this.models.filter((item) => item.position === val);
  }
}

export default { Film, FilmList };
