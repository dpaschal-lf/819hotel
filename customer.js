
class Customer{
    constructor( name,  roomServiceCallback, checkOutCallback ){
        this.orderRoomService = this.orderRoomService.bind( this );
        this.currentRoom = null;
        this.callbacks = {
            roomservice: roomServiceCallback,
            checkout: checkOutCallback
        }
        this.name = name;
        this.roomServiceTimer = null;
        this.processActions();
    }
    processActions(){
        var randomDurationToAskForService = Math.random() * 5000;
        this.roomServiceTimer = setTimeout( this.orderRoomService, randomDurationToAskForService)
    }
    orderRoomService(){
        var foodItems = ['hotdog','pizza','popcorn','champaign'];
        var randomItem = foodItems[ Math.floor(Math.random()* foodItems.length)];
        console.log(this.name+ ' ordering a ' + randomItem + ' from roomservice')
        this.callbacks.roomservice(randomItem, this);
    }
    checkIntoRoom( roomObj ){
        this.currentRoom = roomObj;
    }
    getCurrentRoom(){
        return this.currentRoom;
    }
    receiveRoomService( item ){
        console.log('I, '+ this.name + ' am eating a ' + item);
    }
}