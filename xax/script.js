let arr = [
  'images/caxik.jpg',
  'images/mm.jpg',
  'images/147m.jpg',
  'images/caxik.jpg',
  'images/147m.jpg',
  'images/mm.jpg',
  'images/caxik.jpg',
  'images/mm.jpg',
  'images/147m.jpg',
  'images/caxik.jpg',
  'images/147m.jpg',
  'images/mm.jpg'
]
//create your board
let gg = document.getElementsByClassName('image')
for (let i = 0; i < arr.length; i++) {
  let image = document.createElement('img');
  image.src ="images/blue.jpg";
  image.setAttribute('width','250px');
  image.setAttribute('height','150px');
  image.setAttribute('id',`card${i}`);
  gg[0].appendChild(image);
}
//handleClick and check for matches 
let img = {}
let gago;
let defaultPic = 'images/blue.jpg'

for (let i = 0; i < arr.length; i++) {
  img[i] = document.getElementById(`card${i}`)
 
  img[i].addEventListener("click", () => handleClick(i))
}

function handleClick(i) {
  img[i].src = arr[i]

  if (gago == undefined) {
    gago = img[i]
    console.log("hi")
  } else if (img[i].src == gago.src) {
    gago = undefined
    console.log("equal")
  } else {
    setTimeout(function () {
      gago.src = defaultPic
      img[i].src = defaultPic
      gago = undefined
      console.log("byu")
    }, 1000
    )
  }
}
