import {
    GET_ALL_PETS,
    GET_CURRENT_PET,
} from './actions.type';
import {
    SET_ALL_PETS,
    SET_CURRENT_PET,
} from './mutation.type';

import PetService from "@/services/PetService";
import PaginationFilter from '@/models/PaginationFilter';
import Pet from '@/models/Pet';

const petService = PetService.shared;

const originalState = {
    petList: [] as Pet[] ,
    currentPetAd:{} as Pet ,
}

const getters = {
    pets: (state) => {
        return state.petList
    },
    currentPetAd:(state) => state.currentPetAd
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

    [GET_CURRENT_PET]: ({ commit }, id: string) => {
        commit(SET_CURRENT_PET, id);
    },
}

const mutations = {
    [SET_ALL_PETS](state, data: any) {
        state.petList = data;
    },
    [SET_CURRENT_PET](state, id: string) {
        const list = state.petList as Pet[];
        state.currentPetAd = list.find(x => x.id === id);
    }
}

export default {
    state: originalState,
    actions,
    mutations,
    getters
}