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
const statusText = document.querySelector(".status-text");

const messages = [
  "Scanning stocking history...",
  "Cross-referencing elf reports...",
  "Checking cookie consumption...",
  "Verifying reindeer interactions...",
  "Analyzing holiday attitude...",
  "Decrypting wish list...",
  "Consulting Mrs. Claus...",
  "Replaying mall Santa footage...",
  "Calculating sparkle levels...",
  "Loading emotional intelligence..."
];

let bounceInterval;
let messageInterval;

function startMeterChaos() {
  // Bouncing meter
  bounceInterval = setInterval(() => {
    const randomWidth = Math.floor(Math.random() * 80) + 10;
    meterFill.style.width = randomWidth + "%";
  }, 200);

  // Rotate messages every second
  let msgIndex = 0;
  messageInterval = setInterval(() => {
    statusText.textContent = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;
  }, 1000);

  // Stop after 8 seconds
  setTimeout(settleMeter, 8000);
}

function settleMeter() {
  clearInterval(bounceInterval);
  clearInterval(messageInterval);

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
}

// Start
startMeterChaos();
