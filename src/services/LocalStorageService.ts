import IKeyValue from "@/models/IKeyValue";
import IStorageService from "@/services/IStorageService";

export default class LocalStorageService implements IStorageService {
    public get(key: string) {
        return JSON.parse(localStorage.getItem(key) as string);
    }
    public set({ key, value }: IKeyValue): void {
        localStorage.setItem(key, value);
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}