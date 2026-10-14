const password =
document.getElementById("password");
const btn =
document.getElementById("showPassword");
btn.addEventListener(
"click",
()=>{
if(password.type==="password"){
password.type="text";
btn.innerHTML="🙈";
}
else{
password.type="password";
btn.innerHTML="👁";
}
});