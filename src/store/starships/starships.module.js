import API_URL from "@/commons/config";
import StarShipModel from "@/models/starship.model";
import StarshipService from "@/services/starship.service";
import { FETCH_STARSHIPS } from "./actions.type";
import {
  SET_STARSHIPS,
  SET_STARSHIPS_COUNT,
  SET_STARSHIPS_ROW,
  SET_STARSHIPS_OFFSET,
} from "./mutations.type";
const initialState = {
  starships: [],
  counts: 0,
  offset: 10,
  row: 1,
};
const starShipService = new StarshipService({
  url: API_URL,
  endpoints: "starships",
});

export const state = { ...initialState };

export const actions = {
  async [FETCH_STARSHIPS](context, currentPage) {
    let config = {};
    if (currentPage > 1) {
      config = {
        params: {
          page: currentPage,
        },
      };
    }
    const { data } = await starShipService.getAllStarShip(config);
    console.log("DATA", data);
    context.commit(
      SET_STARSHIPS,
      data.results.map((item) => new StarShipModel(item))
    );
    context.commit(SET_STARSHIPS_COUNT, data.count);
    console.log("STATE", state);
    return data;
  },
};

export const mutations = {
  [SET_STARSHIPS](state, starships) {
    state.starships = starships;
  },
  [SET_STARSHIPS_COUNT](state, counts) {
    state.counts = counts;
  },
  [SET_STARSHIPS_ROW](state, row) {
    state.row = row;
  },
  [SET_STARSHIPS_OFFSET](state, offset) {
    state.offset = offset;
  },
};

const getters = {
  starships(state) {
    return state.starships;
  },
  offset(state) {
    return state.offset;
  },
  counts(state) {
    return state.counts;
  },
  row(state) {
    return state.row;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
