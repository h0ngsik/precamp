let userName = ""
let email = ""
let password = ""
let gender = ""
let phoneNumber = ""
let 동의여부 = ""
let introduction = ""
let joinDate = getToday()

let 인증번호_요청 = false

let timer_task

function 회원가입하기() {
    alert(`회원가입을 축하합니다.
가입일시: ${joinDate})`)
    userName = document.getElementById("userName").value
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    phoneNumber = document.getElementById("phoneNumber").value
    introduction = document.getElementById("자기소개_텍스트필드").value
    동의하기눌렀는지확인하기()
    document.getElementById("가입자_목록").innerHTML = "<div class='가입자' onclick='수강생정보조회하기()'><img src='./img/profile.png'>수강생1</div>"
}

function encryptionPhoneNumber() {
    const splitPhoneNumber = phoneNumber.split("-")
    console.log(splitPhoneNumber)

    phoneNumber = `${splitPhoneNumber[0]}-****-${splitPhoneNumber[2]}`
}

function 수강생정보조회하기() {
    if (phoneNumber.length != 0) {
        encryptionPhoneNumber()
    }
    
    alert(`이름: ${userName}
이메일: ${email}
비밀번호: ${password}
성별: ${gender}
전화번호: ${phoneNumber}
동의여부: ${동의여부}
자기소개: ${introduction}
(가입일시: ${joinDate})`)
}

function 인증번호요청하기() {
    인증번호_요청 = true
    const 인증번호 = String(Math.floor((Math.random() * 1000000))).padStart(6, "0")
    document.getElementById("인증번호_텍스트").innerText = 인증번호
    console.log(인증번호)
    onTimer()
    인증하기버튼_활성화()
}

function onTimer() {
    clearInterval(timer_task)

    let time = 10

    timer_task = setInterval(function() {
        time -= 1

        const minute = String(Math.floor(time / 60)).padStart(2, "0")
        const seconds = String(time % 60).padStart(2, "0")

        document.getElementById("인증_타이머").innerText = `${minute}:${seconds}`

        if (time === 0) {
            offTimer()
        }
    }, 1000)
}

function offTimer() {
    clearInterval(timer_task)
    document.getElementById("인증_타이머").innerText = ""
    인증하기버튼_비활성화()
}

function 인증하기버튼_활성화() {
    document.getElementById("인증하기_버튼").style = "background-color: #491449"
    document.getElementById("인증하기_버튼").disabled = false
}

function 인증하기버튼_비활성화() {
    document.getElementById("인증하기_버튼").style = "background-color: #C7C7C7"
    document.getElementById("인증하기_버튼").disabled = true
}

function 인증하기버튼누름() {
    offTimer()
    인증하기버튼_비활성화()
    document.getElementById("인증하기_버튼").innerText = "인증 완료"
}

function getGender(event) {
    gender = event.target.value
}

function 동의하기눌렀는지확인하기() {
    const checkbox = document.getElementById("checkbox");

    if (checkbox.checked) {
        동의여부 = "Y"
    } else {
        동의여부 = "N"
    }
}

function getToday() {
    const date = new Date()
    const convertMonth = String(date.getMonth() + 1).padStart(2, "0")
    const convertDate = String(date.getDate()).padStart(2, "0")
    const result = `${date.getFullYear()}-${convertMonth}-${convertDate}`
    
    return result
}