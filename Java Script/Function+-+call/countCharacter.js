let str = `Hello How Are You`;
console.log(countCharacter(str))

function countCharacter(str){

    let ch = ('o');
    let count = str.split(ch).length - 1;
    return count;
}

