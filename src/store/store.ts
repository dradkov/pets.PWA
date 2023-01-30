
// import { createStore } from "vuex";
import pets from "./pets.module";
import users from "./users.module";
import LocalForage from 'localforage';
import VuexPersist from 'vuex-persist';
import Vuex from 'vuex';
import _ from 'lodash';
import 'localforage-getitems';
import 'localforage-setitems';
import { createStore } from 'vuex'

export interface State {
  originalState: any
}

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


// export const createStore = async () => ({
//   state   ()  {

//     // storage.setItem('my-state', appState).catch(function(err) { console.log(err);});
//     return appState
//   },
//   mutations: {
//     ...pets.mutations,
//     ...users.mutations,
//   },
//   actions: {
//     ...pets.actions,
//     ...users.actions,
//   },
//   getters: {
//     ...pets.getters,
//     ...users.getters,
//   },
//   plugins: [vuexLocal.plugin]
// }

// )


export const configureStore = async () => {
  const savedState = await LocalForage.getItem(dataKey);

  const storeConfig = {
    state: savedState ? JSON.parse(savedState as any) : appState,
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
        plugins: [store=>{
          store.subscribe((mutations,state)=>{
            LocalForage.setItem(dataKey, JSON.parse(JSON.stringify(state)));
          })
        }]
  };

  return new Vuex.Store(storeConfig);
};

