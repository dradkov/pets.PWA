import {
    REGISER_USER, SEND_FORGOTEN_PASS, LOGIN_USER
} from './actions.type';
import {
    SET_NEW_USER,
    SET_CURRENT_USER
} from './mutation.type';

import UserService from "@/services/UserService";
import UserRegister from '@/models/User/UserRegister';
import UserLogin from '@/models/User/UserLogin';
import User from '@/models/User/User';

const userService = UserService.shared;

const originalState = {
    userId: '' ,
    currentUser: {} as User,
}

const getters = {
    userId: (state) => state.userId,
    currentUser: (state) => state.currentUser
}

const actions = {
    [REGISER_USER]: ({ commit }, model: UserRegister) => {
        return new Promise<void>(async (resolve, reject) => {
            let userId: string;
            try {
                userId = await userService.registerUser(model);
                commit(SET_NEW_USER, userId);
            } catch (error) {
                console.log(error);
                reject(error);
            }
            resolve();
        })
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
        })
    },
    [LOGIN_USER]: ({ commit }, model: UserLogin) => {
        let user: User;
        return new Promise<User>(async (resolve, reject) => {
            try {
                user = await userService.login(model);
                commit(SET_CURRENT_USER, user);
            } catch (error) {
                console.log(error);
                reject(error);
            }
            resolve(user);
        })
    },
}

const mutations = {
    [SET_NEW_USER](state, userId: string) {
        state.userId = userId;
    },
    [SET_CURRENT_USER](state, user: User) {
        state.currentUser = user;
    }
}

export default {
    state: originalState,
    actions,
    mutations,
    getters
}