

"use strict";
var input = document.querySelectorAll('textarea')[0],
  charCount = document.querySelector('#charCount'),
  wordCount = document.querySelector('#wordCount'),
  rem=document.querySelector('#rem');

input.addEventListener('keyup', function() {


  console.clear();

  charCount.innerHTML = input.value.length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);

  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  if(wordCount.innerHTML < 250)
  {
   rem.innerHTML=250-wordCount.innerHTML + " words to go !";
  }
  else {
    rem.innerHTML="You are done with the limit !"
  }
  });
