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

const currMoodDefault = "# current mood";
const nextMoodDefault = "# mood I want";

const emoji = document.querySelectorAll(".emoji");
let selected = 0;
let currMood = "";
let nextMood = "";

const currMoodText = document.querySelector("#currMoodText");
const currMoodImg = document.querySelector("#currMoodImg");
const nextMoodText = document.querySelector("#nextMoodText");
const nextMoodImg = document.querySelector("#nextMoodImg");

const defaultDiv = document.querySelector(".defaultDiv");
const selectedDiv = document.querySelector(".selectedDiv");

for (let i = 0; i < emoji.length; i++) {
  emoji[i].addEventListener("click", changePic);
}

function changePic() {
  let picture = this.getAttribute("src").split("/")[2];
  let i = colorImg.findIndex((i) => i === picture);
  if (i >= 0) {
    if (selected < 2) {
      this.setAttribute("src", "./images/" + blackImg[i]);
      selected += 1;
      if (selected === 1) {
        currMood = this.dataset["tag"];
        currMoodText.textContent = "# " + currMood;
        currMoodImg.src = "./images/" + picture;
        currMoodImg.style.display = "inline-block";
      } else if (selected === 2) {
        nextMood = this.dataset["tag"];
        nextMoodText.textContent = "# " + nextMood;
        nextMoodImg.src = "./images/" + picture;
        nextMoodImg.style.display = "inline-block";
        defaultDiv.style.display = "none";
        selectedDiv.style.display = "inline-block";
      }
    }
  } else {
    i = blackImg.findIndex((i) => i === picture);
    this.setAttribute("src", "./images/" + colorImg[i]);
    selected -= 1;
    if (selected === 1) {
      nextMood = "";
      nextMoodText.textContent = nextMoodDefault;
      nextMoodImg.src = "";
      nextMoodImg.style.display = "none";
      defaultDiv.setAttribute("transform", "none");
      defaultDiv.style.display = "inline-block";
      selectedDiv.style.display = "none";
    } else if (selected === 0) {
      currMood = "";
      currMoodText.textContent = currMoodDefault;
      currMoodImg.src = "";
      currMoodImg.style.display = "none";
    }
  }
}
