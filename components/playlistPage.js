  
  class Music {
    constructor(title, author, album_pic) {
      this.title = title;
      this.author = author;
      this.album_pic = album_pic;
    }
  }
  
  //import {Music} from './Music.js';

  //emotions display vars
  let emotion_1_value = "null";
  let emotion_2_value = "null";
  
  //playlist vars
  let playlist_list = [];
  

  //emotions display
  let emotion_1 = document.querySelector("#emotion_1");
  emotion_1.innerHTML = `<button id="whiteBtn">` + emotion_1_value + `</button> the sin,`;

  let emotion_2 = document.querySelector("#emotion_2");
  emotion_2.innerHTML = `<button id="whiteBtn">` + emotion_2_value + `</button> the sinner`;


  //playlist generation and display
  let playlist = document.querySelector("#playlistDiv");

  let m1 = new Music("Dynamite", "BTS", "./images/spotify_logo.png");
  let m2 = new Music("Young Blood", "5 seconds of summer", "./images/spotify_logo.png");
  playlist_list.push(m1, m2);

  for(let i=0; i<playlist_list.length; i++) {
    playlist.innerHTML += `
    <button id="playlistBtn" style="width: 100%">
      <div style="width: 15%; float: left">
        <img src="` + playlist_list[i].album_pic + `" style="height: 0.8cm;">
      </div>
      <div style="margin-left: 15%">
        <p>` + playlist_list[i].title + `</p>
        <p>` + playlist_list[i].author + `</p>
      </div>
    </button>`
  }