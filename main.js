document.addEventListener("DOMContentLoaded", function() { 


    console.log('this is working');


 const flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
  });

  const subscribeForm = document.getElementById("subscribe-form");

  subscribeForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log('form submit event has been triggered');
    email = document.getElementById("email").value
    if (email.includes("@")) {
	alert("Thanks for subscribing!");
    } else {
	alert("Please enter a valid email.");
    }
  });

});// end of document ready

