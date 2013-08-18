validationFunction = function() {
  $('body').find('form').submit(function(event){
  var error = false;
  $(this).find("[type=text]").each(function(){
    if (!$(this).val().length) {
      alert("YOU SUCK!");
      $(this).focus();
      error = true;
      return false; //Only exits the 'each' loop
    }
  });
  if (error) {
    // alert that field can't be blank
    event.preventDefault();
    console.log("field was blank");
  }
  });
};

$(document).ready(function(){
  validationFunction();
});