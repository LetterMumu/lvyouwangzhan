function setTab(m, n) {
    var tli = document.getElementById("menu" + m).getElementsByTagName("li");
    var mli = document.getElementById("main" + m).getElementsByTagName("ul");
    for (i = 0; i < tli.length; i++) {
        tli[i].className = i == n ? "hover" : "";
        mli[i].style.display = i == n ? "block" : "none";
    }
}

function zc(){
    var number1=document.getElementById("zc_name").value;
    var pwd1=document.getElementById("zc_password1").value;
    var pwd2=document.getElementById("zc_password2").value;
    if(number1==""||pwd1==""||pwd2==""){
        alert("不能有为空项");
    }else if(pwd1!=pwd2){
        alert("两次密码输入不一致");
    }else{
        alert("注册成功");
        window.location.href="../index.html"
    }
}

function dl(){
    var num1=document.getElementById("dl_name").value;
    var pwd=document.getElementById("dl_pwd").value;
    if(num1==""||pwd==""){
        alert("请输入正确的密码组合");
    }else{
        window.location.href="../index.html"
    }
}
function qx() {
    alert("确定取消？");
    window.location.href="../index.html";
}

function cz(){
    alert("确定重置？");
    document.getElementById("zc_name").value="";
    document.getElementById("zc_password1").value="";
    document.getElementById("zc_password2").value="";
}