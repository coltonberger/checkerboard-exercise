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

  body.appendChild(div)
}
