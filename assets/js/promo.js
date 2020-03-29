document.getElementById("apply").addEventListener(
  "click",
  function(event) {
    if (document.getElementById("promo").value.toUpperCase() === "MBFIVE") {
      sendMessage("Discount applied: $5/month");
      document
        .getElementById("signup")
        .setAttribute("action", "/checkout/discount");
    } else {
      sendMessage("Sorry, that code is not valid");
      document.getElementById("signup").setAttribute("action", "/checkout");
    }
  },
  false
);

document.getElementById("open-promo").addEventListener(
  "click",
  function(event) {
    document.getElementById("promo-one").style.display = "none";
    document.getElementById("promo-two").style.display = "block";
  },
  false
);

function sendMessage(message) {
  document.getElementById("message").innerText = message;
}
