let imagePaths = []
const refreshImagePaths = () => {
  imagePaths = [
    'box',
    'firmware-0',
    'firmware-1',
    'firmware-2',
    'firmware-3',
    'manny',
    'prototype',
    'quad',
    'receipt',
    'seesaw',
    'bois',
    'docs',
    'idknames',
    'laptops',
    'rightouterwall',
    'screws',
    'snip',
    'wall2',
    'kinetic-rolling2',
    'minimanny'
  ];
  imagePaths.sort(() => Math.random() < 0.5)
}
function rotateAndSetImages() {
  refreshImagePaths();
  var pics = document.getElementsByClassName("gallery-img")
  console.log(pics)
  Array.from(pics).forEach((pic) => {
    var randomNum = Math.random() * 12 - 6
    pic.style.setProperty("transform", `rotate(${randomNum}deg)`)
    var imagePath = imagePaths.pop()
    pic.setAttribute('src', './gallery-pics/' + imagePath + '.jpg')
    console.log(pic)
  })
}