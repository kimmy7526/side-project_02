//Panel
const panels = document.querySelectorAll(".panel")
panels.forEach((panel) => {
    panel.addEventListener("click", toggleOpen)
    panel.addEventListener("transitionend", toggleActive)
})

function toggleOpen() {
    this.classList.toggle("open")
}
function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName !== "flex-grow") return
    this.classList.toggle("open-active")
}

//login (以六角AJAX作為練習)
//lovef2e@hexschool.com
//12345678
let login = document.querySelector('#logIn')
login.addEventListener('click', loginCheck)

function loginCheck() {
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let account = {}
    account.email = email
    account.password = password
    // console.log(account)
    
    let xhr = new XMLHttpRequest()
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signIn')
    xhr.setRequestHeader('Content-type', 'application/json')
    let data = JSON.stringify(account)
    xhr.send(data)
    xhr.onload = function () {
        let callbackData = JSON.parse(xhr.responseText)
        let msg = callbackData.message;
        if (msg == '登入成功') {
            alert('登入成功')
        } else {
            alert('此帳號不存在或帳號密碼錯誤')
        }

    }
}
