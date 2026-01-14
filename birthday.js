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

// 🎂 BIRTHDAY DATE (DO NOT CHANGE FORMAT)
const BIRTHDAY_YEAR = 2026;
const BIRTHDAY_MONTH = 0; // January (0-based)
const BIRTHDAY_DATE = 14;

// 🎯 TARGET DATE FOR COUNTDOWN (MIDNIGHT)
const targetTime = new Date(
    BIRTHDAY_YEAR,
    BIRTHDAY_MONTH,
    BIRTHDAY_DATE,
    0, 0, 0
).getTime();

const interval = setInterval(() => {
    const now = new Date();

    // ✅ DATE-ONLY CHECK (NO TIME BUGS)
    const isBirthday =
        now.getFullYear() === BIRTHDAY_YEAR &&
        now.getMonth() === BIRTHDAY_MONTH &&
        now.getDate() === BIRTHDAY_DATE;

    if (isBirthday) {
        clearInterval(interval);

        countertimer.style.display = "none";
        container.classList.add("birthday");

        heading.innerText = "🎉 HAPPIEST BIRTHDAY ADITYA 🎉";
        paragraph.innerText =
            "I never say I’m proud of you, but I’m the most proud of the man you have become. I never say I love you enough, but I love you the most. I wished main wahan hoti tumhare paas, tumhe hug karne ke liye. Trust me, jab main wapas aaungi, I will celebrate your birthday the way you want — if you know, you know. 💫🎂";

        return;
    }

    // ⏳ COUNTDOWN CALCULATION
    const nowTime = now.getTime();
    const difference = targetTime - nowTime;

    daysEl.innerText = Math.max(0, Math.floor(difference / DAY));
    hoursEl.innerText = Math.max(0, Math.floor((difference % DAY) / HOUR));
    minutesEl.innerText = Math.max(0, Math.floor((difference % HOUR) / MINUTE));
    secondsEl.innerText = Math.max(0, Math.floor((difference % MINUTE) / SECOND));

}, 1000);
