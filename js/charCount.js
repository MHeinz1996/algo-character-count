exports.charCount = function(param) {
    let myObj = {};
    let char = param.split('');

    // Loops through each letter in string if it isn't a space
    for(let i=0; i<char.length; i++) {
        if(char[i] != ' ') {
            if(char[i] in myObj) {
                myObj[char[i]]+=1;
            } else {
                myObj[char[i]] = 1;
            }
        }
    }

    let finalCount = []

    // Orders myObj alphabetically by key
    let sorted = Object.keys(myObj).sort().reduce(
        (obj, key) => { 
          obj[key] = myObj[key]; 
          return obj;
        }, 
        {}
      );

    // Pushes key-value pairs into an array of key-value pairs
    for(let prop in sorted){
        // console.log(`${prop} : ${myObj[prop]}`);
        finalCount.push([prop, sorted[prop]]);
    }

    // Sorts array by value descendingly
    let orderedCount = finalCount.slice().sort(function(a,b){
        if(a[1] > b[1]) {return -1};
        if(a[1] < b[1]) {return 1};
        if(a[1] == b[1]) {return 0};
        });

    return orderedCount;
};