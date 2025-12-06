console.log("Santa's script.js is loaded and ready to be tacky.");

function showOverlay(title, message) {
  const overlay = document.createElement("div");
  overlay.className = "reward-overlay";
  overlay.innerHTML = `
    <div class="reward-box">
      <h2>${title}</h2>
      <p>${message}</p>
      <button id="close-overlay">Continue</button>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById("close-overlay").addEventListener("click", () => {
    overlay.remove();
  });
}


function showCandyPopup() {
  const popup = document.createElement("div");
  popup.className = "tacky-popup";
  popup.innerHTML = `
    🎁 <strong>CONGRATS!</strong> You have won <span style="text-decoration: underline;">10,000 virtual candy canes</span>!<br>
    <button class="close-popup">No thanks, this seems legit</button>
  `;

  document.body.appendChild(popup);

  const closeBtn = popup.querySelector(".close-popup");

  if (closeBtn) {
    closeBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      popup.remove();
    });
  }

  // Optional: clicking anywhere on the popup closes it too
  popup.addEventListener("click", function () {
    popup.remove();
  });
}

// Show the first popup after 5 seconds
setTimeout(showCandyPopup, 5000);

// Then show another one every 20 seconds
setInterval(showCandyPopup, 20000);

const chaosButton = document.getElementById("do-not-click");
const countDisplay = document.getElementById("click-count");

let clickCount = parseInt(localStorage.getItem("doNotClickCount") || "0", 10);

// Flags so we only trigger each prize once per page load
let snowStarted = false;
let prize72Shown = false;
let prize9Shown = false;

function show9Prize() {
  prize9Shown = true;
  showOverlay(
    "🏆 Achievement Unlocked",
    "You have clicked 9 times. Instruction-following is clearly optional for you."
  );
}


// If there is already a count from before, show it
if (clickCount > 0 && countDisplay) {
  countDisplay.style.display = "block";
  countDisplay.textContent = `You failed… ${clickCount} times.`;
}

// 40-click prize: start snowflakes
function show40Prize() {
  showOverlay(
    "❄ SNOW MODE UNLOCKED ❄",
    "You clicked 40 times. The North Pole server has unleashed decorative chaos."
  );
}
function startSnow() {
  snowStarted = true;

  for (let i = 0; i < 30; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent = "❄";
snowflake.style.fontSize = "40px";


    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
    snowflake.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(snowflake);
  }

  console.log("Snow mode activated at 40 clicks!");
}

// 72-click prize: show secret message
function show72Prize() {
  prize72Shown = true;
  showOverlay(
    "🎄 SECRET 72-CLICK CLUB",
    "You have achieved a truly unnecessary level of dedication. Santa’s QA team is impressed and mildly alarmed."
  );
}

// 100-click prize: disable button and change text
function lockButton() {
  chaosButton.disabled = true;
  chaosButton.textContent = "you're extremely bad at following instructions.";
}

// Main click handler
if (chaosButton) {
  chaosButton.addEventListener("click", function () {
    if (chaosButton.disabled) return;

    // Original chaos behavior (optional, keep or remove)
    alert("You were explicitly told not to click that.");
    document.body.style.animation = "chaos-bg 0.5s infinite";

    const headline = document.querySelector("h1");
    if (headline) {
      headline.textContent = "SANTA'S DIAL-UP DASHBOARD: CHAOS MODE ACTIVATED";
    }

    // Update count
    clickCount++;
    localStorage.setItem("doNotClickCount", clickCount);

    if (countDisplay) {
      countDisplay.style.display = "block";
      countDisplay.textContent = `You failed… ${clickCount} times.`;
    }

    // Milestones
if (clickCount >= 9 && !prize9Shown) {
  show9Prize();
}

   if (clickCount >= 40 && !snowStarted) {
  startSnow();
  show40Prize();
}


    if (clickCount >= 72 && !prize72Shown) {
      show72Prize();
    }

    if (clickCount >= 100) {
      lockButton();
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
