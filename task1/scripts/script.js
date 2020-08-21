for (let i of document.getElementById("people").childNodes) {
  for (let j of i.childNodes) {
    for (let k of j.childNodes) {
      k.addEventListener("mouseenter", function () {
        this.style.background = "#f79974";
      });
      
      k.addEventListener("mouseleave", function () {
        this.style.background = 0;
      });
    } e 
  }
}