// 1.
let age  = prompt ('Enter age');
if (age >= 0 && age < 12){
    alert ('Child');
}
else if (age >=12 && age <18){
    alert ('Teenager');
}
else if (age >=18 && age <60){
    alert ('Adult');
}
else if (age >=60){
    alert ('Pensioner');
}
else{
    alert ('Error!')
}

// 2.
let number = prompt ('Enter number');
switch (number) {
    case `1`: alert ('!'); break;
    case `2`: alert ('@'); break;
    case `3`: alert ('#'); break;
    case `4`: alert ('$'); break;
    case `5`: alert ('%'); break;
    case `6`: alert ('^'); break;
    case `7`: alert ('&'); break;
    case `8`: alert ('*'); break;
    case `9`: alert ('('); break;
    case `0`: alert (')'); break;
    default: alert ('Enter number 1-0');
}

//3.
let numb = +prompt ('Enter number xxx');
let numb1 = parseInt (numb/100);
let numb2 = parseInt (numb/10)%10;
let numb3 = (numb%10);
if (numb1 === numb2 || numb2 === numb3 || numb1 === numb3){
    alert ('Same figures found');
}
else{
    alert ('Figures not founded');
}

//4.
let year = +prompt ('Enter year');
if (year%4==0 && year%100 !=0 || year%400==0){
    alert ('Високосний рік');
}
else{
    alert('Невисокосний рік')
}

//5.
let aa;
let bb;
let dd;
let ee;
let num = +prompt("Enter 5 digit number")
if((num > 9999)&&(num < 100000)){
aa = parseInt (num / 10000);
ee = num % 10;
bb = parseInt (num / 1000);
dd = num % 100;
 if ((aa == ee)&&(bb === dd)){
    alert("This number is palindrom");
}
else {
alert("This number is NOT palindrom");
 }
}
else{
alert("This is NOT 5 digit number");
    }

//6.
let usd = +prompt ('Enter USD');
let currency = prompt('Enter currency UAH, EUR, PLN');
switch (currency.toLowerCase()){
    case `uah` : cur=usd*28.3;break;
    case `eur` : cur=usd*1.17;break;
    case `pln` : cur=usd*3.9;break;
    default: alert (`Enter proper currency`);
}
alert (cur);

//7.
let sum = +prompt ('Enter sum of the purchase');
if (sum<=200){
    sum1=sum;
}
else if (sum>200 && sum <= 300){
    sum1 = sum - (sum*0.03);
}
else if (sum>300 && sum <= 500){
    sum1 = sum - (sum*0.05);
}
else if (sum>500){
    sum1 = sum - (sum*0.07);
}
alert(`Totally to pay ` +sum1);

//8.
let p = +prompt ('Enter perimetr of the square');
let r = +prompt ('Enter radius of the circle');
if (p>=(8*r)){
    alert ('Коло впишеться у квадрат');
}
else if (p<(8*r)){
    alert ('Коло НЕ впишеться у квадрат');
}
else{
    alert ('Error!');
}

