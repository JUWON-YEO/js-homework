# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

[js 파일 보기](https://github.com/JUWON-YEO/js-homework/blob/main/naver_login/js/main.js)

### emailCheck(), pwCheck() 함수 설명

```
function emailCheck() {
  const userEmail = document.querySelector("#userEmail").value;

  if (emailReg(userEmail)) {
    return userEmail;
  } else {
    throw new Error("유효하지 않은 형식의 이메일입니다.");
  }
}

function pwCheck() {
  const userPassword = document.querySelector("#userPassword").value;

  if (pwReg(userPassword)) {
    return userPassword;
  } else {
    throw new Error("유효하지 않은 형식의 패스워드입니다.");
  }
}
```

- `userEmail`,`userPassword` 변수를 선언하고 마크업 문서 내에 있는 아이디값이 `userEmail`,`userPassword` 태그를 찾아 `value` 값을 변수에 할당
- 조건문을 사용하여 `emailReg(userEmail)`,`pwReg(userPassword)` 함수를 실행한 결과값이 참일경우 `userEmail`, `userPassword` 리턴하고 거짓일 경우 콘솔창에 에러 출력

### handleClickLogin() 함수 설명

```
const loginButton = document.querySelector(".btn-login");

function handleClickLogin(e) {
  e.preventDefault();

  if (emailCheck() === user.id && pwCheck() === user.pw) {
    window.location.href = "./welcome.html";
  } else {
    alert("이메일 또는 패스워드가 맞지 않음");
  }
}

loginButton.addEventListener("click", handleClickLogin);
```

- `loginButton` 변수에 마크업 문서 내에 있는 `btn-login` 클래스를 찾아서 할당
- `handleClickLogin` 함수를 생성하고 ` e.preventDefault();`로 버튼태그 능력을 상실시킨다.
- 조건문을 사용하여 `emailCheck()`, `pwCheck()`의 함수를 거쳐서 나온 값이`user.id`,`user.pw`와 동일하다면 welcome 페이지로 이동
- 동일하지 않다면 alert 메세지 출력
- `addEventListener` 로 클릭 이벤트를 실행시킨다.

### 과제후기

> 과제 시작할 때 어디서부터 해야할 지 감을 못 잡았는데 실습때 하나씩 만들어나가는 것이 생각나면서 일단 이메일을 입력한 값을 찾아 콘솔에 출력하는것부터 시작하니까 점점 어떤 느낌으로 해야하는지 이해되기시작했다. 값을 조건처리하고 패스워드도 같은 방식으로 처리해봤다. 이벤트 함수까지 만들어서 링크가 넘어가는 것까지 구현했지만 완벽하지 않은 느낌이 든다.. 뿌듯하면서도 안 뿌듯..🤔
