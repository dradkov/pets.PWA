import { ADVERT_TYPE_OPTIONS } from "@/models/Enums/AdvertType";
import { GENDER_TYPE_OPTIONS } from "./Enums/Gender";
import { PET_TYPE_OPTIONS } from "./Enums/PetType";

export default class DropdownData {


  public static get AdvertTypes() {
    return valueCollection(ADVERT_TYPE_OPTIONS);
  }

  public static get PetTypes() {
    return valueCollection(PET_TYPE_OPTIONS);
  }

  public static get GenderTypes() {
    return valueCollection(GENDER_TYPE_OPTIONS);
  }

  public static get Cities() {
    return cityCollection();
  }
}

function valueCollection(collection: Map<number, string>){
    const types = [] as string[];
    collection.forEach((value: string, key: number) => {
        types.push(value)
    });

    return types;
}

function cityCollection(){
    const city = [] as string[];
  
    city.push("Айтос обл.Бургас")
    city.push("Алфатар обл.Силистра")
    city.push("Антоново обл.Търговище")
    city.push("Априлци обл.Ловеч")
    city.push("Ардино обл.Кърджали")
    city.push("Асеновград обл.Пловдив")
    city.push("Ахелой обл.Бургас")
    city.push("Ахтопол обл.Бургас")
    city.push("Балчик обл.Добрич")
    city.push("Банкя София град")
    city.push("Банско обл.Благоевград")
    city.push("Баня обл.Пловдив")

    return city;
}