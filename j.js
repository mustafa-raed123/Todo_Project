let Name = prompt("Please enter your name");
let gender = prompt("Please enter your gender ");

if(gender !=="male" && gender !=="female"){
    alert("invalid message, the message should be male or female")

}

let age = prompt("Please enter your age");




if(age <= 0  ){
    alert("Invalid input. age should be greater than zero");
    
}
let message = confirm("do you want to skip the welcoming message?");

if(message){
  
     if(gender ==="male" ){
        alert ("Welcome Message MR." + Name + ", the age is" + age )
    }else if(gender ==="female"){
        alert ("Welcome Message Ms." + Name + "the age is" + age )
    }else {
        alert ("Welcome Message"  )
    }
}
let arr =[];
function studentOrNot(){
    let student = prompt("are you student?  yes / no");
    
    arr.push(student || "invalid");
   
}
function marridOrNot(){
    let marrid = prompt("are you marrid?  yes / no");
    arr.push(marrid || "invalid");
   
}


function workOrNot(){
    
    let work = prompt("are you work?  yes / no");
    arr.push(work || "invalid")
    
}
studentOrNot();
marridOrNot();
workOrNot();
function printarray(arr){
    arr.forEach((er)=>{
        console.log(er)
    })
}
printarray(arr)
