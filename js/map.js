"use strict";
//Map location function//////////////////
let findButton=document.querySelector(`#find-button`);


findButton.addEventListener(`click`, function(){

    let locationInput=document.getElementById(`location-input`);

    let city = document.querySelector("#location-input").value;

    console.log(locationInput.value, 'this is input value')
    geocode(locationInput.value, keys.mapbox).then(function(result){
        map.setCenter(result);
        map.setZoom(9);
        new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map);
    });

    console.log(city, "this is city var")
    let html = '';
    $.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+keys.weather+"",
        {
            units: 'imperial'
        }).done(function(data) {
        for (let i = 0; i < data.list.length; i += 8) {
            console.log(data.list[i], 'this is data.list');
            let temp = data.list[i];
            console.log(data.list[i].main.temp, 'this is data.list');
            console.log(temp)
            console.log(data, 'this is temp');
            html += `<div class="row2">
    <div>${data.list[i].dt_txt} <br><hr></div>
    <div>temp: ${data.list[i].main.temp}<br><hr></div>
    <div>Description: Cloudy <br> Humidity: ${data.list[i].main.humidity} <br><hr></div>
     <div>Wind: ${data.list[i].wind.speed} <br><hr></div>
    <div>Pressure: ${data.list[i].main.pressure}</div>
    </div>`;
        }
        $(`#card`).html(html);
    }).fail(function(jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    });

    let htm='';
    htm += `<div id="city-log"> <h3> Current city: ${city}</h3> </div>`;
    $(`#city-log`).html(htm);


});

