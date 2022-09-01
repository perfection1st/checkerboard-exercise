// Bonus Feature : Play music when document body is clicked
let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);


for(let i = 0; i < 81; i++) {
  var createTile = document.createElement('div');
  createTile.classList.add('tile');
  document.body.appendChild(createTile);
}

for(i = 0; i < 81; i++) {
  let tile = document.getElementsByClassName('tile')[i];
  tile.style.cssFloat = "left";
  tile.style.minWidth = "11.1%";
  tile.style.paddingBottom = "11.1%";
  tile.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
  setInterval(() => {
    tile.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16)); 
  }, 2000);
}

// Audio player
document.body.onclick = function() {
  music = new Audio('http://elijahponders.com/music/wiskim-empty-rivers.mp3');
  music.loop = true;
  music.play();
}