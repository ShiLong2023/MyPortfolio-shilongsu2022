var topic = "US History";

var words = ["Abolish","Abolitionist","Ammend","Annex","Antebellum"];
let definitions = ["to do away with; put an end to", "a person who wanted to end slavery", "To alter, Modify, rephrase, or add to or subtract from; to change for the better", "to attach or add to something larger or more important ", "used to describe a period of time before a war, especially the American Civil Wars"];

// create variables here
var index = 0;
var showing = false;
setText("title", topic + " Flashcards");

updateScreen();



function updateScreen() {

  if (words.length > 0) {
    setText("word", words[index].toUpperCase());
    if (showing) {
      setText("definition", definitions[index]);
    } else {
      setText("definition", "");
      //document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg"
    } 

  } else {
    setText("word", "You learned all the words!");
    setText("definition", "");
    //document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg";
  }
  
  displayMessage("Total words to learn: " + words.length);
}

function toggle() {
  if (showing) {
    showing = false;
    setText("toggleBtn", "Show")
  } else {
    showing = true;
    setText("toggleBtn", "Hide")
  }

  updateScreen();
  
}


function nextWord() {
  // write code here
  if(index < words.length - 1){
     index = index + 1;
  }else{
    index = 0;
  }
  updateScreen();
  console.log("nextWord btn clicked!")
}

function previousWord() {
  // write code here
  if(index > 0) {
    index = index - 1;
  }else{
    index = words.length-1;
  }
  updateScreen();
  console.log("previousWord clicked!");
}

function learnedWord() {
  // write code here
  words.splice(index, 1);
  definitions.splice(index, 1);
  images.splice(index, 1);
  nextWord();
  index=0;
  updateScreen();
  console.log("learned word btn clicked!");
}

function displayMessage(msg) {
  setText("message", msg);
}


function getText(id) {
  return document.getElementById(id).value;
}

function setText(id, value) {
   document.getElementById(id).innerHTML = value;
}
