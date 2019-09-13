
var people = ['jan','uzair','sean','lana','james','brena','anjaleena','michael','christie','joseph','tarun','noel','christine','mitch','dane','heondo','adison','jordan','aaron']
var mgmgrande = new Hotel();

for( var roomID=100; roomID < 104; roomID++){
    mgmgrande.addRoom( roomID );
}

function addRandomPersonToList(){
    var randomPerson = people[ Math.floor( people.length * Math.random()) ];
    var success = mgmgrande.addCustomer( randomPerson );
    setTimeout( addRandomPersonToList , (Math.random()*20000)>>0) ;

    if(success){
        console.log('checked ' + randomPerson + ' into the hotel');
    } else {
        console.log('could not check ' + randomPerson + ' into the hotel, it was full');
    }
}
