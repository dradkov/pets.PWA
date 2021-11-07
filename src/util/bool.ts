//import {isEmptyString } from '@/util/bool'
export const isEmptyString = (str: string): boolean => {
    return (!str || str.length === 0);
}