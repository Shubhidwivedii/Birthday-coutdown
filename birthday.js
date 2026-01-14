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

// 🎂 BIRTHDAY TARGET (14 JAN 2026 – MIDNIGHT)
const targetTime = new Date("2026-01-14T00:00:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    // 🎉 BIRTHDAY REACHED
    if (difference <= 0) {
        clearInterval(interval);

        countertimer.style.display = "none";
        container.classList.add("birthday");

        heading.innerText = "🎉 HAPPIEST BIRTHDAY ADITYA 🎉";
        paragraph.innerText =
            "I never say I’m proud of you, but I’m the most proud of the man you have become. I never say I love you enough, but I love you the most. I wished main wahan hoti tumhare paas, tumhe hug karne ke liye. Trust me, jab main wapas aaungi, I will celebrate your birthday the way you want — if you know, you know. 💫🎂";

        return;
    }

    // ⏳ COUNTDOWN
    daysEl.innerText = Math.floor(difference / DAY);
    hoursEl.innerText = Math.floor((difference % DAY) / HOUR);
    minutesEl.innerText = Math.floor((difference % HOUR) / MINUTE);
    secondsEl.innerText = Math.floor((difference % MINUTE) / SECOND);

}, 1000);
