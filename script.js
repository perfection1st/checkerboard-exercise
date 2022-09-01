// Feature 2 created random color on every other square
function generateRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

var overlay = document.createElement('div');
document.body.appendChild(overlay);
overlay.setAttribute('id', 'overlay');
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "linear-gradient(0deg, rgba(255,242,182,0.45) 0%, rgba(218,0,0,0.75) 100%)";
overlay.style.zIndex = "2";
overlay.style.position = "fixed";



for(let i = 0; i < 81; i++) {
  var tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.cssFloat = "left";
  tile.style.minWidth = "11.1%";
  tile.style.paddingBottom = "11.1%";
  if(i % 2 === 0) {
    tile.classList.add('even');
    tile.style.backgroundColor = generateRandomColor();

  } else {
    tile.classList.add('odd');
    tile.style.backgroundColor = generateRandomColor();
  }
  document.body.appendChild(tile);

}