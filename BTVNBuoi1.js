// Bai 2 : Tim so lon nhat trong mang //
//========================================//

// const a = [3 ,4, 6, 8, 9]
// let max = a[0]
// for ( let i = 0 ; i < a.length; i++ )
// {
//     if( a[i] > max)
//     {
//         max = a[i]
//     }
// }
// console.log(`so lon nhat trong mang la: ${max}`)

//===========================================//
// Bai 3 : Viet 1 hàm để trả về 1 mảng chẵn chỉ chưa số chẵn từ mảng đầu vào //

// function number( a){
//     const luu= []
//     for( let i = 0 ; i < a.length;i++)
//     {
//         if( a[i] % 2 === 0 )
//         {
//             luu.push(a[i])
//         }
//     }
//     return luu

// }
// const arr = [1,2,3,4,5,6,7,8,9]
// const kq = number(arr)
// console.log(kq )
//===============================================//
// Bai 4 : Viết 1 hàm đếm số lần xuất hiện của 1 phần tử cụ thể trong mảng //
 
//  function name (a, x) {
//     let count = 0
//     for(let i = 0 ; i < a .length;i++)
//     {
//         if ( a[i] === x)
//         {
//             count++
//         }
//     }
//     return count;
//  }
// const array = [2,4,5,7,2,8,2]
// const kq = name ( array,2)
// console.log(kq)

//================================================//
//Bai5 : Đảo ngược mảng 

// function name(a)
// {
//     const temp = []
//     for(let i = a.length - 1; i >= 0 ; i--)
//     {
//        temp.push(a[i])
//     }
//     return temp
// }
// const array = [1,2,3,4,5]
// console.log(name(array))

//===============================================//
//Bai6 : Loại bor phần tử trùng lặp 

// function name(arr) {
//     const luu = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!luu.includes(arr[i])) {
//             luu.push(arr[i]);
//         }
//     }
//     return luu;
// }

// const array = [1, 2, 2, 3, 4, 4, 5];
// console.log(name(array));

//========================================
// Bai 7 : sắp xeeps tăng dần 


//     function name(arr) {
//         for (let i = 0; i < arr.length-1; i++) {
//             for (let j = i + 1; j < arr.length; j++) {
//                 if ( arr[i] > arr[j])
//                 {
//                     let temp = arr[i]
//                     arr[i] =arr[j]
//                     arr[j] = temp
//                 }
            
//             }
//         }
//         return arr
//     }
// const array = [5,3,4,2,1];
// console.log(name(array))
//=============================================================
// Bai 8 : phần tử xuất hiện nhiều nhất

// function name(arr) {
//     const luutansuat = {}; 
//     let maxCount = 0; 
//     let phantuxuathiennhieunhat = null;


//     for (let i = 0; i < arr.length; i++) {
//         const luu = arr[i];
//         if (luutansuat[luu]) {
//             luutansuat[luu]++; 
//         } else {
//             luutansuat[luu] = 1; 
//         }
//         if (luutansuat[luu] > maxCount) {
//             maxCount = luutansuat[luu];
//             phantuxuathiennhieunhat = luu;
//         }
//     }
//     return phantuxuathiennhieunhat;
// }


// const array = [1, 3, 2, 3, 4, 1, 3];
// console.log(name(array));
//===============================================
// Bai 9 : Gộp 2 mảng thành 1 mảng và loại bỏ các phần tử trùng lắp


function name(arr1, arr2) {
    const luuketqua = []; 
    for (let i = 0; i < arr1.length; i++) {
        if (!luuketqua.includes(arr1[i])) {
            luuketqua.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!luuketqua.includes(arr2[i])) {
            luuketqua.push(arr2[i]);
        }
    }
    return luuketqua;
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(name(array1, array2)); 
