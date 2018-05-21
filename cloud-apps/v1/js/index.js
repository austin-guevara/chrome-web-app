window.onload = function() {

	var a = document.getElementById("actionButton");
	
	function navigatePage() {
		var url = document.getElementById("inputURL").value;
		window.open(url,"_self");
	}

	a.onclick = function() {
		navigatePage();
	};
	
	document.addEventListener('keypress', function (e) {
		var key = e.which || e.keyCode;
		if (key === 13) {
				navigatePage();
		}
	});
};