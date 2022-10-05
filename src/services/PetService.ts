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


    // public async getAdverts(): Promise<string> {


    //     // try {
    //     //     const url = 'https://localhost:5001/api/buy/list-buy'
    //     //     const response = await axios.get<any>(url);
    //     //     const responseDate = response.data;
    //     //     return responseDate;
    //     // } catch (error) {

    //     //     console.log(error);
    //     //     return '';
    //     // }
    //     // get-al
    //     // const response = await axios.get<string>();


    //     // const responseDate = response.data;
    //     // return responseDate;
    // }


    public async getAllPets(pageNumber: number, pageSize:number): Promise<any> {

        try {

           // const url = `https://localhost:5001/api/Pet/get-all`;
            const url = `https://localhost:5001/api/Pet/1`;

            // const params = new URLSearchParams();
            // params.append('pageNumber', `${pageNumber}`);
            // params.append('pageSize', `${pageSize}`);

            console.log('getAllPets(pageNumber: number, pageSize:number');

           // const result = await axios.get<any>(url, { params });
            const result = await axios.get<any>(url);
            // console.log(result);
            // return result.data;

            return result

        } catch (error) {
            console.log(`Could not retrieve`, error);
            throw error;
        }
    }
}

export default PetService;