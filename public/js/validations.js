// validates presence of 
// user: username, email, password
// survey: name
// question: question_type, description, prompt
// replies: value
// responsechoices: value


// <!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>submit demo</title>
//   <style>
 
//   p { margin:0; color:blue; }
//   div,p { margin-left:10px; }
//   span { color:red; }
//     </style>
//   <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
// </head>
// <body>
//   <p>Type 'correct' to validate.</p>
//   <form action="javascript:alert('success!');">
//     <div>
//       <input type="text" />
 
//       <input type="submit" />
//     </div>
//   </form>
//   <span></span>
// <script>
 
// $("form").submit(function() {
//   if ($("input:first").val() == "correct") {
//     $("span").text("Validated...").show();
//     return true;
//   }
//   $("span").text("Not valid!").show().fadeOut(1000);
//   return false;
// });
// </script>
 
// </body>
// </html>

// $(document).ready(function() {
  // var validationFunction = $('form').submit(function(event){
  //   var error = false;
  //   $(this).find("[type=text]").each(function(){
  //     if (!$(this).val().length) {
  //       alert("YOU SUCK!");
  //       $(this).focus();
  //       error = true;
  //       return false; //Only exits the 'each' loop
  //     }
  //   });
  // if (error) {
  //   // alert that field can't be blank
  //   event.preventDefault();
  //   console.log("field was blank");
  // }
  // });
// });

  var validationFunction = $('body').find('form').submit(function(event){
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
