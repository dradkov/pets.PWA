
// import { createStore } from "vuex";
import pets from "./pets.module";
import users from "./users.module";
import LocalForage from 'localforage';
import VuexPersist from 'vuex-persist';

// store.ts

import { createStore } from 'vuex'


// define your typings for the store state
export interface State {
  originalState: any
}

// define injection key
//export const key: InjectionKey<Store<State>> = Symbol()

const dataKey = 'pick.a.pet';
const appState = {
  ...pets.state,
  ...users.state
};

LocalForage.config({
  name: 'Pick-a-Pet',
  storeName: 'pet'
});

const storage = LocalForage;

const vuexLocal = new VuexPersist({
  asyncStorage: true,
  key: dataKey,
  storage: storage as any
})

export const store = createStore({
  state () {
    return appState
  },
  mutations: {
    ...pets.mutations,
    ...users.mutations,
  },
  actions: {
    ...pets.actions,
    ...users.actions,
  },
  getters: {
    ...pets.getters,
    ...users.getters,
  },
  plugins: [vuexLocal.plugin]
})

// export default createStore({

// });
