// gets local storage from hotel page
function getLocalStorage() {
    $(".departingDate").val(localStorage.getItem('departingDate'));
    $(".returningDate").val(localStorage.getItem('returningDate'));
    $(".party").val(localStorage.getItem('party'));
}
// Find Flights Listener
$('#find-btn').on('click', function(event) {
    event.preventDefault();
    // Takes value from input, stores in local storage
    // changes value entered to uppercase and adds -sky for api
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
    // sends user to search.html to see flight info
    window.location.assign('./search.html');
});
// Navbar listeners
$('.hotels-btn').on('click', function() {
    // stores departing and arriving date to local storage
    var departDate = $(".departingDate").val();
    localStorage.setItem('departingDate', departDate);

    var returnDate = $(".returningDate").val();
    localStorage.setItem('returningDate', returnDate);

    var partySize = $(".party").val();
    localStorage.setItem('party', partySize);
    // sends user to hotel.html
    window.location.assign('./hotel.html');
});
// Book listeners
// scrolls the user to the top of the page with the location they selected filled in the arriving form
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
// gets local storage when page loads
getLocalStorage();