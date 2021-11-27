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
            debugger
            const url = 'https://localhost:5001/api/buy/list-buy'
            const response = await axios.get<any>(url);

            debugger
            const responseDate = response.data;
            return responseDate;
        } catch (error) {

            console.log(error);
            debugger
            return '';
        }
    }


    public async createAdvertBuy(neshot: string): Promise<string> {

        // try {
             debugger
;
         const url = 'https://localhost:5001/api/buy/create-advert'
        //     // const response = await axios.post<any>(url,);

             const data = {  Name: 'Fred', Age: 1 }
              

        //   const headers = { 
        //     "Access-Control-Allow-Origin": "*",
        //     "Content-Type": "application/json"
        //   };
          
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