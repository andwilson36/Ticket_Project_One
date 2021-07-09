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
        "url": "https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&destinationId=" + destId + "&pageSize=6&checkOut=" + localStorage.getItem('returningDate') +"&checkIn=" + localStorage.getItem('departingDate') + "&sortOrder=RATING&locale=en_US&currency=USD",
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

    $('.loading').hide();
    $('.footer').show();

    for(var i = 0; i < 6; i++) {
        
        var columns = $('<div>').addClass('columns');
        var align = $('<div>').addClass('column align');
        var align2 = $('<div>').addClass('column align');
        var align3 = $('<div>').addClass('column align');
        var align4 = $('<div>').addClass('column align');
        var hotelName = $('<p>').addClass('bd-notification is-info searchBox airName');
        var mobile = $('<div>').addClass('columns is-mobile');
        var mobile2 = $('<div>').addClass('columns is-mobile');
        var mobile3 = $('<div>').addClass('columns is-mobile');
        var mobile4 = $('<div>').addClass('columns is-mobile');
        var mobile5 = $('<div>').addClass('columns is-mobile');
        var column = $('<div>').addClass('column');
        var column2 = $('<div>').addClass('column');
        var column3 = $('<div>').addClass('column');
        var column4 = $('<div>').addClass('column col4');
        var destination = $('<p>').addClass('bd-notification is-info searchBox dest');
        var price = $('<p>').addClass('bd-notification is-info searchBox price');
        var neighbourhood = $('<p>').addClass('bd-notification is-info searchBox neighbourhood');
        var landmarks = $('<p>').addClass('bd-notification is-info searchBox landmarks');
        var features = $('<p>').addClass('bd-notification is-info searchBox');
        var welRewards = '❌';
        var freeCancel = '❌';
        var noCCReq = '❌';

        if(hotel.data.body.searchResults.results[i].welcomeRewards.collect) {
            welRewards = '✔️';
        }
        if(hotel.data.body.searchResults.results[i].ratePlan.features.freeCancellation) {
            freeCancel = '✔️';
        }
        if(hotel.data.body.searchResults.results[i].ratePlan.features.noCCRequired){
            noCCReq = '✔️';
        }
        
        $('#container').append(column4);
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
        align3.append(neighbourhood);
        align3.append(mobile4);
        mobile4.append(column2);
        column2.append(landmarks);
        columns.append(align4);
        align4.append(features);
        align4.append(mobile5);
        mobile5.append(column3);
        
       
        //origin to destination
        hotelName.text(hotel.data.body.searchResults.results[i].name);
        hotelName.css({"font-size": "200%"});
        destination.text(hotel.data.body.searchResults.results[i].address.streetAddress + ", " + hotel.data.body.searchResults.results[i].address.locality + ", " + hotel.data.body.searchResults.results[i].address.region);         
        destination.css({"font-size": "100%"});
        price.text(hotel.data.body.searchResults.results[i].ratePlan.price.current + " per night");
        price.css({"margin-top" : "35px"});
        neighbourhood.text('Neighbourhood: ' + hotel.data.body.searchResults.results[0].neighbourhood);
        neighbourhood.css({"margin-top" : "35px"});
        landmarks.text(hotel.data.body.searchResults.results[i].landmarks[0].label + ' ' + hotel.data.body.searchResults.results[i].landmarks[0].distance + " away");
        features.html('Features:' + "<br/>" + "Welcome Rewards: " + welRewards + "<br/>" + 'Free Cancellation: ' + freeCancel + "<br/>" + 'No CC Required: ' + noCCReq);
        features.css({"margin-top" : "35px"});

        columns.css({"margin-bottom": "0px"});
    }
}