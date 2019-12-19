$(document).ready(function () {
    // to request data from openweather.org
    $('#submitWeather').click(function () {

        var city = $("#city").val();
        if (city != '') {

            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city +
                    "&units=imperial" + "&appid=de0beaf5a28fc57eed081e333502c625",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    console.log(data);
                    var widget = show(data);

                    $("#show").html(widget);

                    $("#city").val();
                    show()
                }
            });

        } else {
            $("#error").html('Field cannot be empty');
        }
    });



    //return data current for weather temp, humidity, wind, uv index

    function show(data) {
        return "<h2>Current Weather for " + data.name + "," + data.sys.country + "</h2>" +
            "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" +
            "<h3><strong>Pressure</strong>: " + data.main.pressure + "</h3>" +
            "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
            "<h3><strong>Min Temperature</strong>: " + data.main.temp_min + "</h3>" +
            "<h3><strong>Max Temperature</strong>: " + data.main.temp_max + "</h3>" +
            "<h3><strong>Wind speed</strong>: " + data.wind.speed + "</h3>";


    }
  


    /* five day*/
    $('#submitFiveDay').click(function () {

        var fiveDay = $("#fiveDayCity").val();
        //console.log(fiveDay);
        if (fiveDay != '') {
            console.log('insidediv')
            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + fiveDay +
                    "&units=imperial" + "&appid=de0beaf5a28fc57eed081e333502c625",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    console.log(data);
                    var widget = fiveShow(data);

                    $("#fiveDay").html(widget);

                    $("#fiveDayCity").val();
                    fiveShow()
                }
            });

        } else {
            $("#error").html('Field cannot be empty');
        }
    });


    //return data for weather temp, humidity, wind, uv index

    function fiveShow(data) {
        return "<h2>Current Weather for " + data.city.name + "," + data.city.country + "</h2>" +
            "<h3><strong>Day 1</strong>:" + data.list[0].dt_txt + " </h3>" +
            "<h3><strong>Temperature</strong>: " + data.list[0].main.temp + "</h3>" +
            "<h3><strong>Pressure</strong>: " + data.list[0].main.pressure + "</h3>" +
            "<h3><strong>Humidity</strong>: " + data.list[0].main.humidity + "</h3>" +
            "<h3><strong>Min Temperature</strong>: " + data.list[0].main.temp_min + "</h3>" +
            "<h3><strong>Max Temperature</strong>: " + data.list[0].main.temp_max + "</h3>" +
            "<h3><strong>Wind speed</strong>: " + data.list[0].wind.speed + "</h3>" +

            //Day2
           
            "<h3><strong>Day 2</strong>:" + data.list[6].dt_txt + " </h3>" +
            "<h3><strong>Temperature</strong>: " + data.list[6].main.temp + "</h3>" +
            "<h3><strong>Pressure</strong>: " + data.list[6].main.pressure + "</h3>" +
            "<h3><strong>Humidity</strong>: " + data.list[6].main.humidity + "</h3>" +
            "<h3><strong>Min Temperature</strong>: " + data.list[6].main.temp_min + "</h3>" +
            "<h3><strong>Max Temperature</strong>: " + data.list[6].main.temp_max + "</h3>" +
            "<h3><strong>Wind speed</strong>: " + data.list[6].wind.speed + "</h3>"+
            
            //Day3

            
            "<h3><strong>Day 3</strong>:" + data.list[14].dt_txt + " </h3>" +
            "<h3><strong>Temperature</strong>: " + data.list[14].main.temp + "</h3>" +
            "<h3><strong>Pressure</strong>: " + data.list[14].main.pressure + "</h3>" +
            "<h3><strong>Humidity</strong>: " + data.list[14].main.humidity + "</h3>" +
            "<h3><strong>Min Temperature</strong>: " + data.list[14].main.temp_min + "</h3>" +
            "<h3><strong>Max Temperature</strong>: " + data.list[14].main.temp_max + "</h3>" +
            "<h3><strong>Wind speed</strong>: " + data.list[14].wind.speed + "</h3>" +
  
             //Day 4
             "<h3><strong>Day 4</strong>:" + data.list[22].dt_txt + " </h3>" +
             "<h3><strong>Temperature</strong>: " + data.list[22].main.temp + "</h3>" +
             "<h3><strong>Pressure</strong>: " + data.list[22].main.pressure + "</h3>" +
             "<h3><strong>Humidity</strong>: " + data.list[22].main.humidity + "</h3>" +
             "<h3><strong>Min Temperature</strong>: " + data.list[22].main.temp_min + "</h3>" +
             "<h3><strong>Max Temperature</strong>: " + data.list[22].main.temp_max + "</h3>" +
             "<h3><strong>Wind speed</strong>: " + data.list[22].wind.speed + "</h3>"+
             
             //Day 5
             "<h3><strong>Day 5</strong>:" + data.list[38].dt_txt + " </h3>" +
             "<h3><strong>Temperature</strong>: " + data.list[38].main.temp + "</h3>" +
             "<h3><strong>Pressure</strong>: " + data.list[38].main.pressure + "</h3>" +
             "<h3><strong>Humidity</strong>: " + data.list[38].main.humidity + "</h3>" +
             "<h3><strong>Min Temperature</strong>: " + data.list[38].main.temp_min + "</h3>" +
             "<h3><strong>Max Temperature</strong>: " + data.list[38].main.temp_max + "</h3>" +
             "<h3><strong>Wind speed</strong>: " + data.list[38].wind.speed + "</h3>"
        }
 });