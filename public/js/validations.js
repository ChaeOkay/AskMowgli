validationFunction = function() {
  $('body').find('form').submit(function(event){
  var error = false;
  $(this).find("[type=text], [type=password], [type=email]").each(function(){
    if (!$(this).val().length) {
      alert("Field cannot be blank");
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