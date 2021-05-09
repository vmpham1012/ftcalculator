

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

 var form = document.getElementById('tradingForm');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function(e) {
  e.preventDefault();
});
var form = document.getElementById('tradingForm');

// Adds a listener for the "submit" event.
form.addEventListener('reset', function(e) {
  $("#result").removeClass("card")
});

  $(function(t) {

    'use strict';
  
    // Form
  
    var contactForm = function() {
  
      if ($('#tradingForm').length > 0 ) {
        $( "#tradingForm" ).validate( {
          rules: {
            stoplost: "required",
            takeprofit: "required",
            targeted: "required",
            balance: "required"
          },
          messages: {
            stoplost: "Please enter stop lost",
            takeprofit: "Please enter take profit",
            targeted: "Please enter targeted %",
            balance: "Please enter account balance"
          },

          submitHandler: function(form) {		
            let values =  $(form).serializeArray();
            values = objectifyForm(values)
            const stoplost = values['stoplost'];
            const takeprofit = values['takeprofit'];
            const targeted = values['targeted'];
            const balance = values['balance'];
            
            const riskpp = (balance * targeted)/stoplost;
            const risk = riskpp * stoplost;
            const reward = riskpp * takeprofit
            const lotsize = riskpp /10;
            $("#piprisk").html(riskpp)
            $("#risk").html(risk)
            $("#reward").html(reward)
            $("#lotsize").html(lotsize)
            $("#result").addClass("card")

            
            }
          
        } );
      }
      return false;
    };
    contactForm();
  
  });

  function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}