$(document).ready(function(){

  // BASIC SELECTORS

  // BASIC ANIMATIONS
$(".gallery-img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  // INDEX FILTERS
  // $('p:eq(2)').css('border', '4px solid red');

  // RELATIONSHIP FILTERS
  //$('.box:empty').css('border', '4px solid red');

  // ATTRIBUTE FILTERS
  //$('a[href$=".co.uk"]').css('border', '4px solid red');

});

