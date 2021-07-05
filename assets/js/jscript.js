// varibles
var findFlights= document.querySelector('.flightButton');

// Event Listener
findFlights.addEventListener('click', function() {
    console.log("true!")
    // departingFrom form value
    var departingFrom = document.querySelector(".departingFrom").value;
    console.log(departingFrom)
    // arrivingAt form value
    var arrivingAt= document.querySelector(".arrivingAt").value;
    console.log(arrivingAt)
    
    // departingDate
    var departingDate= document.querySelector(".departingDate").value;
    console.log(departingDate)

    // returningDate
    var returningDate= document.querySelector(".returningDate").value;
    console.log(returningDate)

    // partySize 
    var party = document.querySelector(".party").value;
    console.log(party)
})
