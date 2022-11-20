interface IUser{
    email: string;
    password: string;
    userName: string;
    loginDate?: Date;
    phoneNumber: number;
    token: string;
    pets: any[];
}

class User implements IUser{
    email: string;
    password: string;
    userName: string;
    loginDate?: Date;
    phoneNumber: number;
    token: string;
    pets: any[];
    constructor(email: string, password: string,userName: string,loginDate: Date, phoneNumber: number, token: string, pets: any[]  ) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.loginDate = loginDate;
        this.phoneNumber = phoneNumber;
        this.token = token;
        this.pets = [] as any[];
    }
}

export default User;
