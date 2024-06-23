const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/*정규 표현식을 이용하여 사용자가 입력한 이메일 확인 */

function emailCheck() {
  const userEmail = document.querySelector("#userEmail").value;

  if (emailReg(userEmail)) {
    return userEmail;
  } else {
    throw new Error("유효하지 않은 형식의 이메일입니다.");
  }
}

/*정규 표현식을 이용하여 사용자가 입력한 패스워드 확인 */
function pwCheck() {
  const userPassword = document.querySelector("#userPassword").value;

  if (pwReg(userPassword)) {
    return userPassword;
  } else {
    throw new Error("유효하지 않은 형식의 패스워드입니다.");
  }
}

/*이메일, 패스워드 동일하게 입력하였을 경우 welcome페이지 이동, 다를 경우 alert 출력*/
const loginButton = document.querySelector(".btn-login");

function handleClickLogin(e) {
  e.preventDefault();

  if (emailCheck() === user.id && pwCheck() === user.pw) {
    location.href = "./welcome.html";
  } else {
    alert("이메일 또는 패스워드가 맞지 않음");
  }
}

loginButton.addEventListener("click", handleClickLogin);
