
class Hotel{
    constructor(){
      this.rooms = []
      this.customers = []
    }
    addCustomer(name){
      this.customers.push(new Customer(name))
    }
    addRoom(roomId){
      this.rooms.push(new Room(roomId))
    }
}
