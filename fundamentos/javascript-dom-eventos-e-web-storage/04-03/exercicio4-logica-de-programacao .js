let maior = 0
for(let cont = 0; cont < 100; cont ++){
    let divisores = 0;
    for(let conte = 1; conte <= cont;conte+=1){
        if(cont%conte==0){
        divisores+=1;
    }
}
if(divisores==2){
    maior = cont
}
}
console.log(maior)













// let maior = 0

// for(let x = 0; x <51; x+=1){
//     let primo = true;
//     for(let divisor =2; divisor < x; divisor++){
//         if(x%divisor===0){
//             primo=false;
//         }
//     }
//     if(primo){
//         maior = x
//     }
// }
// console.log(maior)