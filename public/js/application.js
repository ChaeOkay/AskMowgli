$(document).ready(function() {

  $(form).on('focusout', function(){
    var data = $(#form[name='name']).val();

    $.post('/responses', data, function(saveStatus){
      if (saveStatus == 'true'){
        //append something after some elevement in questions show
      } else {

      };

    });
  });

});
