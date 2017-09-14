// check off specific todos by clicking
$("ul").on("click", 'li',  function(){
  $(this).toggleClass("completed");
})

//click on X to delete to do
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() { //refers to li
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
  if(event.charCode === 13) {
    //grab user input
    var input = $(this).val();
    $(this).val('');
    //create a new li add to html
    $("ul").append(`<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ${input}</li>`);
  }
})

$(".fa-plus-circle").on("click", function() {
  $("input[type='text']").fadeToggle(); 
})
