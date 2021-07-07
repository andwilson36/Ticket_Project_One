// gets local storage from hotel page
function getLocalStorage() {
    $(".departingDate").val(localStorage.getItem('departingDate'));
    $(".returningDate").val(localStorage.getItem('returningDate'));
    $(".party").val(localStorage.getItem('party'));
}

// Find Flights Listener
$('#find-btn').on('click', function(event) {
    event.preventDefault();
    // Takes value from input, sotres in local storage
    var departFrom = $(".departingFrom").val().toUpperCase() + '-sky';
    localStorage.setItem('departFrom', departFrom);

    var arriveAt = $(".arrivingAt").val().toUpperCase() + '-sky';
    localStorage.setItem('arrivingAt', arriveAt);

    var departDate = $(".departingDate").val();
    localStorage.setItem('departingDate', departDate);

    var returnDate = $(".returningDate").val();
    localStorage.setItem('returningDate', returnDate);

    var partySize = $(".party").val();
    localStorage.setItem('party', partySize);

    window.location.assign('./search.html');
});

 

// Navbar listeners
$('.fights-btn').on('click', function() {
    window.location.assign('./index.html');
})

$('.hotels-btn').on('click', function() {
    window.location.assign('./hotel.html');
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

getLocalStorage();