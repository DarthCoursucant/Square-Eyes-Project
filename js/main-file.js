/* MENU CODE */
function openNav() {
    console.log("Opening the nav");
    document.getElementById("mymenu").style.width = "100%";
  }
  
function closeNav() {
    console.log("Closing the nav");
    document.getElementById("mymenu").style.width = "0";
  }

/* END MENU CODE */

/* COLLAPSIBLE */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* END COLLAPSIBLE */

/* ADD TO CART THING */
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + ' added to cart.');
}

/* BUTTON ON BECOME A MEMBER PAGE */
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  // Show an alert
  alert('The Membership Form Delivery Was Succesful. In A Short Tinme You Will Recive A E-mail Fron Us At Square Eyes With A Confirmation That Your Account Was Succcefully Created.');
  // Clear the form fields
  document.getElementById('myForm').reset();
}
