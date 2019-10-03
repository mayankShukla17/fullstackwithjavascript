// // alert('test');

// var str="MKS";
// var str1='mayank';
// var str2=`MAYANK MKS`;

// // console.log(str + str1 + str2);

// // var phrase=`can ${str}`;

// // let name ="John";
// // alert('Hello, ${name}!');

// // alert('the result is ${1+2}');

// var name="MKS";
// var age=20;
// var company="GOOGLE";
// var salary=1000000000000000;

// console.log("My name is " + name + " my age is " + age + " I am working in " + company + " i am getting "+ salary);
// // ES5 way

// // console.log(`My name is ${name}.
// // My age is ${age}.
// // My company is ${company}.
// // My salary is ${salary}`);
//  document.write(`My name is ${name}.
//  My age is ${age}.
//  My company is ${company}.
//  My salary is ${salary}`);
 

// // String DT
// console.log(typeof name);
// console.log(typeof str1);
// console.log(typeof str2);

// // Number DT
// var num=10;
// var num1=10.10;
// var num2=1/1;

// console.log(typeof num);
// console.log(typeof num1);
// console.log(typeof num2);

// // Boolean DT
// var test=true;
// var test1=false;
// console.log(typeof test);

// // Undefined PDT -Declared but not used.

// // Null DT-Declare a variable instead of not assigning any value assign null 
// var test=null;
// console.log(typeof null);

// // Symbol DT-It is used to make it unique.

// var name="mayank";
// name=20;
// name=true;
// name=undefined;
// name=null;

// let name1="mayank";
// name=20;
// name=true;
// name=undefined;
// name=null;

// const name2="mayank";
// name=20;
// name=true;
// name=undefined;
// name=null;


// let languages=['java','python','ruby','nodejs',undefined,null,true];
// console.log(languages[2]);
// console.log(languages.length);

// var array1=new Array('Java','Pyhon','Node','Aws','Firebase','ExpressJS');
// console.log(array1);

// var array2=Array('java','python','nodejs');
// var array3=Array.of('java','python','nodejs');
// var array4=Array(5);
// var array5='mks';
// console.log(array2);
// console.log(array3);
// console.log(array4);
// console.log(Array.isArray(array1));
// console.log(Array.isArray(array2));
// console.log(Array.isArray(array3));
// console.log(Array.isArray(array4));
// console.log(Array.isArray(array5));

var str='hello nodejs and javascript';

var strwithArray=str.split(''); //es5
console.log(strwithArray);

// es6
var es6way=Array.from(str);
console.log(es6way);

let [...spread]=str;
console.log(spread);
console.log(spread.join(''));


let array1=['java','python'];
let array2=['nodejs','angular','express'];

let concat=array1.concat(array2,'mks');
let totalArray=[...array1,...array2,'mks',true];


