class Room {
  constructor (id) {
    this.id = id || null;
    this.customer = null;
    this.vacant = true;
    this.clean = true;
  }

  isVacant () {
    return this.vacant;
  }

  isClean () {
    return this.clean;
  }

  addCustomer (customer) {
    this.customer = customer;
    this.customer.checkIntoRoom(this);
    this.vacant = false;
  }

  removeCustomer () {
    this.customer = null;
    this.vacant = true;

    var randomTime = Math.floor(Math.random() * 10000);

    setTimeout(function() {
      this.clean = true;
    }, randomTime);

    return true;
  }

  deliverRoomService (item) {
    if (this.customer) {
      this.customer.receiveRoomService(item);
      this.clean = false;
    }
  }
}
