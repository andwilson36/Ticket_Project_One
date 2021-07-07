// Find Flights Listener
// $('#find-btn').on('click', function(event) {
//     event.preventDefault();
//     // Takes value from input
//     var departFrom = $(".departingFrom").val();  
//     var arriveAt = $(".arrivingAt").val();
//     var departDate = $(".departingDate").val();
//     var returnDate = $(".returningDate").val();
//     var partySize = $(".party").val();
//     var arriveAt = $(".arrivingAt").val();
//     var departDate = $(".departingDate").val();
//     var returnDate = $(".returningDate").val();
//     var partySize = $(".party").val();
// });

// Navbar listeners
$('.flights-btn').on('click', function() {
    window.location.assign('./index.html');
});

// Book listeners
$('.la-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('Los Angeles');
});

$('.hou-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('Houston');
});

$('.chicago-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('Chicago');
});

$('.miami-text').on('click', function(event) {
    event.preventDefault();

    $(document).scrollTop(1);
    $(".arrivingAt").val('Miami');
});
