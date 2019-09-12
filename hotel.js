class Hotel{
    constructor(){
      this.roomService = this.roomService.bind(this);
      this.checkout = this.checkout.bind(this);
      this.rooms = [];
      this.customers = [];
    }
    addCustomer(name){
      var customer = new Customer(name, this.roomService, this.checkout);
      this.customers.push(customer);
      for(var i = 0; i < this.rooms.length; i++){
        if(this.rooms[i].isVacant()){
          this.rooms[i].addCustomer(customer)
          break;
        }
      }
    }
    addRoom(roomId){
      this.rooms.push(new Room(roomId));
    }
    roomService(){
      console.log('customer ordered room service');
    }
    checkout(){
      console.log('customer is checking out');
    }
}
