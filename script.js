console.log("Santa's script.js is loaded and ready to be tacky.");

function showCandyPopup() {
  const popup = document.createElement("div");
  popup.className = "tacky-popup";
  popup.innerHTML = `
    🎁 <strong>CONGRATS!</strong> You have won <span style="text-decoration: underline;">10,000 virtual candy canes</span>!<br>
    <button id="close-popup">No thanks, this seems legit</button>
  `;

  document.body.appendChild(popup);

  document.getElementById("close-popup").onclick = function () {
    popup.remove();
  };
}

// Show the first popup after 5 seconds
setTimeout(showCandyPopup, 5000);

// Then show another one every 20 seconds
setInterval(showCandyPopup, 20000);

const chaosButton = document.getElementById("do-not-click");

if (chaosButton) {
  chaosButton.addEventListener("click", function () {
    alert("You were explicitly told not to click that.");

    document.body.style.animation = "chaos-bg 0.5s infinite";

    const headline = document.querySelector("h1");
    if (headline) {
      headline.textContent = "SANTA'S DIAL-UP DASHBOARD: CHAOS MODE ACTIVATED";
    }
  });
}
const meterFill = document.querySelector(".meter-fill");
const statusText = document.querySelector(".naughty-nice p");

let bounceInterval;
let settled = false;

function startMeterChaos() {
  bounceInterval = setInterval(() => {
    const randomWidth = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    meterFill.style.width = randomWidth + "%";
  }, 200);

  // Stop after 8 seconds
  setTimeout(settleMeter, 8000);
}

function settleMeter() {
  clearInterval(bounceInterval);

  const result = Math.random() > 0.5 ? "nice" : "naughty";

  if (result === "nice") {
    meterFill.style.width = "95%";
    meterFill.style.background = "linear-gradient(to right, gold, lime)";
    statusText.textContent = "RESULT: ✅ SUPER NICE";
  } else {
    meterFill.style.width = "10%";
    meterFill.style.background = "linear-gradient(to right, darkred, red)";
    statusText.textContent = "RESULT: 🚨 VERY NAUGHTY";
  }

  settled = true;
}

// Start the meter when the page loads
startMeterChaos();
