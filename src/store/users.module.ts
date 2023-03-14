import {
  REGISER_USER,
  SEND_FORGOTEN_PASS,
  LOGIN_USER,
  LOGOUT_USER,
} from "./actions.type";
import {
  SET_NEW_USER,
  SET_CURRENT_USER,
  SET_LOGOUT_USER,
} from "./mutation.type";

import UserService from "@/services/UserService";
import UserRegister from "@/models/User/UserRegister";
import UserLogin from "@/models/User/UserLogin";
import User from "@/models/User/User";

const userService = UserService.shared;

const originalState = {
  currentUser: {} as User,
};

const getters = {
  currentUser: (state) => state.currentUser,
};

const actions = {
  [REGISER_USER]: ({ commit }, model: UserRegister) => {
    return new Promise<void>(async (resolve, reject) => {
      let user = {} as User;
      try {
        user = await userService.registerUser(model);
        commit(SET_CURRENT_USER, user);
      } catch (error) {
        console.log(error);
        reject(error);
      }
      resolve();
    });
  },
  [SEND_FORGOTEN_PASS]: ({ commit }, email: string) => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await userService.sendForgotenPass(email);
      } catch (error) {
        console.log(error);
        reject(error);
      }
      resolve();
    });
  },
  [LOGIN_USER]: ({ commit }, model: UserLogin) => {
    let user: User;
    return new Promise<User>(async (resolve, reject) => {
      try {
        user = await userService.login(model);
        commit(SET_CURRENT_USER, user);
      } catch (error) {
        reject(error);
      }
      resolve(user);
    });
  },
  [LOGOUT_USER]: ({ commit }) => {
    commit(SET_LOGOUT_USER);

    // return new Promise<boolean>(async (resolve, reject) => {
    //   try {
    //     logoutSuccess = await userService.logout(id);
    //     commit(SET_LOGOUT_USER, logoutSuccess);
    //   } catch (error) {
    //     console.log(error);
    //     reject(error);
    //   }
    //   resolve(logoutSuccess);
    // });
  },
};

const mutations = {
  [SET_CURRENT_USER](state, user: User) {
    state.currentUser = user;
  },
  [SET_LOGOUT_USER](state) {
    state.currentUser = {} as User;
  },
};

export default {
  state: originalState,
  actions,
  mutations,
  getters,
};
