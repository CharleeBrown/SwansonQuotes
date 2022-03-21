function getQuote(){
	let quoteBlock = document.getElementById("quoteBlock");
	fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
	.then(response => response.json())
	.then(data => quoteBlock.innerHTML = data);
	// Show result as JSON
	}