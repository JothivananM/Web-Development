let mySentence = "hello world";
let words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
let text = words.join(" ");
console.log(text);