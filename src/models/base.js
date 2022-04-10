import defaultsDeep from "lodash/defaultsDeep";

class Model {
  constructor(attributes = {}) {
    defaultsDeep(this, attributes, this.defaults);
  }
}

class List {
  constructor(items = []) {
    this.models = items.map((item) => new this.model(item));
  }
}

export default { Model, List };
