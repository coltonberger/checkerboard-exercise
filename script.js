let body = document.getElementsByTagName("body")[0];

  for (let i = 0; i < 63; i++) {
  let div = document.createElement("div");
    div.style.width = "11.1%"
    div.style.float = "left"
    div.style.paddingBottom = "11.1%"
    div.style.backgroundColor = getRandomColor();

  function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  function changeColor(){
    for (let j = 0; i < body.children.length; j++) {
      body.children[j].style.backgroundColor = getRandomColor();
    }
  }

  body.appendChild(div)
  setInterval(changeColor, 2000);
}
