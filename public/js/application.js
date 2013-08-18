$(document).ready(function() {

  $('input').on('focusout', function(){
    var data = { 'value' : $(this).val() };
    $.post('/replies', data, function(saveStatus){
      if (saveStatus == 'true'){
        $(this).after('<img src="/images/check.png" />');
      } else {

      };
    });
  });

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


});
