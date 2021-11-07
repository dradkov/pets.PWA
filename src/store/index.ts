import { createStore } from "vuex";
import pets from "./pets.module";
import LocalForage, { key } from 'localforage';
import VuexPersist from 'vuex-persist';

const dataKey = 'pick.a.pet';
const appState = {
  ...pets.state,
};

const storage = LocalForage;

const vuexLocal = new VuexPersist({
  asyncStorage: true,
  key: dataKey,
  storage: storage as any
})

export default createStore({
  state: appState,
  mutations: {
    ...pets.mutations,
  },
  actions: {
    ...pets.actions,
  },
  getters: {
    ...pets.getters,
  },
  plugins: [vuexLocal.plugin]
});
