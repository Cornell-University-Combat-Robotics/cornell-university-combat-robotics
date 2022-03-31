let imagePaths = []
let imagePathsToAlt = {
  'box': "team members assembling a box",
  'firmware-0': "the firmware team working",
  'firmware-1': "the firmware team working", 
  'firmware-2': "the firmware team working",
  'firmware-3': "the firmware team working",
  'manny': "one team member dressing up as manny",
  'prototype': "tea member holding up a prototype",
  'quad': "team members hanging out on the quad",
  'receipt': "a long receipt from a team dinner",
  'seesaw': "team members playing on a seesaw",
  'bois': "team members vibing in the shop",
  'docs': "documentation and lance",
  'idknames': "a happy team member",
  'laptops': "a laptop-heavy work session",
  'rightouterwall': "the right outer wall of lance",
  'screws': "team members organizing screws",
  'snip': "team member cutting foam",
  'wall2': "assembly of one of lance's walls",
  'kinetic-rolling2': "kinetic team members",
  'minimanny' : "A small 3D printed manny",
  'inventory': "team members at an 'inventory party'",
  'weapondemo': "first demonstration of lance's weapon",
  'unamused': "team member working on lance",
  "promo": "sportsman team posing with our promo cards",
  "arduino": "firmware debugging an arduino",
  "richard": "kinetic posing with richard",
  "bizsolder": "business and media soldering",
  "itsrichard": "team members posing with richard",
  "hat": "spencer gets a new hat",
  "testbox": "assembly of our testbox",
  "stik": "the death of big stick during testing",
  "cardpattern": "our promotional testing event cards"
};
const refreshImagePaths = () => {
  imagePaths = Object.keys(imagePathsToAlt)
  imagePaths.sort((a, b) =>  Math.random() - 0.5)
}
function rotateAndSetImages() {
  refreshImagePaths();
  var pics = document.getElementsByClassName("gallery-img")
  console.log(pics)
  Array.from(pics).forEach((pic) => {
    var randomNum = Math.random() * 12 - 6
    //pic.style.setProperty("transform", `rotate(${randomNum}deg)`)
    var imagePath = imagePaths.pop()
    pic.setAttribute('src', './gallery-pics/' + imagePath + '.jpg')
    pic.setAttribute('alt', imagePathsToAlt[imagePath])
    console.log(pic)
  })
}