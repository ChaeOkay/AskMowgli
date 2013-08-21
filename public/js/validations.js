/*

	I love seeing front end validations like this, it can 
	really create much smoother user experiences.

	However.. its incredibly important to know it does not replace
	back end validations! So before refactoring or adding more
	to these validations, make sure they reflect your db validations

	I love how this works, but every time you set a boolean
	as false, then check and flag it true later, you are asking
	for some seriuos problems down the line.

	Maybe it could have been implemented something along the lines of:


var onSubmit = function(){
	$('body').find('form').submit(validateForm)
}

var isBlank = function($field){
	return $field.val().length < 1
}

var validateForm = function(event) {
  $(this).find("[type=text], [type=password], [type=email]").each(function(){
    if (isBlank($(this)){
      alert("Field cannot be blank");
      $(this).focus();
    	event.preventDefault();
      return false; //Only exits the 'each' loop
    }
  });
};

$(document).ready(function(){
  validationFunction();
});



*/

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

