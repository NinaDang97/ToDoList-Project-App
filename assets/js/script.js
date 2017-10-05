
$("ul").on("click", "li", function(){
	$(this).toggleClass("cross");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
    	var todoText = $(this).val();
    	$(this).val("");
        $("ul").append("<li><span class='none'><i class='fa fa-trash'></i></span> "  + todoText  + "</li>");
      }
});

$(".appear").on("click", ".fa-minus", function(){
	$("input[type='text']").fadeOut(400);
	$(".fa-minus").remove();
	$(".appear").html("<i class='fa fa-plus'></i>");
});

$(".appear").on("click", ".fa-plus", function(){
	$("input[type='text']").fadeIn(400);
	$(".fa-plus").remove();
	$(".appear").html("<i class='fa fa-minus'></i>")
});