const head = document.querySelector(".head")
const tip = document.querySelector(".js-tip");


function tipover() {
  tip.innerText = `"타이틀을 더블클릭 하면 이름변경이 가능합니다"`
  tip.style.fontSize = "25px"
  tip.style.color = "#7200da"
  tip.style.fontWeight = "bold"
  tip.style.fontFamily  ="Malgun Gothic"
};
function tipdefault() {
  tip.innerText = "TIP";
  tip.style.color = "#000000"
  tip.style.fontFamily = "sans-serif";
  tip.style.display = "flex";
  tip.style.flexDirection = "column";
  tip.style.justifyContent = "center";
  tip.style.alignItems = "center";
  tip.style.fontSize = "15px"
  tip.style.fontWeight = "normal"
}

const superEventHandler = {
  mouseover: function handleMouseOver() {
    head.innerText = "😸";
    head.style.fontSize = "60px"; 
  },
  mouseleave: function handleMouseLeave() {
    head.innerText = "😺";
    head.style.fontSize = "60px";
  },
  mouseclick: function handleMouseClick() {
    head.innerText = "😻";
    head.style.fontSize = "60px";
  }
}
tip.addEventListener("mouseover", tipover);
tip.addEventListener("mouseleave",tipdefault);
head.addEventListener("mouseover", superEventHandler.mouseover);
head.addEventListener("mouseleave", superEventHandler.mouseleave);
head.addEventListener("click", superEventHandler.mouseclick);