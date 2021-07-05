// Find Flights Listener
$('#find-btn').on('click', function(event) {
    event.preventDefault();

    // Takes value from input
    var departFrom = $(".departingFrom").val();
    console.log(departFrom);
    
    var arriveAt = $(".arrivingAt").val();
    console.log(arriveAt);
    
    var departDate = $(".departingDate").val();
    console.log(departDate);

    var returnDate = $(".returningDate").val();
    console.log(returnDate);

    var partySize = $(".party").val();
    console.log(partySize);
});

// Book listeners
$('.ny-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('JFK');
});

$('.sf-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('SFO');
});

$('.new-o-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('MSY');
});

$('.seatle-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('SEA');
});