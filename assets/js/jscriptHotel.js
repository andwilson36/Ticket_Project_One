// get local storage info
function getLocalStorage() {
    $(".departingDate").val(localStorage.getItem('departingDate'));
    $(".returningDate").val(localStorage.getItem('returningDate'));
    $(".party").val(localStorage.getItem('party'));
}

// Find Flights Listener
$('#find-btn').on('click', function(event) {
    event.preventDefault();
    // Takes value from input
    var arriveAt = $(".arrivingAt").val();
    localStorage.setItem('arrivingAt', arriveAt);

    var departDate = $(".departingDate").val();
    localStorage.setItem('departingDate', departDate);

    var returnDate = $(".returningDate").val();
    localStorage.setItem('returningDate', returnDate);

    var partySize = $(".party").val();
    localStorage.setItem('party', partySize);
});

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

getLocalStorage();