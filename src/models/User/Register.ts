interface IRegister{
    email: string;
    password: string;
}

class Register implements IRegister{
    email: string; 
    password: string; 
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export default Register;