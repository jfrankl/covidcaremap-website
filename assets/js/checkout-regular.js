var stripe = Stripe("pk_live_DNtfhqoM1YMdJEMX51GFpK8l00EdPp7E8U");
var regular = "plan_Gf5ZzKRoQkVQtI";
var discount = "plan_GmlFurA9AHXReu";
var pathname = window.location.pathname.split("/");
var promoApplied = pathname[2];

function goToStripe() {
  stripe
    .redirectToCheckout({
      items: [
        { plan: promoApplied === "discount" ? discount : regular, quantity: 1 }
      ],
      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: "https://mapblue.org/success",
      cancelUrl: "https://mapblue.org/start"
    })
    .then(function(result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById("error-message");
        displayError.textContent = result.error.message;
      }
    });
}

goToStripe();
