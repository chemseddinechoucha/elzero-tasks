let findMissingLetterIn = (text)=>{
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let firstLetter = text[0];
    let lastLetter = text[text.length-1];
    let extractedString = alphabet.substring(alphabet.indexOf(firstLetter),alphabet.indexOf(lastLetter));
   return extractedString.split('').filter((val,i)=>{return val != text.charAt(i);}).join('') || 'No Missing Letter In Sequence';
}
let missingLetter = findMissingLetterIn('defgi');
console.log(missingLetter);