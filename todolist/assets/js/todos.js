//listnening for the existing element(ul)when the page loads but we are really listnening to the li's 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//event bubbling,
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function() {
    // Animation complete.
    $(this).remove();
  });
	event.stopPropagation();//stops,bubbling-->propogationg to parent element
});

//click() only adds for existing elements whereas on() adds listner for all potential future elements
$("input[type= 'text']").on("keypress", function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todotext + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type= 'text']").fadeToggle();
})
