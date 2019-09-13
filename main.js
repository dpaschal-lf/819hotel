
var people = ['jan','uzair','sean','lana','james','brena','anjaleena','michael','christie','joseph','tarun','noel','christine','mitch','dane','heondo','adison','jordan','aaron']
var mgmgrande = new Hotel();

for( var roomID=100; roomID < 104; roomID++){
    mgmgrande.addRoom( roomID );
    addRandomPersonToHotel();
}

function addRandomPersonToHotel(){
    var index = Math.floor( people.length * Math.random());
    var randomPerson = people[ index ];
    people.splice(index, 1);

    var success = mgmgrande.addCustomer( randomPerson );
    if(people.length){
        setTimeout( addRandomPersonToHotel , Math.floor((Math.random()*20000)) + 10000) ;
    }

    if(success){
        console.log('checked ' + randomPerson + ' into the hotel');
    } else {
        console.log('could not check ' + randomPerson + ' into the hotel, it was full');
    }
}
