const details=
{
  user_name:"loki",
  pass_word:"12345"
};
 var user=document.getElementById("user_details").addEventListener("submit",function(event){
    event.preventDefault()
    var usernameis=document.getElementById("username").value;
    var passwordis=document.getElementById("password").value;

if(usernameis==details.user_name&&passwordis==details.pass_word){
  window.location.href="./exe1.html";
}
else{
    document.getElementById("error").textContent="invalid user name or password";
}
})