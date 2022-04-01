import axios from "axios";

function kebabCaseToCamel(str) {
  return str.replace(/(-\w)/g, (matches) => matches[1].toUpperCase());
}

class ApiService {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
    console.log("BASE", url);
  }

  createEntity(entity) {
    /**
     * If there is a - in the entity.name, then change it
     * to camelCase. E.g
     * ```
     * myApi.createEntity({ name : 'foo-bar'})
     * myApi.endpoints.fooBar.getAll(...)
     */
    const name = kebabCaseToCamel(entity.name);
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  createBasicCRUDEndpoints({ name }) {
    const endpoints = {};

    const resourceURL = `${this.url}/${name}`;

    endpoints.getAll = (config = {}) => axios.get(resourceURL, config);

    endpoints.getOne = ({ id }, config = {}) =>
      axios.get(`${resourceURL}/${id}`, config);

    endpoints.create = (toCreate, config = {}) =>
      axios.post(resourceURL, toCreate, config);

    endpoints.update = (toUpdate, config = {}) =>
      axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config);

    endpoints.patch = ({ id }, toPatch, config = {}) =>
      axios.patch(`${resourceURL}/${id}`, toPatch, config);

    endpoints.delete = ({ id }, config = {}) =>
      axios.delete(`${resourceURL}/${id}`, config);

    return endpoints;
  }
}

export default ApiService;
