// validates presence of 
// user: username, email, password
// survey: name
// question: question_type, description, prompt
// replies: value
// responsechoices: value

$(document).ready(function() {

  // $('form').on('focusout', function(){
  //   var data = {'value' : $('.reply-field').val()};
  //   $.post('/replies', data, function(saveStatus){
  //     if (saveStatus == 'true'){
  //       //append something after some elevement in questions show
  //     } else { 

  //     };
  //   });
  // });

  // //set up event handlers for ajax forms
  // $('#new-survey-link').on('click', function(e){
  //   e.preventDefault();
  //   var partial = $.get('/surveys/new', function(data){
  //     $('#modalContainer').html(data);
  //     $('#modalContainer').foundation('reveal', 'open');
  //   });
  // });

  // $('#new-question-link').on('click', function(e){
  //   e.preventDefault();
  //   var partial = $.get('/questions/new', function(data){
  //     $('#modalContainer').html(data);
  //     $('#modalContainer').foundation('reveal', 'open');
  //   });
  // });

  $('form').submit(function(event){
    var error = false;
    $(this).find("[type=text]").each(function(){
      if (!$(this).val().length) {
        alert("Textboxes must have a value!");
        $(this).focus();
        error = true;
        return false; //Only exits the 'each' loop
      }
    });
  if (error) {
    event.preventDefault();
  }
  });
});