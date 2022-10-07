interface IAddress{
    city: string;
    streetAddress: string;
}

class Address implements IAddress{
    city: string;
    streetAddress: string;
    constructor(city: string, streetAddress: string) {
        this.city = city;
        this.streetAddress = streetAddress;
    }
}

export default Address;