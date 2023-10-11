//25 BEGINNER JAVASCRIPT CHALLENGES

//Challenge1 Even or Odd

function evenOrOdd(number) {
    if(number%2==0){
      return "Even";}
    else{
      return "Odd";
    }
}

//Challenge2 Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
      var m=args[0];
      for(var i=1;i<args.length;i++){
        if(args[i]<m){m=args[i];}
      }
      return m;
    }
}

//Challenge3 Array plus array

function arrayPlusArray(arr1, arr2) {
    var s=0;
    for(var i=0;i<arr1.length;i++){s+=arr1[i];}
    for(var i=0;i<arr2.length;i++){s+=arr2[i];}
    return s; //something went wrong
}

//Challenge4 Return Negative

function makeNegative(num) {
    // Code?
    if(num>0)
    return 0-num;
    else 
      return num;
}

//Challenge5 Sum of positive

function positiveSum(arr) {
    var s=0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]>0){s+=arr[i];}
    }
    return s;
}

//Challenge6 Is n divisible by x and y?

function isDivisible(n, x, y) {
    if(n%x==0&&n%y==0)
      return true;
    else
      return false;
}

//Challenge7 Counting sheep...

function countSheeps(sheep) {
    // TODO
    var n=0;
    for(var i=0;i<sheep.length;i++){
      if(sheep[i]==true){
        n=n+1;
      }
    }
    return n;
}

//Challenge8 Get Planet Name By ID

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
}

//Challenge9 Remove First and Last Character

function removeChar(str){
    //You got this!
     return str.slice(1,-1);
};

//Challenge10  Vowel Count

function getCount(str) {
    var vowel=0;
    for(var i=0;i<str.length;i++){
      if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
        vowel+=1;
      }
    }
    return vowel;
}

//Challenge11 Jenny's secret message

function greet(name){
    if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

//Challenge12 Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  // Code
  switch(operation){
      case '+':return value1+value2;
      case '-':return value1-value2;
      case '*':return value1*value2;
      case "/":return value1/value2;
  }
}

//Challenge13 Is he gonna survive?

function hero(bullets, dragons){
    //Get Coding!
      if(bullets>=(dragons*2))
        return true;
      else
        return false;
}

//Challenge14 Convert a string to an array

function stringToArray(string){

        return string.trim().split(" ");
    }

//Challenge15 Multiply

function multiply(a, b){
        return a * b
}

//Challenge16 Grasshopper - Summation

var summation = function (num) {
        // Code here
        var s=0;
        for(var i=1;i<=num;i++){
          s=s+i;
        }return s;
}

//Challenge17 Total amount of points

function points(games) {
        var s=0;
        for(var i=0;i<games.length;i++){
          if(games[i][0]>games[i][2]){
            s+=3;
          }
          if(games[i][0]==games[i][2]){
            s+=1;
          }
        }
        return s;
}

//Challenge18 Get the mean of an array

function getAverage(marks){
        //TODO : calculate the downward rounded average of the marks array
        var s=0;
        for(var i=0;i<marks.length;i++){s+=marks[i];}
        return Math.floor(s/marks.length);
}

//Challenge19 String repeat

function repeatStr (n, s) {
        var a="",i=0;
        while(i<n){
          a+=s;
          i++;
        }
        return a;
}

//Challenge20 Century From Year

function century(year) {
        // Finish this :)
        var a=year/100;
        if ((a*100)>Math.floor(a)*100){return Math.floor(year/100)+1}
        return Math.floor(year/100);
}

//Challenge21 Reversed Strings

function solution(str){
        return str.split("").reverse().join("");
}

//Challenge22 Cat years, Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    var c = 0;
     var d = 0;
     for (var i = 1; i <= humanYears; i++) {
        if (i === 1) {
           c += 15;
           d += 15;
        }else if (i === 2) {
           c += 9;
           d += 9;
        }else {
           c += 4;
           d += 5;
        }
     }
     return [humanYears, c, d];
}

//Challenge23 Remove String Spaces

function points(games) {
  var s=0;
  for(var i=0;i<games.length;i++){
    if(games[i][0]>games[i][2]){
      s+=3;
    }
    if(games[i][0]==games[i][2]){
      s+=1;
    }
  }
  return s;
}

//Challenge24 Beginner - Lost Without a Map

function maps(x){
    let n=[];
    for(var i=0;i<x.length;i++){
      n.push(x[i]*2)
    }return n;
}

//Challenge25 Rock Paper Scissors!

const rps = (p1, p2) => {
    if (p1 === p2) {
        return `Draw!`;
      }
      if (p1 === 'rock' && p2 === 'scissors') {
        return `Player 1 won!`;
      } else if (p1 === 'paper' && p2 === 'rock') {
        return `Player 1 won!`;
      } else if (p1 === 'scissors' && p2 === 'paper') {
        return `Player 1 won!`;
      } else {
        return `Player 2 won!`;
      }
};