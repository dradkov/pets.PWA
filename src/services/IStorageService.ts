import IKeyValue from "@/models/IKeyValue";

export default interface IStorage {
    get(key: string): any,
    set({ key, value }: IKeyValue): void,
    remove(key: string): void
}