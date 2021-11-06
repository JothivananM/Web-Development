function stringReverse(str){
    let revString = "";
    for(let i = str.length - 1; i>= 0; i--){
        revString += str[i];
    }
    return revString;
}

const str = "Hello";
console.log(stringReverse(str));