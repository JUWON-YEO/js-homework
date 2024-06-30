# 엘리멘탈 포스터 슬라이드 구현

---

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성합니다.

---

[js 파일 보기](https://github.com/JUWON-YEO/js-homework/blob/main/poster/client/js/main.js)

## 전체 코드

```
const navigation = document.querySelector(".nav > ul");
const visualImage = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");
let currentAudio = null;

function handleClick(e) {
  e.preventDefault();

  const target = e.target.closest("li");

  if (!target) return;

  const index = target.dataset.index - 1;
  const baColor = data[index].color;
  const visualName = data[index].name.toLowerCase();
  const visualAlt = data[index].alt;
  const children = [...navigation.children];

  function setBgColor() {
    document.body.style.background = `linear-gradient(to bottom, ${baColor[0]},${baColor[1]})`;
  }

  function setImage() {
    visualImage.src = `./assets/${visualName}.jpeg`;
    visualImage.alt = `${visualAlt}`;

    gsap.from(visualImage, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      ease: "power2.in",
    });

    children.forEach((li) => {
      li.classList.remove("is-active");
    });

    target.classList.add("is-active");
  }

  function setNameText() {
    nickName.textContent = data[index].name;
  }

  function setAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    let audio = new Audio(`./assets/audio/${visualName}.m4a`);
    audio.volume = 0.1;
    audio.play();

    currentAudio = audio;
  }

  setBgColor();
  setImage();
  setNameText();
  setAudio();
}

navigation.addEventListener("click", handleClick);
```

## 함수 설명

### `setBgColor` 함수

- `setBgColor`함수는 `body`태그에 백그라운드 그라디언트 속성을 추가하고 속성값을 data.js에 있는 `color` 값을 설정

### `setImage` 함수

- `setImage`함수는 html문서 내 비주얼 이미지를 `visualImage`라는 변수에 할당하고 src를 data.js에 있는 name값을 가져와서 `toLowerCase()`를 돌려 소문자로 변환하여 `visualName`에 할당한 뒤 src 부분에 설정
- `alt` 텍스트도 data.js에서 alt값을 가져와서 할당
- `gsap`를 이용하여 애니메이션 구현
- `navigation`의 자식요소를 전개한뒤 `forEach`를 이용하여 `li`태그에 `is-active`클래스를 삭제시키고
- `classList.add()`를 이용하여 `target`이 된 `li` 태그에 `is-active` 클래스를 추가시킨다.

### `setNameText` 함수

- `setNameText`함수는 html문서 내 `nickName` 입력된 부분을 가져와서 data.js내에 있는 `name`값으로 할당

### `setAudio` 함수

- `setAudio`함수는 `New Audio` 생성자를 만들고 오디오 파일 경로를 `visualName` 변수를 이용하여 설정
- 오디오 재생 중 다른 썸네일을 클릭 시 기존 오디오를 중단시키기 위해 `currentAudio` 변수에 `audio` 를 할당 시킨 뒤 함수가 실행 될 때 `currentAudio`가 있다면 `currentAudio`를 중단시키는 조건을 설정

## 과제후기

> 기존 범쌤과 같이 만든 delegation을 참고하여 과제를 작성하였다. 기능을 먼저 하나씩 구현하고 모든 기능을 구현 한 뒤 함수를 생성하여 기능별로 나눴다. 오디오부분은 처음 접해보는 기능이라 구글링을 통해 구현했다. 자바스크립트에 대해 잘 알기 전에는 오픈되어있는 코드를 가져다 사용하기만 했었는데 이렇게 그래도 좀 배웠다고 이젠 함수를 생성하고 기능을 구현하는 부분이 아주 조금은 익숙해졌다.
