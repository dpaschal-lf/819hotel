class Hotel{
    constructor(){
      this.takeRoomServiceOrder = this.takeRoomServiceOrder.bind(this);
      this.fulfillRoomServiceOrder = this.fulfillRoomServiceOrder.bind(this);
      this.checkout = this.checkout.bind(this);
      this.rooms = [];
      this.customers = [];
      this.orders = [];
    }
    addCustomer(name){
      var customer = new Customer(name, this.takeRoomServiceOrder, this.checkout);
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
    takeRoomServiceOrder(foodItem, customer){
      console.log('Customer ordered room service');
      var currentRoom = customer.getCurrentRoom();
      this.orders.unshift({item: foodItem, room: currentRoom});
      var randomTime = Math.random() * 5000;
      setTimeout(this.fulfillRoomServiceOrder, randomTime)
    }
    fulfillRoomServiceOrder(){
      console.log('Customer order fulfilled');
      var order = this.orders.pop();
      order.room.deliverRoomService(order.item);
    }

    checkout(){
      console.log('customer is checking out');
    }
}
