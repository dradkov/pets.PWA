import axios from "axios";

class PetService{
    public static shared = new PetService();


    public async getPets(): Promise<string> {
        const response = await axios.get<string>("urls");
        const responseDate = response.data;
        return responseDate;
    }
}

export default PetService;