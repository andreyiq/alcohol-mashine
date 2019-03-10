import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const INDEX_TEMP_WATER   = 0;
export const INDEX_TEMP_TANK    = 1;
export const INDEX_TEMP_DEFL    = 2;
export const INDEX_TEMP_FRIDGE  = 3;

export default new Vuex.Store({
  state: {
    t: [78.3],
    heater: 0,
    pumpDef: 0,
    pumpFridge: 0,
  },
  getters: {
    tWater: (state) => state.t[INDEX_TEMP_WATER] || 0,
    tTank: (state) => state.t[INDEX_TEMP_TANK] || 0,
    tDefl: (state) => state.t[INDEX_TEMP_DEFL] || 0,
    tFridge: (state) => state.t[INDEX_TEMP_FRIDGE] || 0,
  },
  mutations: {

  },
  actions: {
    setTemp(state: any, t: number[]) {
      state.t = t;
    },
    setPumpDef(state: any, value: number) {
      state.pumpDef = value;
    },
    setPumpFridge(state: any, value: number) {
      state.pumpFridge = value;
    },
  },
});
