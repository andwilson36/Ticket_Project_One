// Button varibles
var findFlights= document.querySelector('.flightButton');
var bookNY = document.querySelector('.ny-text');
var bookSF = document.querySelector('.sf-text');
var bookNO = document.querySelector('.new-o-text');
var bookSeatle = document.querySelector('.seatle-text');
// Input varibles
var departingFrom = document.querySelector(".departingFrom");
var arrivingAt = document.querySelector(".arrivingAt");
var departingDate= document.querySelector(".departingDate");
var returningDate= document.querySelector(".returningDate");
var party = document.querySelector(".party");

// Find Flights Listener
findFlights.addEventListener('click', function() {

    // Takes value from input
    var departFrom = departingFrom.value;
    console.log(departFrom);
    
    var arriveAt = AtarrivingAt.value;
    console.log(arriveAt);
    
    var departDate = departingDate.value;
    console.log(departDate);

    var returnDate = returningDate.value;
    console.log(returnDate);

    var partySize = party.value;
    console.log(partySize);
})

// Book listeners
bookNY.addEventListener('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    arrivingAt.value = 'JFK';
});

bookSF.addEventListener('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    arrivingAt.value = 'SFO';
});

bookNO.addEventListener('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    arrivingAt.value = 'MSY';
});

bookSeatle.addEventListener('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    arrivingAt.value = 'SEA';
});