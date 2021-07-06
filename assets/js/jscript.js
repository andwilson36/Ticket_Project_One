// Find Flights Listener
$('#find-btn').on('click', function(event) {
    event.preventDefault();

    // Takes value from input
    var departFrom = $(".departingFrom").val();
    
    var arriveAt = $(".arrivingAt").val();
    
    var departDate = $(".departingDate").val();

    var returnDate = $(".returningDate").val();

    var partySize = $(".party").val();
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