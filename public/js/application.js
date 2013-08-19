$(document).ready(function() {

	//set up event handlers for ajax forms
	$('#new-survey-link').on('click', function(e){
		e.preventDefault();
		var partial = $.get('/surveys/new', function(data){
			$('#modalContainer').html(data);
			$('#modalContainer').foundation('reveal', 'open');
		});
	});


  $('#new-question-link').on('click', function(e){
    e.preventDefault();
    var partial = $.get($('#new-question-link').attr('href'), function(data){
      $('#modalContainer').html(data);
      $('#modalContainer').foundation('reveal', 'open');
    });
  });

  $('.reply-container').each( function(index, value){
    var questionId = $(this).attr('id');
    $.get('/questions/'+questionId+'/replies/find_or_create', function(data){
      $('#'+questionId).html(data);
    });
  });

  $('form.reply-form').find('input').on('keypress', function(e){
    if ( e.which == 13 ) // Enter key = keycode 13
    {
        e.preventDefault();
        $('form.reply-form input').next().focus();
    }
    return false;
  });

  $('.show-questions').on('focusout', 'input.reply-field', function(e){
    if ( $(this).val() != '' )
    {
      var userId = $(this).parent().children('input[name="reply[user_id]"]').val();
      var questionId = $(this).parent().children('input[name="reply[question_id]"]').val();
      var replyValue = $(this).val();
      var data = { 'reply' : { 'value' : replyValue, 'user_id' : userId, 'question_id' : questionId }};

      $.post('/replies', data, function(saveStatus){
        if (saveStatus != '#false')
          $(saveStatus+' input:first').after('<span><img src="/images/check.png" /> Saved!</span>');
      });  
    }
    else
    {
      console.log('no value in field, so doing nothing')
    }  
  });

});
