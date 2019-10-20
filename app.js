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

// console.log("My name is " + name + " my age is " 
// + age + " I am working in " +
//  company + " i am getting "+ salary);
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

// var str='hello nodejs and javascript';

// var strwithArray=str.split(''); //es5
// console.log(strwithArray);

// // es6
// var es6way=Array.from(str);
// console.log(es6way);

// let [...spread]=str;
// console.log(spread);
// console.log(spread.join(''));

// let array1=['java','python'];
// let array2=['nodejs','angular','express'];

// let concat=array1.concat(array2,'mks');
// let totalArray=[...array1,...array2,'mks',true];

// let users={
//     // key:value
//     // name='anu', //uncaught syntaxerror: Invalid shorthand property
//     name:'MKS',
//     age:20,
//     company:'Jspiders',
//     salary:200000000,
//     skills:['java',
//     'nodejs',
//     'aws',
//     'firebase',
//     'babel',
//     'webpack',
//     'pug',
//     'expresshandlebars',
//     'jade']
// };
// console.log(users['age']);
// console.log(users.company);

// let obj= new Object();
// obj.name='MKS';
// obj.age=20;
// obj.salary=30000;
// console.log(obj);

// let name='vinay';
// let company='Jspiders';
// let age=30;
// let usersdata={
//     // key:value
//     name:name,
//     age:age,
//     company:company,
//     salary:20000
// };

// let usersdata1={
//     // key:value
//     name,
//     age,
//     company,
//     salary:30000
// };
// console.log(usersdata);
// console.log(usersdata1);

// var users=[
//     {
//         name:'anu',
//         age:20,
//         company:'testyantra',
//         salary:20000,
//         designation:'Nodejs developer',
//         dob:'20/12/1995',
//         location:'mandya',
//         gender:'female',
//         photo:'https://'
//     },
//     {
//         name:'manu',
//         age:21,
//         company:'Jspiders',
//         salary:10000,
//         designation:'Reactjs developer',
//         dob:'20/12/1997',
//         location:'Mysore',
//         gender:'Male',
//         photo:'https://'
//     },
//     {
//         name:'MKS',
//         age:22,
//         company:'Google',
//         salary:2000000,
//         designation:'Fullstack developer',
//         dob:'17/10/1996',
//         location:'Blr',
//         gender:'Male',
//         photo:'https://'
//     }
// ];
// console.log(users);

// let users={
//     'user-name':'mks',
//     for:'hey for',
//     while:'hey while',
//     if:'hey if'
// };
// console.log(users);
// // o/p-Object { "user-name": "mks", for: "hey for", while: "hey while", if: "hey if" }

// let users={
//     name:'ani',
//     age:20,
//     company:'testyantra',
//     salary:10000
// };

// users.name='sachin';
// console.log(users);

// let users={
//     name:'ani',
//     age:20,
//     company:'testyantra',
//     salary:10000
// };

// let me=Object.create(users);
// me.name='manu';
// me.age=40;
// me.company='Jspiders';
// me.salary=30000;

// console.log(users);
// console.log(me);

// let emp={
//     id:1,
//     'emp-name':'manoj',
//     'emp-age':20,
//     'emp-location':'mandya'
// };
// let empconvertasArray=Object.entries(emp);

// empconvertasArray.forEach(element => {
//     console.log(element);
// });

// console.log(empconvertasArray);

// let emp={
//     id:1,
//     'emp-name':'manoj',
//     'emp-age':20,
//     'emp-location':'mandya'
// };
// let checkandObject=Object.freeze(emp);

// emp['emp-age']='MKS';
// console.log(emp);

// let emp={
//     id:1,
//     'emp-name':'manoj',
//     'emp-age':20,
//     'emp-location':'mandya',
//     alldata() {
//         console.log(`${this['emp-name']}
//         and ${this['emp-location']}
//         ${this['emp-age']}`);
//     }
// };
// console.log(emp.alldata());

// let student={
//     name:'mks',
//     age:22,
//     salary:200000
// };
// let ArrayValues=Object.values(student);
// let ArrayKeys=Object.keys(student);
// console.log(ArrayValues);
// console.log(ArrayKeys);
// console.log(student);

// //Function syntax
// function()//anonymous function
// {
//     console.log('hello function');
// }// called part
//calling part

// var users=function(){
//     console.log('Hello MKS');//code here
// }//called part

// users();//calling function
// users();
// users();

// function()//Anonymous function
// {
//     alert('hello function');
// }

//name:value(function expression)
// let users=function(){
//     alert('Hello Function')
// }//called
// users();

// (function(){
//     console.log('Hello');
//     alert(2+2);
//     var username='mayank';
//     var password=123;// These two variables are available in nearest scope
//     // function not available outside this scope
// })();

// console.log(username,password);
// //Uncaught ReferenceError: username is not defined

// {
//     console.log('Hello');
//     alert(2+2);
//     var username='mayank';
//     var password=123;//These two variables are available in nearest scope
// //   function not available outside this scope
// }

// function users(){
//     console.log('mayank');
//     console.log('manu');
//     var username="manu";
//     var password=123;
// }
// users();//calling

//creating function using constructor way
// var users=new Function(console.log('Hello Fullstack'));
// users();

// function username(username){
//     return username;
// }
// console.log(username('shashi'));
// console.log(username('manu'));
// console.log(username('keethi'));

// // function without return statement and multiple parameter
// function username(name,password){
//     console.log(name+password);
// }
// username('shashi ',123);

// // "use strict"//it will not allow duplicates
// function username(name,password,name,password){
//     console.log(name+password,name,password);
// }
// username('shashi ',123,'sbghgj0',5455);
// a=10;
// console.log(a);

// function number(){
//     let args=arguments;
//     console.log(args);
//     console.log(Array.isArray(args));//false
//     let [...checkspread]=args;
//     console.log(typeof checkspread);//object
//     console.log(Array.isArray(checkspread));//true
//     console.log(arguments);
// }
// number(100,20,70,40,50,);
// var array=[1,4,6,8];
// console.log(array);

// //Function closure in javascript...
// var simpleText='hello simple text how r u?'; //global scope
// function jspiders(){
//     let outerBlock='this is outer block';//local scope
//     console.log(outerBlock);
//     function qspiders(){
//         let innerBlock='this is inner block.';//local scope only available for qspiders
//         console.log(innerBlock);
//         console.log(outerBlock);//closure here ...
//     }//this is qspiders block //called
//     qspiders();//calling qspiders function
// }
// jspiders();//calling jspiders function

// function jspiders(){
//     console.log('hello jspiders');
// }
// function qspiders(){
//     console.log('hello qspiders');
// }
// jspiders(qspiders());

// function jspiders(callback){
//     console.log('hello jspiders');
//     callback();
// }
// function qspiders(){
//     console.log('hello qspiders');
// }
// jspiders(qspiders);

// function jspiders(callback){
//     console.log('hello jspiders');
//     callback();
// }
// jspiders(function(){alert('Hello')});

// //Function hoisting
// sachin();
// function sachin(){
//     console.log('Hey Sachin how r u?');
// }// called // only naming function is working
// dravid();
// var dravid=function(){
//     console.log('Hey dravid how r u?');
// };//called //Function expression is not working

// //Fat arrow(=>)
// function username(){
//     console.log('Hello function');
// }//This is naming function
// username();//ES5....

// //ES6.....
// let username=()=>{
//     console.log('Fat arrow function here');
// };
// username();

// let password=()=> console.log('Password here');
// console.log(password);

// let email1=function(email){
//     return email;
// }
// console.log(email1('mayank@gmail.com'));//ES5

// //Reomve function keyword add fat arrow
// let email=(email)=>{
//     return email;
// }//ES6 return type with param

// let email=email=>email; 
//if it is one param reomove paranthesis & if one line remove bracket & return type
// console.log(email('mayank@gmail.com'));//ES6 return type with param short form 


//10/10/2019
// let user={
//     name:'manu',
//     age:20,
//     company:'Testyantra',
//     details:function(){
//         console.log(`Hello my name is ${this.name}
//         and my age is ${this.age} and I work for ${this.company}`);
//     }
// };
// user.details();//ES5 way

// let user1={
//     name:'manu',
//     age:20,
//     company:'Testyantra',
//     details:()=>{
//         console.log(`Hello my name is ${user1.name}
//         and my age is ${user1.age} and I work for ${user1.company}`);
//     }
// };
// user1.details();//ES6

// let numbers=()=>{
//     console.log(arguments);
// };
// numbers(10,10,30,40,50,30);//ES6
//ReferenceError: arguments is not defined
// let numbers1=function(){
//     console.log(arguments);
// };
// numbers1(10,10,30,40,50,30);//ES5

//Rest parameter
//Rest is a parameter which is used to pass arguments.It can be any name.
// let numbers=(...rest)=>{
//     console.log(rest);
//     console.log(typeof rest);
//     console.log(Array.isArray(rest));
// };
// numbers(10,10,30,40,50,30);//ES6
// let numbers1=function(){
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(Array.isArray(arguments));
// };
// numbers1(10,10,30,40,50,30);//ES5

//Array Methods
// let lang=[
//    /*0*/ 'nodejs',
//    /*1*/ 'angular',
//    /*2*/ 'reactjs',
//    /*3*/'expressjs',
//    /*4*/'mongodb',
//    /*5*/'typescript'];
//Traditional way of iterating array
// for(var i=0;i<lang.length;i++){
//     console.log(lang[i]);
// }
//forEach this is working with array only...
// lang.forEach(function(item){
//     console.log(item);
// });
// var str='Hello angular';
// [...str].forEach(function(item){
//     console.log(item);
// });

// let lang=[
//     /*0*/ 'nodejs',
//     /*1*/ 'angular',
//     /*2*/ 'reactjs',
//     /*3*/'expressjs',
//     /*4*/'mongodb',
//     /*5*/'typescript'];
// lang.forEach((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });

// for (let lan of lang) {
//     console.log(lan);
//     console.log(typeof lan); 
// }
//  var str='Hello nodejs';
//  console.log(typeof str); 
//  for (let y of str) {
//     console.log(typeof y);
//     console.log(y);
//  }
 
// var pop=lang.pop();
// const length=lang.length;
// console.log(pop);
// console.log(length);//It is showing 5 elements

// delete lang[4];
// const length2=lang.length;
// console.log(length2);//It is showing 6 elements
// console.log(lang);

// lang.pop();//Deleting last index
// lang.shift();//Deleting first index
// lang.unshift('pug');//Adding first index
// lang.push('firebase');//Adding last index
// lang.splice(0);//If it is one parameter it is deleting all array elements
// lang.splice(2,1);
// lang.splice(2,1,'dom');
// console.log(lang);

// 11/10/2019
// lang.fill('mks');
// let test=lang.includes('nodejs');
// console.log(test);

// if (lang.includes('nodejs')) {
//     alert('nodejs is here');
// }else{
//     alert('no value here');
// }
// console.log(lang);

// var numbers=[10,40,50,20,70,20,300,5000];
// var reduce=numbers.reduce(function(a,b){
//     console.log(a);
//     console.log(b);
//     return a+b;
// });
// console.log(reduce);
// var reducewithArrowFunction=numbers.reduce((a,b)=>a+b);
// console.log(reducewithArrowFunction);

// console.log(lang.sort());
// console.log(lang.reverse());
// var sortMethod=lang.sort();
// console.log(sortMethod);
// var sortwithnumbers=numbers.sort((a,b)=>a-b);
// console.log(sortwithnumbers);
// var sortwithnumbers1=numbers.sort((a,b)=>b-a);
// console.log(sortwithnumbers1);

// var array=[
//     'aws',
//     'node',
//     'python',
//     'expressjs',
//     'angualrjs',
//     'java',
//     'reactjswithnative',
//     'firebasewithgoogle'
// ];
// var resultwithnormalfunction=array.filter(function(word){
//     return word.length>6;
// });//ES5
// console.log(resultwithnormalfunction);
// var result=array.filter((word)=>word.length>6);//ES6
// console.log(array.indexOf('java'));
// console.log(result);
// console.log(array);

// var array=[
//     'aws',
//     'node',
//     'python',
//     'python',
//     'python',
//     'expressjs',
//     'expressjs',
//     'expressjs',
//     'angualrjs',
//     'angualrjs',
//     'angualrjs',
//     'java',
//     'java',
//     'java',
//     'reactjswithnative',
//     'firebasewithgoogle'
// ];
// var test=array.filter(function(value,index,array){
//     // console.log(array);
//     // console.log(value);
//     // console.log(index);
//     return array.indexOf(value)==index;
// });//ES5 to remove duplicates
// console.log(test);

// let [...es6way]=new Set(array);//Removing duplicates....
// console.log(es6way);//ES6 way
// console.log([...new Set(array)]);

// var numbers=[1,3,50];
// var result=numbers.map(x=>x*2);
// var forEachWay=numbers.forEach(x=>x*2);
// var forEachWay1=numbers.forEach(x=>{
//     return x*2;
// });
// console.log(forEachWay1);
// console.log(forEachWay);
// console.log(numbers);
// console.log(result);
// console.log(numbers.reverse());
// var numbersoutput=numbers.reverse()
// console.log(numbersoutput);
// var array=['shashi','dravid','sachin','robin'];
// var arraytostring=array.toString();
// var arraywithjoin=array.join('💯');
// console.log(arraytostring);
// console.log(arraywithjoin);;
// console.log(typeof arraywithjoin);
// let [...arrayjust]=arraywithjoin;
// let str=arrayjust.reverse().join('');
// console.log(str);

// function username(name){
//     return [...name].reverse().join('');
// }
// console.log(username('mayank').toUpperCase());

//14/10/2019
//String methods
// let str='Hello nodejs and nodejs is backend';
// let result=str.indexOf('l');
// let total=str.replace('nodejs','java');
// console.log(total);
// let regTotal=str.replace(/nodejs/g,'java');
// console.log(regTotal);
// let trimdata='          mayank you are waste....        ';
// let data=trimdata.trim();
// console.log(data);

// var str='hello javascript and nodejs and angular';
// str.toUpperCase();
// str.toLowerCase();
// str.strike();//css
// let substr=str.substr(0,5);
// console.log(substr);
// let substring=str.substring(5,0);
// console.log(substring);
// let slice=str.slice(5,0);
// console.log(slice);
// var str='hello javascript and nodejs and java';
// let search=str.search('javascript');
// console.log(search);
// let match=str.match(/java/g);
// console.log(match);
// str.startsWith('e');
// str.endsWith('a');
// if (str.startsWith('h')) {
//     alert('starts with h');
// }else{
//     alert('it is not starting with h');
// }
// var repeat=str.repeat(1000);
// document.write(repeat);
// var test=str.split('');
// console.log(test.reverse().join(''));

//DOM
// console.log(document);
// let url=document.URL;
// console.log(url);
// if (url==='http://127.0.0.1:5500/') {
//     alert('this is my website url')
// }else{
//     window.location.assign('http://www.google.com/');
// }
// var document=document.all;
// var head=document.head;
// var body=document.body;
// var name=document.getElementsByTagName(h1);
// var h1=document.getElementById('h1');
// body.innerHTML='Hello we are learning DOM';
// body.style.background='red';
// console.log(document);
// console.log(head);
// console.log(body);
// console.log(h1);

//15/10/2019
// console.log(typeof window);
// for(let i in window){
//     document.write(i+'<br>'+window[i]+'<br>');
// }

// var scripts=document.scripts;
// for(let script of scripts){
//     console.log(script);
// }
// var images=document.images;
// let imagesiwithArray=Array.from(images);
// imagesiwithArray.forEach(img=>console.log(img));
// console.log(images);
//checks all images and loop

// var links=document.links;
// let [...link]=links;
// link.forEach(i=>console.log(i));
// console.log(links);
//checks all links and loop

// var h1=document.body.children[1];
// document.write(h1);
// console.log(h1);
// var h1=document.getElementById("h1");//Dom method... for an css and html id
// var h1anotherway=document.querySelector('#h1');//this will also work...css syntax....
// var jsp=document.getElementsByClassName('jspiders');//normal dom object method for classes
// var classanotherway=document.querySelector('.jspiders');//css syntax way... 
// console.log(h1);

// var h1=document.getElementById('h1');
// h1.style.background="yellow";
// h1.style.padding="10px";
// h1.style.margin="10px";
// h1.style.borderRadius="10px";
// h1.style.border='2px solid #111';
// h1.style.color='red';
// h1.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt libero velit eos
//  accusamus modi in distinctio enim obcaecati, suscipit, quis error animi quam eveniet maxime facilis
//   aspernatur reprehenderit assumenda.`

//16/10/2019
// let list =document.getElementsByTagName('li');
// let [...li]=list;
// li.forEach(x=>{
//     console.log(x);
//     x.classList.add('anu');
//     x.innerHTML='Hey anu what r u doing...';
// });
//classes here

//dom another way
// var list1=document.querySelectorAll('li');
// let [...li1]=list1;
// li1.forEach(y=>{
//     console.log(y);
//     y.classList.add('red');
//     y.innerHTML='Hey anu what r u doing...';
// });

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// odd.forEach(x=>{
//     x.classList.add('odd');
//     x.innerHTML='odd here'
// });
// even.forEach(y=>{
//     y.classList.add('even');
//     y.innerHTML='even here';
// });

var oddButton=document.getElementById('odd');
var evenButton=document.getElementById('even');
//li's and even and odd...
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

// oddButton.addEventListener('click',()=>{
//     // alert('add odd no');
//     odd.forEach(x=>{
//         x.classList.add('odd');
//     });
//     even.forEach(x=>{
//         x.classList.remove('even');
//     });
// });
// evenButton.addEventListener('click',()=>{
//     // alert('add odd no');
//     odd.forEach(x=>{
//         x.classList.remove('odd');
//     });
//     even.forEach(x=>{
//         x.classList.add('even');
//     });
// });

//access dom with events
oddButton.addEventListener('mouseenter',()=>{
    console.log('mouse entered odd..');
    odd.forEach(x=>{
        x.classList.add('odd');
    });
    even.forEach(x=>{
        x.classList.remove('even');
    });
});
evenButton.addEventListener('mouseenter',()=>{
    console.log('mouse entered even...');
    odd.forEach(x=>{
        x.classList.remove('odd');
    });
    even.forEach(x=>{
        x.classList.add('even');
    });
});
