// document.getElementById("count").innerText=8;


// oncl
// function increment(){
//     console.log("clicked");
// }



// INCREMENT BUTTON
let text=document.getElementById('count');
let na=document.getElementById('namess');
let saver=document.getElementById('saved');
let counts=0;
function increment(){
    counts++;
    console.log(counts)
    text.innerText=counts;
}
// SAve button
function save(){
   console.log(counts);
   let countstr=counts+" "+" - ";
   saver.innerText +=" "+countstr;
   counts=0;
   text.innerText= 0;
}



let wel ="Welcome"
let names;

function name(){
 names=prompt("Enter your name");
    let welcome=`${wel} ${names}`;
  na.innerText=welcome;
    
}



// let age=21
// console.log(age);


// let age=23;
// let dogratio=21;
// let mydog=age*dogratio;
// console.log("mydog is"+mydog)



// let bonuspoint=50;
// bonuspoint=bonuspoint+25;
// console.log(bonuspoint)






// function print(){
//     console.log(2);
//     console.log(1);
//     console.log(0);
// }
// print();

// let a=7;
// let b=8
// let c=a+b;
// function sum(a,b){
//     console.log(c);
// }
// sum(a,b);