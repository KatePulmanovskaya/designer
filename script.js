document.querySelector("button").disabled=true;
function ch() {
    var chbox;
    chbox=document.getElementById('check');
        if (chbox.checked) {
            document.querySelector("button").disabled=false;
        }
        else {
            document.querySelector("button").disabled=true;
        }
    }
function sendMail() {
    let email = document.querySelector("#email").value;
    let name = document.querySelector("#name").value;
    let tel = document.querySelector("#tel").value;
    var link = "mailto:mountflyaerobic@gmail.com"
             + "?subject=Заявка с сайта MOUNTFLY"
             + "&body=Имя: "+name+"\n"+"   Телефон: "+tel
    ;

    window.location.href = link;
}