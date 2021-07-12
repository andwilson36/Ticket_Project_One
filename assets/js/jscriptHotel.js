// get local storage info
function getLocalStorage() {
    $(".departingDate").val(localStorage.getItem('departingDate'));
    $(".returningDate").val(localStorage.getItem('returningDate'));
    $(".party").val(localStorage.getItem('party'));
}
// when user clicks on find hotels btn
$('.hotelButton').on('click', function(event) {
    event.preventDefault();
    // Takes value from input, sotres in local storage
    var arriveAt = $(".arrivingAt").val();
    localStorage.setItem('arrivingAtHotel', arriveAt);

    var departDate = $(".departingDate").val();
    localStorage.setItem('departingDate', departDate);

    var returnDate = $(".returningDate").val();
    localStorage.setItem('returningDate', returnDate);

    var partySize = $(".party").val();
    localStorage.setItem('party', partySize);
    // sends user to the hotel results page
    window.location.assign('./searchhotel.html');
});
// Navbar listeners
$('.flights-btn').on('click', function() {
    // saves dates and # of ppl to local storage
    var departDate = $(".departingDate").val();
    localStorage.setItem('departingDate', departDate);

    var returnDate = $(".returningDate").val();
    localStorage.setItem('returningDate', returnDate);  
    
    var partySize = $(".party").val();
    localStorage.setItem('party', partySize);
    // sends user to index.html
    window.location.assign('./index.html');
});
// Book listeners
// scrolls to top of page with featured place they clicked on as the value for the arriving place
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
// gets local storage when page loads
getLocalStorage();