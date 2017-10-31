
     //Menu Bar
$(".dropdown-menu").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});

$(".homeLink").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});

//Twitch TV
$(document).ready(function() {
    
    function init() {
        for(var l = 0; l < 10; l++) {
            $("#row" + l).show();
        }
        $("#online").removeClass("active");
        $("#all").addClass("active");
        $("#offline").removeClass("active");
        $("#searchButton").removeClass("active");
    }
    
    var channelArr = ["ESL_SC2", "ogamingsc2", "cretetion", "freecodecamp", "storbeck", "habathcx", "robotcaleb", "noobs2ninjas", "brunofin", "comster404"];
    var urlStatus = "https://wind-bow.glitch.me/twitch-api/channels/";
    var urlStream = "https://wind-bow.glitch.me/twitch-api/streams/";
    
    for(var i = 0; i < channelArr.length; i++) {
                    $.getJSON(urlStream + channelArr[i], function(data) {
                        if(data.stream !== null) {
                            switch (data.stream.channel.name) {
                                case "esl_sc2":
                                    $("#channel0").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;

                                case "ogamingsc2":
                                    $("#channel1").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;

                                case "cretetion":
                                    $("#channel2").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;

                                case "freecodecamp":
                                    $("#channel3").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;

                                case "storbeck":
                                    $("#channel4").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;

                                case "habathcx":
                                    $("#channel5").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;

                                case "robotcaleb":
                                    $("#channel6").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;

                                case "noobs2ninjas":
                                    $("#channel7").html(data.stream.game + ": " + data.stream.channel.status);
                                    break;  
                            }  
                        } 
                    });
                }
                
                for(var k = 0; k < channelArr.length; k++) {
                    if(!$("#channel"+k).val()) {
                       $("#channel"+k).html("Offline");
                    }
                }
    
    for(var j = 0; j < channelArr.length; j++) {
        $.getJSON(urlStatus + channelArr[j], function(data) {
            if(data.status === 404) {
                switch (data.message) {
                    case "Unable to find channel for login \"esl_sc2\"":
                        $("#channel0").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"ogamingSsc2\"":
                        $("#channel1").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"cretetion\"":
                        $("#channel2").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"freecodecamp\"":
                        $("#channel3").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"storbeck\"":
                        $("#channel4").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"habathcx\"":
                        $("#channel5").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"robotcaleb\"":
                        $("#channel6").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"noobs2ninjas\"":
                        $("#channel7").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"brunofin\"":
                        $("#channel8").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                        
                    case "Unable to find channel for login \"comster404\"":
                        $("#channel9").html("Offline: This Twitch account is closed or it has never existed");
                        break;
                }
            }

        });
    }
     
//Buttons to show online & offline channels
    
    //ONLINE
    $("#online").click(function() {
        var x = "Offline: This Twitch account is closed or it has never existed";
        for(var m = 0; m < 10; m++) {
            if($("#channel" + m).text() === x || $("#channel" + m).text() === "Offline") {
                $("#row" + m).hide();
            } else {
                $("#row" + m).show();
            }
        }
        $("#online").addClass("active");
        $("#all").removeClass("active");
        $("#offline").removeClass("active");
        $("#searchButton").removeClass("active");
    });
    
    //Init with ALL
    $("#all").click(function() {
        init();
    });
     
    //OFFLINE
    document.querySelector("#offline").addEventListener("click", function() {
         var y = "Offline: This Twitch account is closed or it has never existed";
        for(var n = 0; n < 10; n++) {
            if(document.querySelector("#channel" + n).textContent === y || document.querySelector("#channel" + n).textContent === "Offline") {
                $("#row" + n).show();
            } else {
                $("#row" + n).hide();
            }
        }
        $("#online").removeClass("active");
        $("#all").removeClass("active");
        $("#offline").addClass("active");
        $("#searchButton").removeClass("active");
    });
    
//Search for a channel
    $("#searchButton").click(function() {
        
        if($("#search").val()) {
            var toLowerCase = $("#search").val().toLowerCase();
            for(var p = 0; p < channelArr.length; p++){
                $("#row" + p).hide();
            }
            
            switch (toLowerCase) {
                case "esl_sc2":
                    $("#row0").show();
                    break;
                    
                case "ogamingsc2":
                    $("#row1").show();
                    break;
                    
                case "cretetion":
                    $("#row2").show();
                    break;
                    
                case "freecodecamp":
                    $("#row3").show();
                    break;
                    
                case "storbeck":
                    $("#row4").show();
                    break;
                    
                case "habathcx":
                    $("#row5").show();
                    break;
                    
                case "robotcaleb":
                    $("#row6").show();
                    break;
                    
                case "noobs2ninjas":
                    $("#row7").show();
                    break;
                    
                case "brunofin":
                    $("#row8").show();
                    break;
                    
                case "comster404":
                    $("#row9").show();
                    break;
                    
                default:
                    alert("CHANNEL NOT FOUND!");
                    init();
            }
            $("#online").removeClass("active");
            $("#all").removeClass("active");
            $("#offline").removeClass("active");
            $("#searchButton").addClass("active");
            
        } else {
            alert("PLEASE TYPE A CHANNEL TO SEARCH");
        }
    });
    
});

