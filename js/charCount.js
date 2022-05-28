exports.charCount = function(param) {
    let myObj = {};
    let char = param.split('');

    for(let i=0; i<char.length; i++) {
        if(char[i] != ' ') {
            if(char[i] in myObj) {
                myObj[char[i]]+=1;
            } else {
                myObj[char[i]] = 1;
            }
        }
    }

    let final_count = []

    for(let prop in myObj){
        // console.log(`${prop} : ${myObj[prop]}`);
        final_count.push([prop, myObj[prop]])
    }

    return final_count.sort(function(a,b){return b[1] - a[1]});
};

console.log(exports.charCount('an apple a day will keep the doctor away'));