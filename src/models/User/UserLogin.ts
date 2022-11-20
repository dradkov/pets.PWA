interface IUserLogin{
    email: string;
    password: string;
}

class UserLogin implements IUserLogin{
    email: string; 
    password: string; 
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export default UserLogin;