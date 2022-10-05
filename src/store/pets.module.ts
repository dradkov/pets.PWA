import {
    GET_ALL_PETS,
    TEST_PET,
} from './actions.type';
import {
    SET_ALL_PETS,
    SET_TEST_PET,
} from './mutation.type';

import PetService from "@/services/PetService";
import PaginationFilter from '@/models/PaginationFilter';

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

    [GET_ALL_PETS]: ({ commit }, filter: PaginationFilter) => {
        return new Promise<void>(async (resolve, reject) => {
            let result: any;
            try {
                result = await petService.getAllPets(filter.pageNumber,filter.pageSize);
                commit(SET_ALL_PETS, result);
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
    },
    [SET_ALL_PETS](state, data: any) {
        state.petList = data;
    }
}

export default {
    state: originalState,
    actions,
    mutations,
    getters
}