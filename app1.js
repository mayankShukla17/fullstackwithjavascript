// function addNumbers(){
//     var firstnumber=parseInt(document.getElementById('firstnumber').value);
//     var secondnumber=parseInt(document.getElementById('secondnumber').value);
//     document.getElementById('total').value=firstnumber+secondnumber;
// }

// function addNumbers(){
//     var firstnumber=parseFloat(document.getElementById('firstnumber').value);
//     //convert string into int use parseInt
//     // convert string into floating value parseFloat
//     var secondnumber=parseFloat(document.getElementById('secondnumber').value);
//     document.getElementById('total').value=firstnumber+secondnumber;
//     if(isNaN(firstnumber) || firstnumber===' '){
//         alert('please add number not string');
//     }   
//     if(isNaN(secondnumber) || secondnumber===' '){
//         alert('please add number not string');
//     }
// }

//19/10/2019
// setInterval(()=>{
//     var date=new Date();
//     var h=date.getHours();
//     var m=date.getMinutes();
//     var s=date.getSeconds();
//     var format=date.getHours()<12?'am':'pm';
//     document.getElementById('clock').innerHTML=`${h}:${m}:${s}${format}`;
// },1000);


setInterval(()=>{
    var date=new date();
    var time=date.toLocaleTimeString();
    document.getElementById('clock').innerHTML=time;
},1000);