$(document).ready(function(){
	$("#showBanyak").click(function(){
		$( "div#topDestination4" ).show( "medium");
		$( "div#topDestination5" ).show( "medium" );
		$( "div#topDestination6" ).show( "medium");
		$( "a#showBanyak").hide();

	});
});

function getComboA(sel) {
	var strUser=sel.options[sel.selectedIndex].text;
	document.getElementById('nav-search-in-content').innerHTML = strUser;
}
