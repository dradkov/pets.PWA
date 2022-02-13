import Register from "@/models/User/Register";
import axios from "axios";

class UserService {
    public static shared = new UserService();
    public baseUrl = process.env.VUE_APP_ENDPOINT_API

    public async getUser(): Promise<string> {
        const response = await axios.get<string>("urls");
        const responseDate = response.data;
        return responseDate;
    }


    public async registerUser(data: Register): Promise<string> {

        const url = `${this.baseUrl}/api/user/register`;
        const result = await axios.post<any>(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error.message);
            })
            
        return result;
    }
}

export default UserService;