class Music {
  constructor(title, author, album_pic, link) {
    this.title = title;
    this.author = author;
    this.album_pic = album_pic;
    this.link = link;
  }
}

//import {Music} from './Music.js';

//emotions display vars
let emotion_1_value = window.localStorage.getItem("currMood");
let emotion_2_value = window.localStorage.getItem("nextMood");

//playlist vars
let playlist_list = [];

//emotions display
let emotion_1 = document.querySelector("#emotion_1");
emotion_1.innerHTML =
  `<button id="whiteBtn">` +
  "# " +
  emotion_1_value +
  `<img class="emoji_img" src=${window.localStorage.getItem("currImg")}/>` +
  `</button> the sin,`;

let emotion_2 = document.querySelector("#emotion_2");
emotion_2.innerHTML =
  `<button id="whiteBtn">` +
  "# " +
  emotion_2_value +
  `<img class="emoji_img" src=${window.localStorage.getItem("nextImg")}/>` +
  `</button> the sinner`;

//playlist generation and display
let playlist = document.querySelector("#playlistDiv");

let m1 = new Music(
  "Dynamite",
  "BTS",
  "./images/spotify_logo.png",
  "https://open.spotify.com/track/5aHwYjiSGgJAxy10mBMlDT?si=a3cb43d5539f48ce"
);
let m2 = new Music(
  "Young Blood",
  "5 seconds of summer",
  "./images/spotify_logo.png",
  "https://open.spotify.com/track/2iUXsYOEPhVqEBwsqP70rE?si=b86548bdc1544e27"
);
let m3 = new Music("Title", "Author", "./images/spotify_logo.png", "null");
playlist_list.push(m1, m2, m3, m1, m1, m1);

for (let i = 0; i < playlist_list.length; i++) {
  playlist.innerHTML +=
    `
      <a href="` +
    playlist_list[i].link +
    `" target="_blank">
        <button id="playlistBtn">
          <div style="width: 15%; float: left">
            <img src="` +
    playlist_list[i].album_pic +
    `" style="height: 2.5cm;">
          </div>
          <div style="margin-left: 15%">
            <p>` +
    playlist_list[i].title +
    `</p>
            <p>` +
    playlist_list[i].author +
    `</p>
          </div>
        </button>
      </a>`;
}
