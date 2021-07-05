// varibles
var findFlights= document.querySelector('.flightButton');

// Event Listener
findFlights.addEventListener('click', function() {
    console.log("true!")
    // departingFrom form value
    var departingFrom = document.getElementsByClassName("departingFrom").value;
    console.log(departingFrom)
    // arrivingAt form value
    var arrivingAt= document.getElementsByClassName("arrivingAt").value;
    console.log(arrivingAt)
    
    // departingDate
    var departingDate= document.getElementsByClassName("departingDate").value;
    console.log(departingDate)

    // returningDate
    var returningDate= document.getElementsByClassName("returningDate").value;
    console.log(returningDate)

    // partySize 
    var partySize= document.getElementsByClassName("partysize").value;
    console.log(partySize) 
})







// document.getElementById("formGroupExampleInput").value;