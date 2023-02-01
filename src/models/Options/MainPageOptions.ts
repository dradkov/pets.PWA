export enum MainOption {
    SellBuy = 'SellBuy',
    MarketPlace = 'MarketPlace',
    PetGift = 'PetGift',
    FoundLost = 'FoundLost',
    SearchPartner = 'SearchPartner',
    Veterinary = 'Veterinary'
}

export const FORMATTED_MAIN_OPTIONS = new Map<MainOption, string>([
    [MainOption.SellBuy, 'Sell/Buy'],
    [MainOption.MarketPlace, 'Marketplace'],
    [MainOption.PetGift, 'Pet Gift'],
    [MainOption.FoundLost, 'Found/Lost'],
    [MainOption.SearchPartner, 'Search Partner'],
    [MainOption.Veterinary, 'Veterinary'],
])