let obj =  { 
    name : "anh"
};
obj = {
    age : 25
};
    //console.log(obj);

// let có thể thay đổi obj cũ thnahf obj mới , xóa thuộc tính cũ , thành thuộc tính mới //
const omg = {
    name :" Anh"
};
omg.age = 25;
omg.name = " anh2";
//console.log(omg);

// const : co the them xoa omg ban dau , có thể thay đổi giá trị của thuộc tính //


//-----------------------------------------------------------------------------------//

// Phan biệt khai báo đơn giản let và const 
//  let : có thể thay đổi giá trị x và y 
//  const : không thể thay dổi giá trị x và y 
//==========================================================
// lambaitap_dongian //
const prompt = require('prompt-sync')();
//let a = prompt("nhap so thu nhat");
//let b = prompt("nhap so thu 2 ");
//let sum = Number(a) + Number(b);
//console.log(` Tong a + b la : ${sum} `)
//console.log(" tong 2 so a + b la : ", sum);


//==========================================================

const number = 7;
if( number % 2 ==0)
{
    console.log(`${number} la so chan`);
}
else{
console.log(`${number} la so le`);
}
 
//=============================================
const day = 3 ;
switch( day)
{
    case 1 :
            console.log("hom nay la thu 1 ");
            break;
    case 2:
        console.log("hom nay la thu 2 ");
        break;
    case 3 :
        console.log("hom nay la thu 3 ");
        break;
}
 for(let i = 0 ; i < 10 ; i ++)
 {
    console.log(i);

 }

 //=============================================
let i = 99;
while ( i > 90)
{
    console.log(i);
    i--;
}
//================================================

//  for ( let i = 0 ; i <= 100 ; i++)
//  {
//     if ( i % 3 == 0 )
//     {
//         console.log(`${i} Fizz`);
//     }
//     if(i% 5 == 0)
//     {
//         console.log(`${i} Buzz`);
//     }
//     if( i % 3 == 0 && i % 5 ==0)
//     {
//         console.log(`${i} FizzBuzz`);
//     }
    
//  }
//=================================================
