var currentWindow = window.location.href;
// console.log(currentWindow);
if (currentWindow === "file:///home/andrei/Projects/my-portfolio/index.html")
  document.getElementById("about").style.background = "#4caf50";
else document.getElementById("contact").style.background = "#4caf50";
