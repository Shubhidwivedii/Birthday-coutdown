// ELEMENTS
const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const countertimer = document.querySelector(".countertimer");
const paragraph = document.querySelector(".note");
const container = document.querySelector(".container");

// TIME CONSTANTS
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// 🎂 BIRTHDAY DATE
const targetTime = new Date("2026-01-15T00:00:00").getTime();

// 🎉 CONFETTI FUNCTION
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
}

// 💖 HEART FUNCTION
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

// ⏳ COUNTDOWN
const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    // 🎉 BIRTHDAY TRIGGER
    if (difference <= 0) {
        clearInterval(interval);

        countertimer.style.display = "none";
        container.classList.add("birthday");

        heading.innerText = "🎉 HAPPIEST BIRTHDAY ADITYA 🎉";
        paragraph.innerText =
            "I never say I’m proud of you, but I’m the most proud of the man you have become. I never say I love you enough, but I love you the most. Trust me — jab main wapas aaungi, I will celebrate your birthday the way you want. 💫🎂";

        // 🎆 START ANIMATIONS
        setInterval(createConfetti, 150);
        setInterval(createHeart, 400);

        return;
    }

    // 🧮 UPDATE TIMER
    daysEl.innerText = Math.floor(difference / DAY);
    hoursEl.innerText = Math.floor((difference % DAY) / HOUR);
    minutesEl.innerText = Math.floor((difference % HOUR) / MINUTE);
    secondsEl.innerText = Math.floor((difference % MINUTE) / SECOND);

}, 1000);



