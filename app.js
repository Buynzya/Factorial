// for loop -> davtalt
// for(var i=1 ; i<=10 ; i++) {
//     console.log(i+"hello");
// }
// i=1 -> 1<=10 -> true -> 1hello i++
// i=2 -> 2<=10 -> true -> 2 hello i++
// i=20 -> 10<=10 -> true -> 10 hello i++
// i=11 -> 11<=11 -> false -> stop

// for(var i=10; i>=1; i--) {
//     console.log(i);
// }

// 1-20 hurtleh tegsh too 
// for(var i=1 ; i<=20 ; i++) {
//     if(i%2==0){
//     console.log(i + "tegsh");
//     } else {
//         console.log(i + "sondgoi");
//     }

// }
// 1-30 3,5d zereg huvaagdag too
// for(i=1 ; i<=30 ; i++) {
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     } else {
//         console.log();
//     }
// }

// 5-> 5iin hurd garch ireh
// var tnum=+prompt("enter your number");
// for(var i=1 ; i<=10 ; i++){
//     console.log(tnum + "X" + i + "=" +(i*tnum));   
// }
// 1-10 hutleh toonii niilber 
var sum=0;
for(var i=1; i<=10 ; i++) {
    sum=sum+i;
}
console.log(sum);
// 1-10 toonii urjver
var urj=1;
for(var i=1 ; i<=10 ; i++) {
    urj=urj*i;
} 
console.log(urj);

// 1-10 hoorond random too garch ireh toog olno uu 
random = Math.floor(Math.random()*10)+1;
    console.log(random); 
    var chance=3;
    for(var i=1 ; i<=chance ; i++) {
        var mynumber = +prompt("1-10 hoorond too oruul");
        if(mynumber==random) {
            alert("hahahaa computeriig ta yalla "); 
            break;
             } else if(mynumber<random) {
                alert("too baga bn dahiad orold");
             } else if(mynumber>random) {
                alert("too ih bn dahiad orold"); 
             }
    }
