let img_1 = document.getElementById("img1");
let img_2 = document.getElementById("img2");
let img_3 = document.getElementById("img3");
let img_4 = document.getElementById("img4");
let big_i = document.getElementById("big");

if (sessionStorage.length > 0) {
  big_i.src = sessionStorage.sorce;
}

img_1.onclick = function () {
  big_i.src = img_1.src;
  sessionStorage.sorce = big_i.src;
};
img_2.onclick = function () {
  big_i.src = img_2.src;
  sessionStorage.sorce = big_i.src;
};
img_3.onclick = function () {
  big_i.src = img_3.src;
  sessionStorage.sorce = big_i.src;
};
img_4.onclick = function () {
  big_i.src = img_4.src;
  sessionStorage.sorce = big_i.src;
};
