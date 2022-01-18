window.onload = function(){
    var oInput = document.getElementById('pwd');
    oInput.value = ''; //获取密码
    var submitBtn = document.getElementById("register");
    //以下实现必须接受协议才能提交的功能
    submitBtn.onclick = function () {
    if(!document.getElementById("checkbox").checked) {
        alert("请先接受协议哦(*╹▽╹*)");
        return false;
        }
    };
}
   


//注册成功提示
function success() {
    alert('注册成功！欢迎你鸭✿✿ヽ(°▽°)ノ✿');
}

function check_code() { 
    var answer = document.getElementById("pwd").value; 
    var answer1 = document.getElementById("pwd1").value;
    var length = /.{9,15}/;
    var number = /[0|1|9]/;
    var letter = /([A-Z].*){3,}/;
    var special = /[#|&|*|?]/;
    var email = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    var email1 = document.getElementById("e").value;
    var chars = answer.split('');


    for(var j=0;j<answer.length;j++){
        for(var i=j+1;i<answer.length;i++){
            if(chars[i]==chars[j]){
                alert("有重复字符");
                return false;
            }
        }
    }


    if(!email.test(email1)){
        alert("邮箱格式有误");
        return false;
    }
    if(!length.test(answer)) {
        alert("密码长度大于等于9，小于等于15"); 
        return false;
    }
    else if(number.test(answer)) {
        alert("密码数字范围在[2-8]"); 
        return false;
    }
    else if(!letter.test(answer)) {
        alert("密码应包含三个大写字母"); 
        return false;
    }
    else if(!special.test(answer)) {
        alert("密码应至少包含#，&，*，？中的一个"); 
        return false;
    }
    else if(answer!=answer1){
        alert("两次密码不同");
        return false;
    }
    else{
        success();
    }
    function IsEmail(str) {
        var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        return reg.test(str);
    }
}
