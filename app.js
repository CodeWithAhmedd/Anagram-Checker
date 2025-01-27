

let user1 = prompt("Enter the first word:");
let user2 = prompt("Enter the second word:");

let word1 = user1;
let word2 = user2;
if (word1.length == word2.length && (word1.split('').sort().join('') == word2.split('').sort().join('')) ) {
  console.log("The words are anagrams.");
}
else {
    console.log("The words are not anagrams.");
}