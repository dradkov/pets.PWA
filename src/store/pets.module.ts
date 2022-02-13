import {
    TEST_PET,
} from './actions.type';
import {
    SET_TEST_PET,
} from './mutation.type';

import PetService from "@/services/PetService";

const petService = PetService.shared;

const originalState = {
    petList: [] as any ,
}

const getters = {
    pets: (state) => {
        return state.petList
    }
}

const actions = {
    // [TEST_PET]({commit}){
    //     commit(SET_TEST_PET);
    // }, 

    [TEST_PET]: ({ commit }, id: string) => {
        return new Promise<void>(async (resolve, reject) => {
            let test: string;
            try {
                test = await petService.getPets();
                commit(SET_TEST_PET, test);
            } catch (error) {
                console.log(error);
                reject(error);

            }
            resolve();
        })
        // commit(SET_TEST_PET);
    },


    // [GET_BUY_COUNT]: ({ commit }) => {
    //     return new Promise<void>(async (resolve, reject) => {
    //         let test: string;
    //         try {
    //             test = await petService.listAdvertBuy();
    //             commit(SET_BUY_COUNT, test);
    //         } catch (error) {
    //             console.log(error);
    //             reject(error);

    //         }
    //         resolve();
    //     })
    //     // commit(SET_TEST_PET);
    // }
}

const mutations = {
    [SET_TEST_PET](state, data: string) {
        state.petList = [data, data];
    }
}

export default {
    state: originalState,
    actions,
    mutations,
    getters
}