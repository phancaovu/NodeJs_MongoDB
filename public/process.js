// thực hiện bắt sự kiện 
alert("????????????????????")



$(document).ready(function(){

  $("btnlogin").click(function(){
    $.post("./login",{
      uername: $("username").val(),
      password: $("password").val()
    },function(data){
      console.log(data) 
    })
  })
    
});