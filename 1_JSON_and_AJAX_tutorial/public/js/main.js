var container = document.getElementById("info");
var btn = document.getElementById("btn");

function renderHTML(data)
{
	var htmlString = '';

	for(i = 0; i < data.length; i++){
		htmlString = htmlString + data[i].name + ', ' + data[i].home + ', ' + data[i].hobby;
		htmlString = htmlString + '</br>';
	}

	container.insertAdjacentHTML('beforeend', htmlString);
}

btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	//ourRequest.open('GET', '/info');
	ourRequest.open('POST', '/info');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		//console.log(ourData);
		renderHTML(ourData);
	};
	ourRequest.send('table=study');		//	send request to the server
});

