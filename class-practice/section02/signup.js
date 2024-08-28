function 가입하기() {
    // 1. 이메일을 받는다.
    const email = "codecamp@gmail.com"

    // 2. "@"를 기준으로 아이디와 도메인을 분리한다.
    const splitEmail = email.split("@")
    
    const id = splitEmail[0]
    const domain = splitEmail[1]

    // 3. 뒤에 4자리를 "****"로 변경해야 하기 때문에 아이디 영역을 나눈다.
    const sliceId = id.slice(0, 4)
    console.log(sliceId)
    
    // 4. 아이디의 앞 4자리와 ****을 합친다.
    const asterisk = "****"

    // 5. 이메일을 다시 합친다.
    const securityEmail = `${sliceId}${asterisk}@${domain}`

    // 6. alert 을 통해 띄운다.
    alert(`가입된 이메일은: ${securityEmail} 입니다.`)
}