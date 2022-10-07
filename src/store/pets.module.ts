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
import Pet from '@/models/Pet';

const petService = PetService.shared;

const originalState = {
    petList: [] as Pet[] ,
}

const getters = {
    pets: (state) => {
        return state.petList
    }
}

const actions = {
    [GET_ALL_PETS]: ({ commit }, filter: PaginationFilter) => {
        return new Promise<void>(async (resolve, reject) => {
            let result: any;
            try {
                result = await petService.getAllPets(filter.pageNumber,filter.pageSize);
                commit(SET_ALL_PETS, result.data);
            } catch (error) {
                console.log(error);
                reject(error);

            }
            resolve();
        })
    },
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