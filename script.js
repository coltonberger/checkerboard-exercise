// Your JS goes here
let body = document.getElementsByTagName("body")[0];

  for (let i = 0; i < 63; i++) {
    let div = document.createElement("div");
    div.style.width = "11.1%"
    div.style.float = "left"
    div.style.paddingBottom = "11.1%"

  if (i % 2 === 0) {
    div.style.backgroundColor = "black"
  } else {
    div.style.backgroundColor = "red"
  }

  body.appendChild(div)
}
