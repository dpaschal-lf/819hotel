class Room {
  constructor (id) {
    this.id = id || null;
    this.customer = null;
    this.vacant = true;
  }

  isVacant () {
    return this.vacant;
  }

  addCustomer (customer) {
    this.customer = customer;
    this.vacant = false;
  }
}
