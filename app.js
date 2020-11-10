/*this for sign up btn clcik function all requerments
this have if else some condition and this have some popup alert
*/


document.querySelector("#submitbtn").addEventListener("click",function(){

 var namevar= document.querySelector("#nameid").value;
 var emailvar= document.querySelector("#emailid").value;
 var newpwdvar=document.querySelector("#newpwd").value;
 var Confirmpwdvar=document.querySelector("#Confirmpwd").value;
var newpwdvarcount =newpwdvar.length;
var Confirmpwdvarcount=Confirmpwdvar.length;



// if password mached and password length is low by Eight then alert show popup window//

if(newpwdvar===Confirmpwdvar && newpwdvarcount==8  && Confirmpwdvarcount==8){
	document.querySelector("#mydiv").classList.add("showkoro");
document.querySelector(".showkoro").setAttribute("style","transform: translate(400px,-51px);");
document.querySelector(".showkoro h1").innerHTML="Thank You!Your Password Mached!"+"<br/>";

}

// if password value length low by Eight then showing alert "Your password is to Short"//

else if(newpwdvarcount<8 && Confirmpwdvar<8){
alert("Your Password is to Short!");
}


else if(namevar=" "){
alert("please fillup the all condition!");
}

// jodi password value length soman na hoy  and password mached na hoy tahole alert show korbe "Your Password Not mached"//
else if(newpwdvarcount!=Confirmpwdvarcount && newpwdvar!=Confirmpwdvar ){
alert("Your Password Not Mached!");
}

//if password soman na hoy abon password value length 8 er kom hoy tahole showing alert"Your Password is and is to Short"//
else if(newpwdvar!=Confirmpwdvar && newpwdvarcount<8  &&Confirmpwdvarcount<8){
alert("Your Password incorrect and is to Short!");
}

else if(newpwdvarcount<8 && Confirmpwdvarcount<8   &&  newpwdvar==Confirmpwdvar){
alert("!Password Mached but is to Short");
}

//for comand
else if(newpwdvar==Confirmpwdvar && newpwdvarcount>16 && Confirmpwdvarcount>16){
alert("Password Mached but is to be Longer!");
}

//for comand
else if(newpwdvarcount==Confirmpwdvarcount && newpwdvar!=Confirmpwdvar){
alert("You Password incorrect!");

}


else if(emailvar===1){

alert("alhamdulillah");

}
//for comand
else {
	alert("Your Password Wrong!");
}


});

//popup hide for this//

document.querySelector("#mydiv").addEventListener("click",function(){

document.querySelector(".showkoro").setAttribute("style","transform: translate(400px, -200px);");

});
