/*
*   local storage:
*   arrivingAtHotel = airport user flies to
*   departingDate = date they leave
*   returningDate = date they return
*   party = # of ppl
*/
var id;
var hotel;
var destId;

var findId = {
    "async": true,
    "crossDomain": true,
    "url": "https://hotels4.p.rapidapi.com/locations/search?query=" + localStorage.getItem('arrivingAtHotel') + "&locale=en_US",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c2ce6b3c17msh57d6ee9ec7b2e6ap18a777jsnae6af7525db4",
        "x-rapidapi-host": "hotels4.p.rapidapi.com"
    }
};

$.ajax(findId).done(function (response) {
    console.log(response);
    id = response.suggestions[1].entities[1].destinationId;
    console.log(id);
    findDestId(id);
});

function findDestId(id) {
    var findDest = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/properties/get-details?id=" + id + "&checkIn=" + localStorage.getItem('departingDate') +"&checkOut=" + localStorage.getItem('returningDate') + "&currency=USD&locale=en_US&adults1=1",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c2ce6b3c17msh57d6ee9ec7b2e6ap18a777jsnae6af7525db4",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

    $.ajax(findDest).done(function (response) {
        console.log(response);
        destId = response.data.body.pdpHeader.destinationId;
        getHotels(destId);
    });
}

function getHotels(destId) {
    var hotelInfo = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=" + destId + "&pageSize=25&checkOut=" + localStorage.getItem('returningDate') +"&checkIn=" + localStorage.getItem('departingDate') + "&sortOrder=RATING&locale=en_US&currency=USD",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c2ce6b3c17msh57d6ee9ec7b2e6ap18a777jsnae6af7525db4",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

    $.ajax(hotelInfo).done(function (response) {
        console.log(response);
        createTickets(response);
    });
}
function createTickets(hotel) {
    $('.loading').hide()
    // appends to page
    var columns = $('<div>').addClass('columns');
    var columns2 = $('<div>').addClass('columns');
    var align = $('<div>').addClass('column align');
    var align2 = $('<div>').addClass('column align');
    var align3 = $('<div>').addClass('column align');
    var align4 = $('<div>').addClass('column align');
    var hotelName = $('<p>').addClass('bd-notification is-info searchBox hotelName');
    var mobile = $('<div>').addClass('columns is-mobile');
    var mobile2 = $('<div>').addClass('columns is-mobile');
    var mobile3 = $('<div>').addClass('columns is-mobile');
    var mobile4 = $('<div>').addClass('columns is-mobile');
    var column = $('<div>').addClass('column');
    var column2 = $('<div>').addClass('column');
    var column3 = $('<div>').addClass('column');
    var column4 = $('<div>').addClass('column');
    var destination = $('<p>').addClass('bd-notification is-info searchBox dest');
    var price = $('<p>').addClass('bd-notification is-info searchBox price');
    var leaveDate = $('<p>').addClass('bd-notification is-info searchBox leaveDate');
    var departingHotel = $('<p>').addClass('bd-notification is-info searchBox');
    var arrivingHotel = $('<p>').addClass('bd-notification is-info searchBox');
    var bookNow = $('<button>').addClass('columns is-centered is-narrow is-success button');

    var roomsLeft = $('<p>').addClass('column');
    var neighbourhood = $('<p>').addClass('column');
    var features = $('<ol>').addClass('column');
    var freeCancellation = $('<li>').addClass('column');
    var noCCRequired = $('<li>').addClass('column');
    var welcomeRewards = $('<li>').addClass('column');
    var landmarks = $('<p>').addClass('column');
    var milesAway = $('<p>').addClass('column');

    // loops through all pulled data
        $('#container').append(columns);
        columns.append(align);
        align.append(hotelName);
        align.append(mobile);
        mobile.append(column);
        column.append(destination);
        columns.append(align2);
        align2.append(arrivingHotel);
        align2.append(mobile2);
        mobile2.append(column3);
        column3.append(price);
        $('#container').append(bookNow);
        
        $('.bookNow').append(columns2);
        columns2.append(column4);

        column4.append(neighbourhood);
        align3.append(mobile3);
        mobile3.append(column2);
        column2.append(landmarks);
        landmarks.append(columns);
        columns.append(milesAway);
        align3.append(features);
        features.append(welcomeRewards);
        features.append(freeCancellation);
        features.append(noCCRequired);


        hotelName.text(hotel.data.body.searchResults.results[0].name);
        hotelName.css({"font-size": "200%"});
        destination.text(hotel.data.body.searchResults.results[0].address.streetAddress + ", " + hotel.data.body.searchResults.results[0].address.locality + ", " + hotel.data.body.searchResults.results[0].address.region);
        destination.css({"font-size": "100%"});
        price.text(hotel.data.body.searchResults.results[0].ratePlan.price.current + " per night");
        arrivingHotel.text(hotel.data.body.searchResults.results[0].guestReviews.rating + ' out of ' + hotel.data.body.searchResults.results[0].guestReviews.total + ' reviews');
        
        neighbourhood.text(hotel.data.body.searchResults.results[0].neighbourhood);
        welcomeRewards.text(hotel.data.body.searchResults.results[0].welcomeRewards.collect);
        freeCancellation.text(hotel.data.body.searchResults.results[0].ratePlan.features.freeCancellation);
        noCCRequired.text(hotel.data.body.searchResults.results[0].ratePlan.features.noCCRequired);
        landmarks.text(hotel.data.body.searchResults.results[0].landmarks[0].label);
        milesAway.text(hotel.data.body.searchResults.results[0].landmarks[0].distance + " away")
    
        bookNow.text("Book Now");
        // bookNow.on('click', function(event) {
        //     event.preventDefault();

        //     roomsleft
        //     landmarks nearby
        //     neighborhoods
        //     features (freeCancellation, noCCRequired,paymentPreference)
        //     welcomerewards
            






            
        // });
}
