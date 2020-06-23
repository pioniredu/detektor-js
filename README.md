A short and simple script for detecting if the input text is cyrillic or latin.  
  
It will output strings of ISO codes for the appropriate script ('Cyrl' and 'Latn' for cyrillic and latin respectively).  
  
Just pass it a string and it will output the result.  
  
The test folder contains a simple ava test, you can configure it differently if you wish.  
  
For example:  
``` javascript  
import odredi from '@pionir/detektor-js'; //initializing the package  
console.log(odredi('random string of text')); //output will be Latn  
console.log(odredi('текст текст текст'))// output will be Cyrl  
console.log(odredi('text текст'))/*cyrillic text is more numerous by 1 character,  thus giving an output of Cyrl*/  
```  
you can also check it out on npm: https://www.npmjs.com/package/@pionir/detektor-js