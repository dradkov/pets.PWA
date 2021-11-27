
// import { createStore } from "vuex";
import pets from "./pets.module";
import LocalForage from 'localforage';
import VuexPersist from 'vuex-persist';

// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  originalState: any
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state: {
//     count: 0
//   }
// })




const dataKey = 'pick.a.pet';
const appState = {
  ...pets.state,
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

export const store = createStore<State>({
  state: {
    originalState: appState
  },
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
})

export default createStore({

});




// export const store = createStore({
//   state () {
//     return {
//       count: 1
//     }
//   }
// })