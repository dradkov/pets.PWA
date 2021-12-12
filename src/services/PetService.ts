import axios from "axios";

class PetService {
    public static shared = new PetService();


    public async getPets(): Promise<string> {
        const response = await axios.get<string>("urls");
        const responseDate = response.data;
        return responseDate;
    }

    public async listAdvertBuy(): Promise<string> {

        try {
            const url = 'https://localhost:5001/api/buy/list-buy'
            const response = await axios.get<any>(url);
            const responseDate = response.data;
            return responseDate;
        } catch (error) {

            console.log(error);
            return '';
        }
    }


    public async createAdvertBuy(model: string): Promise<string> {


         const url = 'https://localhost:5001/api/buy/create-advert'

         const data = {  Name: 'Fred', Age: 1 }
              
        const test = await  axios.post(url, data)
            .then((response) => {
                debugger
                console.log(response);
                return '';
            })
            .catch((error) => {
                console.log(error);
                    debugger
                return '';
            })

            return '';
    }
}

export default PetService;