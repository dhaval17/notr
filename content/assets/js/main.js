//Main JS File

$( document ).ready(function() {
	
	listdata();
});

function savenote() {
	var what = $("#what")[0].value;
	var data = $("#data")[0].value;
	
	//Clear Box
	$("#what")[0].value = "";
	$("#data")[0].value = "";
	
	localStorage.setItem($.now(), JSON.stringify({"what" : what, "data": data}));
	$('#notrtable tr:first').after('<tr><td>' + what + '</td><td>' + data + '</td></tr>');
	notify();
	return;
}

function listdata() {
	//$('#notrtable tr:last').after('<tr><td>lol</td><td>abcd</td></tr>');
	var temp;
	for (var i = 0; i <  localStorage.length ; i++){
    	// do something with localStorage.getItem(localStorage.key(i));
    	
    	//console.log(localStorage.getItem(localStorage.key(i)));
    	temp = localStorage.getItem(localStorage.key(i));
    	console.log(temp);
    	temp = JSON.parse(temp);
    	$('#notrtable tr:last').after('<tr><td>' + temp.what + '</td><td>' + temp.data + '</td></tr>');
    	
	}
	
}
$( "#savenotebtn" ).click(function(event){
	savenote();
    event.preventDefault();
});