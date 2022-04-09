import ApiService from "@/services/api.service";

class FilmService extends ApiService {
  constructor({ url, endpoints }) {
    super({ url });
    this.createEntity({ name: endpoints });
    this.methods = this.createBasicCRUDEndpoints({ name: endpoints });
  }

  getAllFilm(config = {}) {
    return this.methods.getAll(config);
  }

  getFilmById(id) {
    return this.methods.getOne({ id });
  }
}

export default FilmService;
