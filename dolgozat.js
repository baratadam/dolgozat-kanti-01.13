//1. feladat

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}


//2. feladat

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
 }

//3. feladat

function hasUniqueChars(str){
    var unique = "";
    for(var i = 0; i < str.length; i++){
        if(unique.indexOf(str[i]) == -1){
            unique += str[i];
        } else {
            return false;
        }
    }
    return true;
  }

//4. feladat

function divisors(integer){
    var divs = [];
    for(var i = 2; i < integer; i++){
        if(integer % i == 0){
            divs.push(i);
        }
    }
    if(divs.length == 0){
        return integer + " is prime";
    }
    return divs;
}