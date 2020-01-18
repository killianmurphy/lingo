
var words = words [Math.floor(Math.random) * words.length];
var beurt = 0;

var spelbord = document.createElement("div");
spelbord.setAttribute('class', 'spelbord')
document.body.appendChild(spelbord);

for(i=0;i<5;i++){
	var row = document.createElement(div);

	for(j=0;j<5;j++){
		var vakje = document.createElement("h1");
		vakje.setAttribute('id', `rij${i}letter${j}`);
		vakje.setAttribute('class', 'letterbox');
		spelbord.appendChild();
	}
}

var wordArray = word.split('');
var knop = document.createElement('button');
knop.setAttribute('onclick', 'check()');
var inputBox = document.createElement('input');
knop.innerText = 'controleer'
inputBox.setAttribute('type', 'text');
spelbord.appendChild(inputBox);
spelbord.appendChild(knop);

document.getElementById('rij0letter0'.innerText = wordArray[0]);

function check(){ 
	var guess = inputBox.value;
	var guessArray = guess.split('');

	guessArray.forEach(function(value, index){
		if(value == wordArray[index]){
			document.getElementById(rij${beurt}letter${index}.style.backgroundColor = 'green';
			document.getElementById(rij${beurt}letter${index}.innerText = value;
			guessArray[index] = wordArray[index] = null;
		}
	});

	guessArray.forEach(function(value, index){
		if(value != null){
			if(wordArray.indexOf(value) > -1){
				document.getElementById(rij${beurt}letter${index}.style.backgroundColor = "yellow"
				document.getElementById(rij${beurt}letter${index}.innerText = 
				wordArray[wordArray.indexOf(value)] = null;
				guess[index] = null;
			}
		}
	});
}
