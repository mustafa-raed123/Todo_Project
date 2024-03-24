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

let student = prompt("are you student?  yes / no");
    arr.push(student);
    let marrid = prompt("are you marrid?  yes / no");
    arr.push(marrid);
    let work = prompt("are you work?  yes / no");
    arr.push(work);
function answerquestion(arr){

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] ==''){
            console.log("invalid");
            arr[index] ="invalid";
                   
        }
        if(arr[index] !="yes" && arr[index]!="no"){
            console.log("the answer should be 'yes or no'")
            arr[index] = "invalid";       
        }      
    }
    return arr;
}
console.log(answerquestion(arr))



