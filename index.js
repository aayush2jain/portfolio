// Words to be typed
const wordsToType = ["web_developer", "front-end_developer","backend_developer"];

// Speed of typing in milliseconds
const typingSpeed = 150;// Adjust as needed

// Element to display typing text
const typingElement = document.getElementById('typing-text');

// Function to simulate typing animation
function typeText(words, index) {
  const currentWord = words[index % words.length];
  typingElement.textContent = currentWord.substring(0, typingElement.textContent.length + 1);
  if (typingElement.textContent === currentWord) {
    setTimeout(function() {
      deleteText(currentWord.length, index);
    }, 100); // Pause before deleting the word
    return;
  }
  setTimeout(function() {
    typeText(words, index);
  }, typingSpeed);
}

// Function to delete typed text
function deleteText(length, index) {
  typingElement.textContent = typingElement.textContent.substring(0, typingElement.textContent.length - 1);
  if (typingElement.textContent === '') {
    setTimeout(function() {
      typeText(wordsToType, index + 1);
    }, 100); // Pause before typing the next word
    return;
  }
  setTimeout(function() {
    deleteText(length, index);
  }, typingSpeed);
}

// Start typing animation
typeText(wordsToType, 0);
let a;
const words=["Hii,It's Me","Aayush_Jain","and You?",`hii`,"Nice to meet you","well,how can i help you?","umm,I guess you wannna know about me","right?","here you go!","Hope,you find me interesting","well feeling great to meet you"];
var button = document.getElementById("about");
var index=0;
const delay = 50; // Delay between each character in milliseconds
const typingEffect = document.getElementById("comment");
function typeWriter(text, index) {
    if (index < text.length) {
        typingEffect.innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(text, index + 1), delay);
    }
}
button.addEventListener("click", function() {
    var a;
     var word=words[index];
    typingEffect.innerHTML="";
    
    if(index==10){
        index--
    }
    setTimeout(()=>{
      if(word=="and You?")
      {
     a=prompt("enter your name");
     if(a==null){
      a='friend';
     }
     words[3]="hii "+a;
      }
    },1000);
    if(index==8){
    let hello=document.getElementById("a");
    hello.style.display="inline";
    }
    typeWriter(word, 0);
    index++;
});
// function findIndexInArray(arr, element) {
//     // Using indexOf method to find the index of the element
//     var index = arr.indexOf(element);

//     // If index is greater than or equal to 0, it means the element exists in the array
//     if (index >= 0) {
//         return index; // Return the index of the element
//     } else {
//         return -1; // Return -1 if the element does not exist in the array
//     }
// }
// const ids=["home","about","project","skill","contact"];
// function getDivIDOnHover(event) {
//   var hoveredDiv = event.target;
//   var divID = hoveredDiv.id;
//   if(divID==""){
//     // var divparent=hoveredDiv.parentNode;
//     //  divID=hoveredDiv.parentNode.id;
//     //  var index = findIndexInArray(ids,divID);
//     //  if(index==-1){
//     //    var ID=divparent.parentNode.id;
//     //    divID=ID;
//     //    console.log("Hovered Div ID:", divID);
//     //  }
//     //  else{
//     //    console.log("Hovered Div ID:", divID);
//     //  }
//   }
//   else{
//     var index = findIndexInArray(ids,divID);
//     if(index==-1)
//     {
//     var divparent=hoveredDiv.parentNode;
//      divID=hoveredDiv.parentNode.id;
//      var index = findIndexInArray(ids,divID);
//      if(index==-1){
//        var ID=divparent.parentNode.id;
//        divID=ID;
//        divparent=divparent.parentNode;
//        var index = findIndexInArray(ids,divID);
//        if(index==-1){
//         var ID=divparent.parentNode.id;
//         divID=ID;
//         // console.log("Hovered Div ID:", divID);
//        }
//        else{
//         // console.log("Hovered Div ID:", divID);
//        }
       
//      }
//      else{
//       //  console.log("Hovered Div ID:", divID);
//      }
//     }
    
//       console.log("Hovered Div ID:", divID,"index",index);
//       // window.addEventListener('scroll', handleScroll(index));
//   }
  
// }
// var divs = document.querySelectorAll('div');
// divs.forEach(function(div) {
//   div.addEventListener('mouseover', getDivIDOnHover);
// });
// // Function to handle scroll events
// function handleScroll(event) {
//     var currentScrollPos = window.scrollY; // Get the current scroll position

//     // Check if the current scroll position is greater than the last scroll position
//     if (currentScrollPos > handleScroll.lastScrollPos || currentScrollPos === 0) {
//         // Scrolling down or at the top
//         console.log("Scrolling down or at the top");
//         event--;
//     } else {
//         // Scrolling up
//         console.log("Scrolling up");
//         event++;
//     }

//     // Update the last scroll position
//     handleScroll.lastScrollPos = currentScrollPos;
//     // Construct the URL with the hash fragment pointing to the id of the div
//     var targetUrl = window.location.href.split('#')[0] + '#'+ids[event];
    
//     // Redirect the page to the constructed URL
//     window.location.href = targetUrl;
// }

// // Initialize the last scroll position
// handleScroll.lastScrollPos = window.scrollY;

// // Add scroll event listener
var aboutc=document.getElementById('aboutc');
var about=document.getElementById('about');
var projectc=document.getElementById('projectc');
var project=document.getElementById('project');
var skillc=document.getElementById('skillc');
var skill=document.getElementById('skill');
var home=document.getElementById('home');
var homec=document.getElementById('homec');


project.addEventListener('mouseover',()=>{
  skillc.style.display="none";
   homec.style.display="none";
   aboutc.style.display="none";
  projectc.style.display="inline";
});
skill.addEventListener('mouseover',async ()=>{
  projectc.style.display="none";
  aboutc.style.display="none";
   homec.style.display="none";
  skillc.style.display="inline";
});
about.addEventListener('mouseover',async ()=>{
  projectc.style.display="none";
  skillc.style.display="none";
   homec.style.display="none";
  aboutc.style.display="inline";
  
});
home.addEventListener('mouseover',async ()=>{
  projectc.style.display="none";
  skillc.style.display="none";
  aboutc.style.display="none";
  homec.style.display="inline"
});