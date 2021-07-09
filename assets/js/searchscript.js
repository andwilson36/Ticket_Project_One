// makes api
var api = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + localStorage.getItem('departFrom') + "/" + localStorage.getItem('arrivingAt') + "/" + localStorage.getItem('departingDate') + "?inboundpartialdate=" + localStorage.getItem('returningDate'),
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c2ce6b3c17msh57d6ee9ec7b2e6ap18a777jsnae6af7525db4",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
};
// makes api
var returnApi = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + localStorage.getItem('arrivingAt') + "/" + localStorage.getItem('departFrom') + "/" + localStorage.getItem('returningDate') + "?inboundpartialdate=" + localStorage.getItem('returningDate'),
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c2ce6b3c17msh57d6ee9ec7b2e6ap18a777jsnae6af7525db4",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
};
// pulls api
async function pullData(api, returnApi) {
    var goingDest = await $.ajax(api).done(function (response) {
        console.log(response);
        return response;
    });
    
    var returningDest = await $.ajax(returnApi).done(function (response) {
        console.log(response);
        return response;
    });

    createTickets(goingDest, returningDest);
    //createTicketsReturn(returningDest, goingDest);
}

function createTickets(goingDest, returningDest) {
    for(var i = 0; i < goingDest.Carriers.length; i++) {
        
        var columns = $('<div>').addClass('columns');
        var align = $('<div>').addClass('column align');
        var align2 = $('<div>').addClass('column align');
        var align3 = $('<div>').addClass('column align');
        var align4 = $('<div>').addClass('column align');
        var airlineName = $('<p>').addClass('bd-notification is-info searchBox airName');
        var mobile = $('<div>').addClass('columns is-mobile');
        var mobile2 = $('<div>').addClass('columns is-mobile');
        var mobile3 = $('<div>').addClass('columns is-mobile');
        var mobile4 = $('<div>').addClass('columns is-mobile');
        var mobile5 = $('<div>').addClass('columns is-mobile');
        var column = $('<div>').addClass('column');
        var column2 = $('<div>').addClass('column');
        var column3 = $('<div>').addClass('column');
        var destination = $('<p>').addClass('bd-notification is-info searchBox dest');
        var price = $('<p>').addClass('bd-notification is-info searchBox price');
        var leaveDate = $('<p>').addClass('bd-notification is-info searchBox leaveDate');
        var returnDate = $('<p>').addClass('bd-notification is-info searchBox returnDate');
        var departingAP = $('<p>').addClass('bd-notification is-info searchBox');
        var arrivingAP = $('<p>').addClass('bd-notification is-info searchBox');
        var numOfFlights = 1;

        $('#container').append(columns);
        columns.append(align);
        align.append(airlineName);
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
        column2.append(returnDate);
        columns.append(align4);
        align4.append(departingAP);
        align4.append(mobile5);
        mobile5.append(column3);
        column3.append(arrivingAP);
       
        //origin to destination
        departingAP.text("Depart from: " + (returningDest.Places[0].Name));
        arrivingAP.text("Arrive at: " + (goingDest.Places[1].Name));
        destination.text((returningDest.Places[0].CityName) + " ⇄ " + (goingDest.Places[1].CityName));
        airlineName.text((goingDest.Carriers[i].Name) + "/" + (returningDest.Carriers[0].Name));
        price.text("$" + ((goingDest.Quotes[i].MinPrice)+returningDest.Quotes[0].MinPrice));
        leaveDate.text((goingDest.Quotes[i].OutboundLeg.DepartureDate.replace(/T[\d:]+$/,"")) + " → " + (returningDest.Quotes[0].OutboundLeg.DepartureDate.replace(/T[\d:]+$/,"")));
        returnDate.text("round-trip")
       
    }
}

$('.hotels-btn').on('click', function() {
    var departDate = $(".departingDate").val();
    localStorage.setItem('departingDate', departDate);

    var returnDate = $(".returningDate").val();
    localStorage.setItem('returningDate', returnDate);

    var partySize = $(".party").val();
    localStorage.setItem('party', partySize);
    
    window.location.assign('./hotel.html');
});


pullData(api, returnApi);