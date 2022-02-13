const imagePaths = [
  'box',
  'firmware-0',
  'firmware-1',
  'firmware-2',
  'firmware-3',
  'manny',
  'prototype',
  'quad',
  'receipt',
  'seesaw'
];
imagePaths.sort(() => Math.random() < 0.5)
function rotateAndSetImages() {
  var pics = document.getElementsByClassName("gallery-img")
  console.log(pics)
  Array.from(pics).forEach((pic) => {
    var randomNum = Math.random() * 20 - 10
    pic.style.setProperty("transform", `rotate(${randomNum}deg)`)
    var imagePath = imagePaths.pop()
    pic.setAttribute('src', './gallery-pics/' + imagePath + '.jpg')
    console.log(pic)
  })
  // pls don't roast me for putting the script inline, it's simple enough right heh
}