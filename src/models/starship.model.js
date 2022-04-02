class StarShipModel {
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
    this.name = name;
    this.model = model;
    this.starship_class = starship_class;
    this.manufacturer = manufacturer;
    this.cost_in_credits = cost_in_credits;
    this.length = length;
    this.crew = crew;
    this.passengers = passengers;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.hyperdrive_rating = hyperdrive_rating;
    this.MGLT = MGLT;
    this.cargo_capacity = cargo_capacity;
    this.consumables = consumables;
    this.url = url;
    this.created = created;
    this.edited = edited;
    this.films = films;
    this.pilots = pilots;
  }
}

export default StarShipModel;
