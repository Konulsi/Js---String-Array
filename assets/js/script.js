"use strict"


//Home work
//Parametr olaraq gelen stringi tersine ceviren method yazin.

// function reverseString(str) {
//     let reverseStr = "";
//     for (let i = str.length-1; i >= 0 ; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }
// console.log(reverseString("Konul"));




// let reverseString = (str) => {
//     let reverseStr = str.split("").reverse().join("");
//     return reverseStr;
// }
// console.log(reverseString("Konul"));





//practice

// const getBirthdayYear = age => {
//     let date = new Date();

//     let year = date.getFullYear();

// //    let day = date.getMonth() + 1;

//     return year - age;

// }

// console.log(getBirthdayYear(22));


// let date = new Date;

// console.log(typeof date);





// let address = "Ehmedli";


// for (let i = 0; i < address.length; i++) {
//     console.log(address[i]);    
// }



// console.log(address.length);

// console.log(address[0]);

// console.log(address.charAt(0));             //stringin birinci herfi gosterir

// console.log(address.charCodeAt(0));         // stringin birinci herfinin arfa planda olan kodunu gosterir

// console.log(address.toLowerCase());         //butun herfleri kichildir
// console.log(address.toUpperCase());         //butun herfleri boyudur

// console.log(address.split(""));             //stringi arraya chevirir

//console.log(address.trim());                 //sozdeki boshluqlari goturur

// console.log(address.trimEnd());                //sozun sonundaki boshluqlari goturur

// console.log(address.trimStart());              //sozun evvelindeki boshluqlari goturur


// console.log(address.slice(1,3));                 //stringin ichinden datani parchalayib goturmek uchun(burada 1ci inexden 3-e qeder goturur)
//h-1,m-2, e-ni goturmur


// console.log(address.slice(1));         // bu   halda 1ci indexden bawqa hasini gosterecek (menfi eded de goturur)


// let text = "asfasdfsdfyyyyyyyyyyyyyyyyyyyy"

// if (text.length > 10) {
//     console.log(address.substring(1, 10) + "...");

// }


// console.log(address.substr(1,3));        //1-den 3-e qeder hamsini

// let text = "salam Anar bey Anar";

// console.log(text.replace("Anar", "Mubariz"));

// console.log(text.replaceAll("Anar", "Mubariz"));


// let text1 = "Hello";

// let text2 = " World";

// let res = text1.concat(text2);

// console.log(res);



// const strToUpper = str => {
//     return str.charAt(0).toUpperCase() + str.slice(1)     //str-nin 1ci elementini gotur boyuk, et birlesdir 1ci elementden bawqa yerde qalanlarnan

// }

// console.log(strToUpper("hello"));



// const strToUpper = str => {
//     return str.charAt(0).toUpperCase().concat(str.slice(1));
// }
// console.log(strToUpper("hello"));



// let text = "salam";

// let result = text[0].toUpperCase();


// let res = text.replace(text.charAt(0), result)
// console.log(res);





// let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare", "Anar"];


// console.log(students.length);  //studentin elementlerinin sayi (6)

// console.log(students[students.length-1]);   // arrayin ichinden sonuncunu gostermek (Anar)

// let stu = ["a" , "b" , "c"]

// let result = stu.join("");

// console.log(result);

// let result = students.join();   // arrayin elementlerini birlewdirir (arrayin elementlerini birlesdirib stringe chevirir)

// console.log(result);



// console.log(students);

// students.push("Elekber");   ////en sona data elave etmek uchun

// console.log(students);



// students.pop();           ////en sondan datani silmek etmek uchun

// console.log(students);



// students.shift();   //evvele data elave etmek uchun

// students.unShift();    //evvelden data silmek uchun

// console.log(students);



// let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare", "Anar"];


// let text = "R"

// function filter(arr, text) {
//     let result = [];

//     for (const item of arr) {
//         if(item.toLowerCase().startsWith(text.toLowerCase())){
//             result.push(item)
//         }
//     }

//     return result;
// }

// console.log(filter(students, text));



//console.log(students.indexOf("Jale"));  //itemin hansi indexde durdugunu gosterir




// let result = students.find(m => m == "Jale");

// console.log(result);



// students.sort();   // herfleri elifba sirasina gore siralayir,  reqemleri ardicil

// console.log(students);






// students.reverse();

// console.log(students);

// console.log([3, 8, -10, 23, 19, -4, -14, 27].sort((a,b)=>b-a));

// students.fill("Eli")  //butun elementleri deyiwib eli edir

// students.fill("Eli",0,2)  //2c- indexe qeder deyiwir

// console.log(students);

// console.log(students.every(m => m == "Chinare"));  // elementlerin hamsinin Chinareye beraberdir ya yox?



// let arr = [10, 20, 30, 40, 5, 6, 7];

// console.log(arr.every(m => m > 4));


// const fruits = ["banana","orange","apple","mango"];
// const f = fruits.entries();

// for (const iterator of f) {
//     console.log(iterator);
    
// }


// let arr = [ 10, 20, 30, 40, 5, 6, 7];


// console.log(arr.findIndex(m=>m>20));   //arrayin ichinde 20-den boyuk olanlarin birincisinin indexini gosterir.



// console.log(arr.includes(3));  //elementin arraya daxil olub olmamasini gosterir


// console.log(Array.isArray(arr));   // gelen datanin array olub olmamasini yoxlayir


// let text = "ABCDFE";
// const myArr =  Array.from(text);     //stringi arraya chevirir
// console.log(myArr);


//console.log(arr.slice(2));  //2ci indexden sonrani verir (9da daxil)

//  console.log(arr.slice(2,5)); 




// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // fruits.splice(2, 0, "Lemon", "Kiwi");   // 2ci indexden bawla ,0 eded elemet sil ve elave et

// fruits.splice(2, 1, "Lemon", "Kiwi");    //// 2ci indexden bawla ,1  elemet sil ve elave et

// console.log(fruits);


// console.log(arr.toString());




// let age = "55";

// let age2 = "33"

// console.log(typeof age.toString());


// console.log(typeof Number(age));


// console.log(Number(age) + Number(age2));


// console.log(typeof parseInt(age));

// function getNums(num1, ...arr) {
//     console.log(arr);
// }

// getNums(1,2,3,4,5,6)


// let test = (...arr) => {
//     console.log(arr);
// }

// test(1,2,3)



// let arr1 = [1,2,3,4,5];


// let copyArr = [...arr1];

// console.log(copyArr);

// arr1[0] = 10;

// console.log(arr1);



// let user1 = {

//     name: "Shaiq",
//     address: "Ehmedli"
// }

// console.log(user1);


// let copyUser1 = {...user1}

// console.log(copyUser1);























