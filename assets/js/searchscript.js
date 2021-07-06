var api = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-09-01?inboundpartialdate=2021-12-01",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c2ce6b3c17msh57d6ee9ec7b2e6ap18a777jsnae6af7525db4",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
};

var returnApi = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-09-01?inboundpartialdate=2021-12-01",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c2ce6b3c17msh57d6ee9ec7b2e6ap18a777jsnae6af7525db4",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
};

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
}

function createTickets(goingDest, returningDest) {
    var columns = $('<div>').addClass('columns');
    var align = $('<div>').addClass('column align');
    var align2 = $('<div>').addClass('column align');
    var align3 = $('<div>').addClass('column align');
    var align4 = $('<div>').addClass('column align');
    var airlineName = $('<p>').addClass('bd-notification is-info searchBox');
    var mobile = $('<div>').addClass('columns is-mobile');
    var mobile2 = $('<div>').addClass('columns is-mobile');
    var mobile3 = $('<div>').addClass('columns is-mobile');
    var mobile4 = $('<div>').addClass('columns is-mobile');
    var mobile5 = $('<div>').addClass('columns is-mobile');
    var column = $('<div>').addClass('column');
    var column2 = $('<div>').addClass('column');
    var column3 = $('<div>').addClass('column');
    var destination = $('<p>').addClass('bd-notification is-info searchBox');
    var price = $('<p>').addClass('bd-notification is-info searchBox price');
    var leaveDate = $('<p>').addClass('bd-notification is-info searchBox');
    var returnDate = $('<p>').addClass('bd-notification is-info searchBox');
    var departingAP = $('<p>').addClass('bd-notification is-info searchBox');
    var arrivingAP = $('<p>').addClass('bd-notification is-info searchBox');
    var numOfFlights = 1;
    // goingDest.Carriers.length
    for(var i = 0; i < goingDest.Carriers.length; i++) {
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



    }
}

pullData(api, returnApi);