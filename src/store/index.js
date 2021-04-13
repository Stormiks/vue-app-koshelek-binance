/* eslint-disable quote-props */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const nameKeyStorage = 'crypto-list';

// [
//   {
//     'BTCUSDT': {},
//   },
//   {
//     'BNBBTC': {},
//   },
//   {
//     'ETHBTC': {},
//   },
// ]

const tickersData = JSON.parse(localStorage.getItem(nameKeyStorage)) || [];

export default new Vuex.Store({
  state: {
    symbols: tickersData,
    availableSymbolsName: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
  },
  mutations: {
  },
  actions: {
    saveListTikers({ }, arr) {
      localStorage.setItem(nameKeyStorage, JSON.stringify(arr));
    },
  },
  getters: {
    symbolNames(state) {
      return state.symbols.map((item) => Object.keys(item)[0]) || [];
    },
  },
});
