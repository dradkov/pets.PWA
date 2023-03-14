import User from "@/models/User/User";
import UserRegister from "@/models/User/UserRegister";
import UserLogin from "@/models/User/UserLogin";
import axios from "axios";

class UserService {
    public static shared = new UserService();
    public baseUrl = process.env.VUE_APP_ENDPOINT_API

    public async getUser(): Promise<string> {
        const response = await axios.get<string>("urls");
        const responseDate = response.data;
        return responseDate;
    }


    public async registerUser(data: UserRegister): Promise<User> {
        const url = `${this.baseUrl}/api/auth/register`;
        const result = await axios.post<User>(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error.message);
            })
        
        return result;
    }

    public async sendForgotenPass(email: string): Promise<void> {
        const url = `${this.baseUrl}/api/auth/send-email/${email}`;
        const result = await axios.get<any>(url)
            .then((response) => {
                response.data;
            })
            .catch((error) => {
                throw new Error(error.message);
            });
    }

    public async login(data: UserLogin): Promise<User> {
        const url = `${this.baseUrl}/api/auth/login`;
        const result = await axios.post<User>(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {   
                throw new Error(error.message);
            })
        
        return result;
           
    }

    // Redundant at the moment
    public async logout(id: string): Promise<boolean> {
        const url = `${this.baseUrl}/api/auth/logout/${id}`;
        const result = await axios.get<boolean>(url)
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