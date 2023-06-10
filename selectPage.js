window.localStorage.clear();
const colorImg = [
  "happy1.png",
  "happy2.png",
  "happy3.png",
  "love1.png",
  "love2.png",
  "love3.png",
  "fear1.png",
  "fear2.png",
  "fear3.png",
  "sad1.png",
  "sad2.png",
  "sad3.png",
  "angry1.png",
  "angry2.png",
  "angry3.png",
];

const blackImg = [
  "happy1_black.png",
  "happy2_black.png",
  "happy3_black.png",
  "love1_black.png",
  "love2_black.png",
  "love3_black.png",
  "fear1_black.png",
  "fear2_black.png",
  "fear3_black.png",
  "sad1_black.png",
  "sad2_black.png",
  "sad3_black.png",
  "angry1_black.png",
  "angry2_black.png",
  "angry3_black.png",
];

const hoverImg = [
  "happy1_hover.png",
  "happy2_hover.png",
  "happy3_hover.png",
  "love1_hover.png",
  "love2_hover.png",
  "love3_hover.png",
  "fear1_hover.png",
  "fear2_hover.png",
  "fear3_hover.png",
  "sad1_hover.png",
  "sad2_hover.png",
  "sad3_hover.png",
  "angry1_hover.png",
  "angry2_hover.png",
  "angry3_hover.png",
];

const currMoodDefault = "# current mood";
const nextMoodDefault = "# mood I want";

const emoji = document.querySelectorAll(".emoji");
let selectedList = [];
let selected = 0;
let currMood = "";
let nextMood = "";

const currMoodText = document.querySelector("#currMoodText");
const currMoodImg = document.querySelector("#currMoodImg");
const nextMoodText = document.querySelector("#nextMoodText");
const nextMoodImg = document.querySelector("#nextMoodImg");

const defaultDiv = document.querySelector(".defaultDiv");
const selectedDiv = document.querySelector(".selectedDiv");

const state = Array.from({ length: 15 }, () => 0);

for (let i = 0; i < emoji.length; i++) {
  emoji[i].addEventListener("click", changePic);
  emoji[i].addEventListener("mouseover", mouseover);
  emoji[i].addEventListener("mouseout", mouseleave);
}

function StopShaking() {
  for (let i = 0; i < emoji.length; i++) {
    emoji[i].setAttribute("style", "animation-play-state: paused");
  }
}

function RestartShaking() {
  for (let i = 0; i < emoji.length; i++) {
    if (selectedList[0] !== emoji[i]) {
      emoji[i].setAttribute("style", "animation-play-state: running");
    }
  }
}

function mouseover(e) {
  const idx = e.target.dataset.idx;
  if (state[idx] === 0) {
    e.target.setAttribute("src", "./images/" + hoverImg[idx]);
  }
}

function mouseleave(e) {
  const idx = e.target.dataset.idx;
  if (state[idx] === 0) {
    e.target.setAttribute("src", "./images/" + colorImg[idx]);
  }
}

function changePic() {
  let picture = this.getAttribute("src").split("/")[2];
  console.log(picture);
  let i = hoverImg.findIndex((i) => i === picture);
  if (i >= 0) {
    if (selected < 2) {
      selectedList.push(this);
      this.setAttribute("src", "./images/" + blackImg[i]);
      this.setAttribute("style", "animation-play-state: paused");
      selected += 1;
      if (selected === 1) {
        currMood = this.dataset["tag"];
        currMoodText.textContent = "# " + currMood;
        let currSrc = "./images/" + colorImg[i];
        state[i] = 1;
        currMoodImg.src = currSrc;
        currMoodImg.style.display = "inline-block";
        window.localStorage.setItem("currMood", currMood);
        window.localStorage.setItem("currImg", currSrc);
      } else if (selected === 2) {
        nextMood = this.dataset["tag"];
        nextMoodText.textContent = "# " + nextMood;
        let nextSrc = "./images/" + colorImg[i];
        state[i] = 1;
        nextMoodImg.src = nextSrc;
        nextMoodImg.style.display = "inline-block";
        defaultDiv.style.display = "none";
        selectedDiv.style.display = "inline-block";
        window.localStorage.setItem("nextMood", nextMood);
        window.localStorage.setItem("nextImg", nextSrc);
        StopShaking();
      }
    }
  } else {
    i = blackImg.findIndex((i) => i === picture);
    this.setAttribute("src", "./images/" + colorImg[i]);
    this.setAttribute("style", "animation-play-state: running");
    selected -= 1;
    selectedList = selectedList.filter((e) => {
      return e !== this;
    });
    if (selected === 1) {
      nextMood = "";
      nextMoodText.textContent = nextMoodDefault;
      nextMoodImg.src = "";
      state[i] = 0;
      nextMoodImg.style.display = "none";
      defaultDiv.setAttribute("transform", "none");
      defaultDiv.style.display = "inline-block";
      selectedDiv.style.display = "none";
      window.localStorage.removeItem("nextMood");
      window.localStorage.removeItem("nextImg");
      RestartShaking();
    } else if (selected === 0) {
      currMood = "";
      currMoodText.textContent = currMoodDefault;
      currMoodImg.src = "";
      state[i] = 0;
      currMoodImg.style.display = "none";
      window.localStorage.removeItem("currMood");
      window.localStorage.removeItem("currImg");
    }
  }
}
