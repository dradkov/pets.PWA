
// import { createStore } from "vuex";
import pets from "./pets.module";
import users from "./users.module";
import LocalForage from 'localforage';
import Vuex from 'vuex';

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

export const configureStore = async () => {
  const savedState = await storage.getItem(dataKey);

  const storeConfig = {
    state: savedState ? JSON.parse(JSON.stringify(savedState)) : appState,
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
            storage.setItem(dataKey, JSON.parse(JSON.stringify(state)));
          })
        }]
  };

  return new Vuex.Store(storeConfig);
};

