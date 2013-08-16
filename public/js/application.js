$(document).ready(function() {
<<<<<<< HEAD

  $(form).on('focusout', function(){
    var data = $(#form[name='name']).val();

    $.post('/responses', data, function(saveStatus){
      if (saveStatus == 'true'){
        //append something after some elevement in questions show
      } else {

      };

    });
  });

=======
	

	//set up event handlers for ajax forms
	$('#new-survey-link').on('click', function(e){
		e.preventDefault();
		var partial = $.get('/surveys/new', function(data){
			$('#modalContainer').html(data);
			$('#modalContainer').foundation('reveal', 'open');
		});
	})
>>>>>>> master
});
