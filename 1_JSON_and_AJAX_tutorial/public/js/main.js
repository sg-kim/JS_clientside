var container = document.getElementById("info");
var btn = document.getElementById("btn");

function renderHTML(data)
{
	var htmlString = '';

	for(i = 0; i < data.length; i++){
		//htmlString = htmlString + data[i].name + ', ' + data[i].home + ', ' + data[i].hobby;
		htmlString = htmlString + data[i]['name'] + ', ' + data[i]['home'];
		htmlString = htmlString + '</br>';
	}

	container.insertAdjacentHTML('beforeend', htmlString);
}

btn.addEventListener("click", function(){

	var table = 'ajax_tutorial';
	var data = JSON.stringify({'table': table});

	console.log(data);

	var ourRequest = new XMLHttpRequest();
	//ourRequest.open('GET', '/info');
	ourRequest.open('POST', '/info');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		//console.log(ourData);
		renderHTML(ourData);
	};
	ourRequest.setRequestHeader('Content-type', 'application/json');
	ourRequest.send(data);		//	send request to the server
});

