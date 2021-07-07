function createTickets() {
    // appends to page
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
    // loops through all pulled data
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
        /*
        *   local storage:
        *   departFrom = airport user flies out of
        *   arrivingAt = airport user flies to
        *   departingDate = date they leave
        *   returningDate = date they return
        *   party = # of ppl
        */
    }
}

createTickets();