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
        "url": "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=" + destId + "&pageSize=25&checkOut=" + localStorage.getItem('returningDate') +"&checkIn=" + localStorage.getItem('departingDate') + "&sortOrder=PRICE&locale=en_US&currency=USD",
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
    // appends to page
    var columns = $('<div>').addClass('columns');
    var align = $('<div>').addClass('column align');
    var align2 = $('<div>').addClass('column align');
    var align3 = $('<div>').addClass('column align');
    var align4 = $('<div>').addClass('column align');
    var hotelName = $('<p>').addClass('bd-notification is-info searchBox hotelName');
    var mobile = $('<div>').addClass('columns is-mobile');
    var mobile2 = $('<div>').addClass('columns is-mobile');
    var mobile4 = $('<div>').addClass('columns is-mobile');
    var mobile5 = $('<div>').addClass('columns is-mobile');
    var column = $('<div>').addClass('column');
    var column2 = $('<div>').addClass('column');
    var column3 = $('<div>').addClass('column');
    var destination = $('<p>').addClass('bd-notification is-info searchBox dest');
    var price = $('<p>').addClass('bd-notification is-info searchBox price');
    var leaveDate = $('<p>').addClass('bd-notification is-info searchBox leaveDate');
    var departingHotel = $('<p>').addClass('bd-notification is-info searchBox');
    var arrivingHotel = $('<p>').addClass('bd-notification is-info searchBox');

    // loops through all pulled data
        $('#container').append(columns);
        columns.append(align);
        align.append(hotelName);
        align.append(mobile);
        mobile.append(column);
        column.append(destination);
        columns.append(align2);
        align2.append(price);
        align2.append(mobile2);
        columns.append(align3);
        align3.append(leaveDate);
        align3.append(mobile4);
        mobile4.append(column2);
        columns.append(align4);
        align4.append(departingHotel);
        align4.append(mobile5);
        mobile5.append(column3);
        column3.append(arrivingHotel);
        $('hotelName').text(hotel.data.propertyDescription.name);
        $('dest').text(hotel.data.propertyDescription.fullAddress);
        $('price').text(hotel.data.body.roomsAndRates.rooms.ratePlans.price.current);
        $('arrivingHotel').text(hotel.data.body.guestReviews.tripAdvisor.rating + 'out of ' + hotel.data.body.guestReviews.tripAdvisor.total + ' reviews.');
}
