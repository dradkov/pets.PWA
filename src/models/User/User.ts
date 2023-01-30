interface IUser{
    id: string;
    email: string;
    password: string;
    userName: string;
    loginDate?: Date;
    phoneNumber: number;
    token: string;
    pets: any[];
}

class User implements IUser{
    id: string;
    email: string;
    password: string;
    userName: string;
    loginDate?: Date;
    phoneNumber: number;
    token: string;
    pets: any[];
    constructor( id: string, email: string, password: string,userName: string,loginDate: Date, phoneNumber: number, token: string, pets: any[]  ) {
        this.id = id;
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
