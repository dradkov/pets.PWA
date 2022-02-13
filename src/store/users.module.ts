import {
    REGISER_USER
} from './actions.type';
import {
    SET_NEW_USER
} from './mutation.type';

import UserService from "@/services/UserService";
import Register from '@/models/User/Register';

const userService = UserService.shared;

const originalState = {
    userId: '' ,
}

const getters = {
    userId: (state) => state.userId
}

const actions = {
    [REGISER_USER]: ({ commit }, model: Register) => {
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
}

const mutations = {
    [SET_NEW_USER](state, userId: string) {
        state.userId = userId;
    }
}

export default {
    state: originalState,
    actions,
    mutations,
    getters
}