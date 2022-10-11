import {
    GET_ALL_PETS,
    GET_DROPDOWNS,
    TEST_PET,
} from './actions.type';
import {
    SET_ALL_PETS,
    SET_DROPDOWNS,
    SET_TEST_PET,
} from './mutation.type';

import PetService from "@/services/PetService";
import PaginationFilter from '@/models/PaginationFilter';
import Pet from '@/models/Pet';
import DropdownData from '@/models/DropdownData';

const petService = PetService.shared;

const originalState = {
    petList: [] as Pet[] ,
    advertTypes: [] as string[],
    petTypes: [] as string[],
    genderTypes: [] as string[],
    cities: [] as string[],
}

const getters = {
    pets: (state) => {
        return state.petList
    },
    advertTypes: (state) => {
        return state.advertTypes
    },
    petTypes: (state) => {
        return state.petTypes
    },
    genderTypes: (state) => {
        return state.genderTypes
    },
    cities: (state) => {
        return state.cities
    },
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
    [GET_DROPDOWNS]: ({ commit }) => {
        commit(SET_DROPDOWNS);
    },
}

const mutations = {
    [SET_TEST_PET](state, data: string) {
        state.petList = [data, data];
    },
    [SET_ALL_PETS](state, data: any) {
        state.petList = data;
    },
    [SET_DROPDOWNS](state) {
        state.advertTypes = DropdownData.AdvertTypes;
        state.petTypes = DropdownData.PetTypes;
        state.genderTypes = DropdownData.GenderTypes;
        state.cities = DropdownData.Cities;
    }
}

export default {
    state: originalState,
    actions,
    mutations,
    getters
}