    $(document).ready(function () {
        // to request data from openweather.org
        $('#submitWeather').click(function () {

            var city = $("#city").val();
            if (city != '') {

                $.ajax({

                    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=de0beaf5a28fc57eed081e333502c625",

                    //https://samples.openweathermap.org/data/2.5/weather?zip=
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

    });

    //return data for weather temp, humidity, wind, uv index

    function show(data) {
        return "<h2>Current Weather for " + data.name + "," + data.sys.country + "</h2>" +

            "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" +
            "<h3><strong>Pressure</strong>: " + data.main.pressure + "</h3>" +
            "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
            "<h3><strong>Min Temperature</strong>: " + data.main.temp_min + "</h3>" +
            "<h3><strong>Max Temperature</strong>: " + data.main.temp_max + "</h3>" +
            "<h3><strong>Wind speed</strong>: " + data.wind.speed + "</h3>";

    }