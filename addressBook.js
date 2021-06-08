
console.log("--###---Welcome to addressook---###--");

class Contact{
    constructor(...params){
        this.firstname=params[0];
        this.lastname=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phonenumber=params[6];
        this.email=params[7];
    }
    get firstname(){
        return this._firstname;
    }
    set firstname(firstname){
        this._firstname=firstname;
    }

    get lastname(){
        return this._lastname;
    }
    set lastname(lastname){
        this._lastname=lastname;
    }
    
    get address(){
        return this._address;
    }
    set address(address){
        this._address=address;
    }

    get city(){
        return this._city;
    }
    set city(city){
        this._city=city;
    }

    get state(){
        return this._state;
    }
    set state(state){
        this._state=state;
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip=zip;
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        this._phoneNumber=phoneNumber;
    }

    get email(){
        return this._email;
    }
    set email(email){
        this._email=email;
    }
    toString(){
        return "FirstName:"+this.firstname+",Lastname:"+this.lastname+",Address:"+this.address+",City:"
                +this.city+",State:"+this.state+",Zip:"+this.zip+",MobileNumber:"+this.phoneNumber+",Email:"
                +this.email;
    }
}