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

<!-- <div class="new-reply">
  <form data-abide action='/replies' method='post'>
    <label for='reply[value]'>Reply:</label>
    <input class="reply-field" name='reply[value]' type ='text' placeholder='Enter text here...' />
  </form>
</div>
 -->


<div class="new-reply">
  <form action='/replies' method='post'>
    <label for='reply[value]'>Reply:</label>
    <input class="reply-field" name='reply[value]' type ='text' placeholder='Enter text here...' />
  </form>
</div>

<!-- <form data-abide>
  <div class="name-field">
    <label>Your name <small>required</small></label>
    <input type="text" required pattern="[a-zA-Z]+">
    <small class="error">Name is required and must be a string.</small>
  </div>
  <div class="email-field">
    <label>Email <small>required</small></label>
    <input type="email" required>
    <small class="error">An email address is required.</small>
  </div>
  <button type="submit">Submit</button>
</form> -->
