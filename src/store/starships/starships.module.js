import API_URL from "@/commons/config";
import StarshipService from "@/services/starship.service";
import { FETCH_STARSHIPS } from "./actions.type";
import { SET_STARSHIPS } from "./mutations.type";
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
  async [FETCH_STARSHIPS](context) {
    const { data } = await starShipService.getAllStarShip();
    context.commit(SET_STARSHIPS, data.results);
    return data;
  },
};

export const mutations = {
  [SET_STARSHIPS](state, starships) {
    state.starships = starships;
  },
};

const getters = {
  starships(state) {
    return state.starships;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
