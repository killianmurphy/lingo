
var checkWoord = document.getElementById("checkWoord");
var button = document.getElementById("buttonCheck");
button.setAttribute("onclick", "checkWord(word)");

function checkWord(){
	raadWord = "tafel";
 raadWord = raadWord.value.split("");
 checkWoord = checkWoord.split("");
 console.log(raadWord);
 console.log(checkWoord);
for (var i=0; i<raadWord.length; i++){
      if(checkWoord[i] == raadWord[i]){
 	    document.getElementById("letter_" + (i+1)).
 	    innerHTML = raadWord[i];
 	    document.getElementById("letter_" + (i+1)).style.
 	    backgroundColor = "green";
 	    raadWord[i] = "*";

    }
  }
   console.log(raadWord);
}





























// var word = document.getElementById("word");

// var letter = document.getElementById("letter");

// var button = document.getElementById("buttonCheck");
// button.setAttribute("onclick", "checkWord(word)");

// function checkWord(event){
//  var letters = event.value.split("");
//  console.log(letters);
// for (var i=0; i<letters.length; i++){
//       if(letter.value == letters[i]){
//  	    document.getElementById("letter_" + (i+1)).innerHTML =
//  	    letters[i];

//     }
//   }
// }

