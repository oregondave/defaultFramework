classificationTableRow = "<tr class='tableRow'>" + $('.classification.tableRow.hidden').html() + "</tr>";

$(document).on("click", '.delete', function() {
	$(this).parent().remove();
});

// $(document).on("click", '.classification.add', function() {
// 	var appendTxt = classificationTableRow;
// 	$("table.classification tr:last").after(appendTxt);
// });

$('.classification.add').click(function() {
  var appendTxt = classificationTableRow;
  $("table.classification tr:last").after(appendTxt);
});

// $(document).on("click", '.vendor.add', function() {
// 	var appendTxt = vendorTableRow;
// 	$("table.vendor tr:last").after(appendTxt);
// });

// $(function(){
//   var onClass = "on";
//   var showClass = "show";

//   $("input").bind("checkval",function(){
//     var label = $(this).prev("label");
//     if(this.value !== ""){
//       label.addClass(showClass);
//     } else {
//       label.removeClass(showClass);
//     }
//   }).on("keyup",function(){
//     $(this).trigger("checkval");
//   }).on("focus",function(){
//     $(this).prev("label").addClass(onClass);
//   }).on("blur",function(){
//       $(this).prev("label").removeClass(onClass);
//   }).trigger("checkval");
// });