$(document).ready(function(){
    $('#submitWeather').click(function(){

            var city = $("#city").val();
            if (city != ''){

                $.ajax({

                    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city +"&units=metric" + "de0beaf5a28fc57eed081e333502c625",
                    type: "GET",
                    dataType: "jsonp",
                    success: function(data){
                        console.log(data);
                    }

                   
                });

            }else{
                $("#error").html('Field cannot be empty');
            }

    });


});