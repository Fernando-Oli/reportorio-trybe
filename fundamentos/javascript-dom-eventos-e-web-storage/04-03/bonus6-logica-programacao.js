let num = 4;
let divisores = 0;
for(let x = 1; x <=num; x+=1){
    if(num%x==0){
        divisores +=1;
    }
}
if(divisores==2){
    console.log(`Esse número ${num} é primo`);
} else{
    console.log(`Esse número ${num} é par`);
}