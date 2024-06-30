/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

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
