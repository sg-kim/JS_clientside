var container = document.getElementById("info");
var btn = document.getElementById("btn");

function renderHTML(data)
{
	var htmlString = "";

	for(i = 0; i < data.length; i++){
		htmlString = htmlString + data['name'] + ', ' + data['hobby'] + ', ' + data['hometown'];
	}

	container.insertAdjacentHTML('beforeend', htmlString);
}

btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', '/info');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.resposeText);
		renderHTML(ourData);
	};
	ourRequest.send();
});

