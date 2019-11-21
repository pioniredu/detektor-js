A short and simple script for detecting if the input text is cyrillic or latin.  
  
It will output strings of ISO codes for the appropriate script ('Cyrl' and 'Latn' for cyrillic and latin respectively).  
  
Just pass it a string and it will output the result.  
  
For example:  
``` javascript  
const detektor = require('detektor'); //initializing the package  
console.log(detektor.odredi('random string of text')); //output will be Latn  
console.log(detektor.odredi('текст текст текст'))// output will be Cyrl  
console.log(detektor.odredi('text текст'))/*cyrillic text is more numerous by 1 character,  thus giving an output of Cyrl*/  
```  
  
I've also linked the npm page if you want to get it over there: https://www.npmjs.com/package/detektor  