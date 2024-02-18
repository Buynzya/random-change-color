// massive/ array -> olon utga zereg hadglhad ashiglana
// var a=5;
// [] -> massive / array 
// var massivename = ['string' , 'number' , 'null' , 'boolean'];
// var too = [5,65,233,465];
// console.log(too);
//  index -> element/utga iin ezleh bairnii dugaar --> index 0-ees ehlene
// length -> massive dotorh elementiin too 
// console.log(too[0]);
// too[4]=100;
// console.log(too);
// console.log(too.length);
// console.log(too[too.length-1]) ; // massiviin hamgiin svvliin element gargj ireh
// console.log(too[0]); // massiviiin hamgiin ehnii elementiig gargaj ireh

// for -> massive 
// for(var i=1 ; i<=10 ; i++)

// for(var i=0 ; i<=too.length-1 ; i++) {
//     console.log(too[i]);
// }

// 1. 5 shirheg too aguuulsan massive uusgeed ehnii bolon suuliin too urjveriig ol
// var urjver = [5,6,7,8,9]
// for(var i=0 ; i<=urjver.length-1 ; i++) {
//     console.log(urjver[0] * urjver[urjver.length-1]);
// }

// //  10 shirheg too aguulsan massive uusgeed tedgeeriin niilber urjveriiig ol
// var niilber = [1,2,30,4,5,6,7,8,9,10];
// var sum=0;
// var urjey = [2,3,4,5,6,7,8,9,10,11];
// var urj=1;
// for( var i=0; i<=niilber.length-1 ; i++) {
//     sum=sum+niilber[i];
    
// }
//  for(var i=0 ; i<=urjey.length-1 ; i++) {
//     urj=urj*urjey[i];
   
//  }
// console.log(sum);
// console.log(urj);
 // 5 shirheg too aguulsan massive uusgeed tegsh bol tegsh sondgoi bol sondgoi gej gargaj irne uu
//  var kk= [2,3,4,5,6];
//  for(i=0 ; i<=kk.length-1 ; i++) {
//     if(kk[i]%2==0){
//             console.log(kk[i] + "tegsh");
//          } else {
//        console.log(kk[i] + "sondgoi");     
//     }
//  }
//   var body =document.getElementsByTagName('body')[0];
//   var color = ['pink' ,  'red' , 'yellow' , 'blue' , 'green'];
//   var button = document.getElementsByTagName('button')[0];
//   var i=-1;
//   function changeColor(){
//     i++;
//     body.style.backgroundColor =color[i];
//     button.innerText =color[i];
//     button.style.color = color[i];
//     if(color.length-1 <=i ) {
//         i=-1;
//     }
//   }

//  home work 
var color = ['pink', 'red', 'yellow', 'blue', 'green'];
var button = document.getElementsByTagName('button')[0];
var body = document.getElementsByTagName('body')[0];

function changeColor() {
    var randomIndex = Math.floor(Math.random() * color.length);
    var randomColor = color[randomIndex];

    body.style.backgroundColor = randomColor;
    button.innerText = randomColor;
    button.style.color = randomColor;
}

