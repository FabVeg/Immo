module.exports = class User {
    
    id;
    civility;
    lastname;
    firstname;
    phone;
    email;
    password;
    adress;
    adress2;
    city;
    zip;
 
    get id() {
        return this.id;
    }
    set id(id) {
        this.id = id;
    }
 
    get civility() {
        return this.civility;
    }
    set civility(civility) {
        this.civility = civility;
    }
 
    get lastname() {
        return this.lastname;
    }
    set lastname(lastname) {
        this.lastname = lastname;
    }
 
    get firstname() {
        return this.firstname;
    }
    set firstname(firstname) {
        this.firstname = firstname;
    }
    get phone() {
        return this.phone;
    }
    set phone(phone) {
        this.phone = phone;
    }
    get email() {
        return this.email;
    }
    set email(email) {
        this.email = email;
    }
    get password() {
        return this.password;
    }
    set password(password) {
        this.password = password;
    }
    get adress() {
        return this.adress;
    }
    set adress(adress) {
        this.adress = adress;
    }
    get adress2() {
        return this.adress;
    }
    set adress2(adress2) {
        this.adress2 = adress2;
    }
    get city() {
        return this.city;
    }
    set city(city) {
        this.city = city;
    }
    get zip() {
        return this.zip;
    }
    set zip(zip) {
        this.zip = zip;
    }
}
