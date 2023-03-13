import Address from "./Address";
import { AdvertType } from "./Enums/AdvertType";
import { Gender } from "./Enums/Gender";
import { PetType } from "./Enums/PetType";

interface IPet {
  id: string;
  advertType: AdvertType;
  address: Address;
  gender: Gender;
  petType: PetType;
  chip: boolean;
  pedigree: boolean;
  photos: string[];
  phoneNumber: number;
  price: number;
  description: string;
}

class Pet implements IPet {
  id: string;
  advertType: AdvertType;
  address: Address;
  gender: Gender;
  petType: PetType;
  chip: boolean;
  pedigree: boolean;
  photos: string[];
  phoneNumber: number;
  price: number;
  description: string;
  breed: string;

  constructor(
    id: string,
    advertType: AdvertType,
    address: Address,
    gender: Gender,
    petType: PetType,
    chip: boolean,
    pedigree: boolean,
    photos: string[],
    phoneNumber: number,
    price: number,
    description: string,
    breed: string
  ) {
    this.id = id;
    this.advertType = advertType;
    this.address = address;
    this.gender = gender;
    this.petType = petType;
    this.chip = chip;
    this.pedigree = pedigree;
    this.photos = photos;
    this.phoneNumber = phoneNumber;
    this.price = price;
    this.description = description;
    this.breed = breed;
  }
}

export default Pet;
