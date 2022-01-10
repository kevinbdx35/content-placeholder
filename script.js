"use struct";

const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profil_img = document.getElementById("profil_img");
const names = document.getElementById("name");
const dates = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1641759275530-e0a69efe0ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    alt="Surf Picture"/>`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
    error expedita modi. Reprehenderit itaque quidem explicabo, temporibus
    ipsum ex inventore.`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Profil picture"/>`;
  names.innerHTML = `John Doe`;
  dates.innerHTML = `Oct 08, 2022`;

  animated_bgs.forEach(function (bg) {
    bg.classList.remove("animated-bg");
  });
  animated_bg_texts.forEach(function (bg) {
    bg.classList.remove("animated-bg-text");
  });
}
