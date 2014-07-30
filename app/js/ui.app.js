function clickableRow() {
	$(".clickableRow").click(function() {
		window.document.location = $(this).attr("href");	
	});
}

