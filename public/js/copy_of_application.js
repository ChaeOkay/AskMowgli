// to do before push:
// survey.rb questions_hist uncomment
// application.js take out validationFunction calls


$(document).ready(function() {



  //set up event handlers for ajax forms
  $('#new-survey-link').on('click', function(e){
    e.preventDefault();
    var partial = $.get('/surveys/new', function(data){
      $('#modalContainer').html(data);
      $('#modalContainer').foundation('reveal', 'open');
      validationFunction(); // delete before push
    });
  });

  $('#new-question-link').on('click', function(e){
    e.preventDefault();
    var partial = $.get($('#new-question-link').attr('href'), function(data){
      $('#modalContainer').html(data);
      $('#modalContainer').foundation('reveal', 'open');
      validationFunction(); // delete before push
    });
  });

  $('form').on('focusout', function(){
    var data = {'value' : $('.reply-field').val()};
    $.post('/replies', data, function(saveStatus){
      if (saveStatus == 'true'){
        //append something after some elevement in questions show
      } else {

      };
    });
  });


});



// $(document).ready(function() {



//   //set up event handlers for ajax forms
//   $('#new-survey-link').on('click', function(e){
//     e.preventDefault();
//     var partial = $.get('/surveys/new', function(data){
//       $('#modalContainer').html(data);
//       $('#modalContainer').foundation('reveal', 'open');
//     });
//   });

//   $('#new-question-link').on('click', function(e){
//     e.preventDefault();
//     var partial = $.get($('#new-question-link').attr('href'), function(data){
//       $('#modalContainer').html(data);
//       $('#modalContainer').foundation('reveal', 'open');
//     });
//   });

//   $('form').on('focusout', function(){
//     var data = {'value' : $('.reply-field').val()};
//     $.post('/replies', data, function(saveStatus){
//       if (saveStatus == 'true'){
//         //append something after some elevement in questions show
//       } else {

//       };
//     });
//   });


// });
