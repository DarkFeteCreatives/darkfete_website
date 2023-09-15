
  paypal.Buttons({
      createOrder: function(data, actions) {
          // Set up the transaction
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: '10.00'  // Change this to the actual amount or dynamically set it based on cart
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
          // Capture the funds from the transaction
          return actions.order.capture().then(function(details) {
              // Show a success message to your buyer
              alert('Transaction completed by ' + details.payer.name.given_name);
              // Optional: Redirect the buyer to a thank-you page
              window.location.href = "https://www.yoursite.com/thankyou";
          });
      }
  }).render('#paypal-button-container');
