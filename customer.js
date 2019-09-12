
class Customer{
    constructor( name,  roomServiceCallback, checkOutCallback ){
        this.callbacks = {
            roomservice: roomServiceCallback,
            checkout: checkOutCallback
        }
        this.name = name;
    }
}