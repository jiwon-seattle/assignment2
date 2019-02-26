$(document).ready(function(){
  $("form#vacation").submit(function(event) {
  var company = $("select#company").val();
  var solo = $("select#solo").val();

  var dob = $("#time").val();

  if (company === 'Yes') {
    $("#alone").toggle();
    $("#group").hide()
    if (solo === "relax") {
      $("suggestion1").show();
    }
  } else {(company === 'No')
    $("label#group").toggle();
    $("#solo").hide();
  }



  event.preventDefault();
});
});
