console.log("loaded");
var form = $("<form>").attr({"class":"filterform","action":"#"}),
input = $("<input>").attr({"class":"filterinput","type":"text","placeholder":"Search Customers"});
$(form).append(input).appendTo(nameList);
console.log("appended");


$("html").on("click", ".filterinput", function() {
	(function ($) {
		// custom css expression for a case-insensitive contains()
		jQuery.expr[':'].Contains = function(a,i,m){
		  return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
		};


		function listFilter(nameList, list) { // nameList is any element, list is an unordered list
			// create and add the filter form to the nameList
			// var form = $("<form>").attr({"class":"filterform","action":"#"}),
			//     input = $("<input>").attr({"class":"filterinput","type":"text"});
			// $(form).append(input).appendTo(nameList);


			$(input)
				.change( function () {
					var filter = $(this).val()
					console.log(filter);;
					if(filter) {
						// this finds all links in a list that contain the input,
						// and hide the ones not containing the input while showing the ones that do
						$(listItems).find("a:not(:Contains(" + filter + "))").parent().slideUp();
						$(listItems).find("a:Contains(" + filter + ")").parent().slideDown();
						console.log("change");
					} else {
					  	$(listItems).find("li").slideDown();
					  	console.log("change");
					}
					return false;
					console.log("change");
				})
				.keyup( function () {
			    	// fire the above change event after every letter
			    	$(this).change();
			    	console.log("KEYUP");
			    	searchTrigger();
				});

		}

	  	$(function () {
	    	listFilter($("#nameList"), $("#list"));
	  	});
	}(jQuery));
});