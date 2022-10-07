export enum AdvertType {
    Buy = 'Buy',
    Sell = 'Sell',
    LostFound = 'LostFound',
    Breeding = 'Breeding'
}

export const ADVERT_TYPE_OPTIONS = new Map<number, string>([
    [0, 'Купува'],
    [1, 'Продава'],
    [2, 'Изгубено / Намерено'],
    [3, 'Breeding']
])