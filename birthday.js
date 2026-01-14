// ELEMENTS
const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const countertimer = document.querySelector(".countertimer");
const paragraph = document.querySelector(".note");
const container = document.querySelector(".container");
const music = document.getElementById("birthdayMusic");

// TIME CONSTANTS
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// 🎂 TARGET DATE
const targetTime = new Date("2026-01-14T00:00:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
        clearInterval(interval);

        // UI CHANGES
        countertimer.style.display = "none";
        container.classList.add("birthday");

        heading.innerText = "🎉 HAPPIEST BIRTHDAY ADITYA 🎉";
        heading.classList.add("fade-in");

        paragraph.innerText =
            "I never say I’m proud of you, but I’m the most proud of the man you have become. I wished main wahan hoti tumhare paas, tumhe hug karne ke liye. Trust me, jab main wapas aaungi, I will celebrate your birthday the way you want — if you know, you know. 💫🎂";
        paragraph.classList.add("fade-in");

        // 🎵 PLAY MUSIC
        music.play().catch(() => {});

        // 🎆 CONFETTI
        setInterval(createConfetti, 150);

        // ❤️ HEARTS
        setInterval(createHeart, 400);

        return;
    }

    // COUNTDOWN
    daysEl.innerText = Math.floor(difference / DAY);
    hoursEl.innerText = Math.floor((difference % DAY) / HOUR);
    minutesEl.innerText = Math.floor((difference % HOUR) / MINUTE);
    secondsEl.innerText = Math.floor((difference % MINUTE) / SECOND);
}, 1000);

// 🎆 CONFETTI FUNCTION
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.innerText = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "24px";
    confetti.style.animation = "floatUp 5s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

// ❤️ HEART FUNCTION
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
