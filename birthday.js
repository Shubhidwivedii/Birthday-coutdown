const dayselement=document.querySelector(".days");
const hourselement=document.querySelector(".hours");
const minuteselement=document.querySelector(".minutes");
const secondselement=document.querySelector(".seconds");
const heading=document.querySelector("h1");
const countertimer=document.querySelector(".countertimer");
const paragraph=document.querySelector(".note");

const second =1000,
minute=60*second,
hour=60*minute,
day=24*hour;

const timerfunction=()=>{
    // let now=new Date();
    // let dd=String(now.getDate()).padStart(2,"0"),
    // mm=String(now.getMonth()).padStart(2,"0");
    // yyyy=now.getFullYear();
    // const enteredday=prompt("Enter day").padStart(2,"0");
    // const enteredmonth=prompt("Enter month").padStart(2,"0");
    // now=`${mm}/${dd}/${yyyy}`;
    // let targetDate=`${enteredmonth}/${enteredday}/${yyyy}`;
    // if(now>targetDate){
    //     targetDate=`${enteredmonth}/${enteredday}/${yyyy+1}`
    // }

    const interval=setInterval(()=>{
    const timer =new Date("01/14/2026").getTime();
    const today= new Date().getTime();
    const difference =timer-today;

    if (difference <= 0) {
        clearInterval(interval);
        countertimer.style.display = "none";
        container.classList.add("birthday"); 
        heading.innerText = "🎉 HAPPIEST BIRTHDAY ADITYA🎉";
        paragraph.innerText="I never say I’m proud of you, but I’m the most proud of the man you have become.I never say I love you enough, but I love you the most.I never say you are funny, but you make me laugh the most.I never say you are handsome, but for me, you are the most handsome man.I wished main wahan hoti tumhare paas, tumhe hug karne ke liye.Trust me, jab main wapas aaungi, I will celebrate your birthday the way you want if you know, you know.💫🎂";
        return;
    }
    // console.log(timer);
    // console.log(today);
    // console.log(difference);
    const leftday=Math.floor(difference/day);
    const lefthour=Math.floor((difference%day)/hour);
    const leftminute=Math.floor((difference%hour)/minute);
    const leftsecond=Math.floor((difference%minute)/second);
    dayselement.innerText=leftday;
    hourselement.innerText=lefthour;
    minuteselement.innerText=leftminute;
    secondselement.innerText=leftsecond;
    // console.log(`${leftday}:${lefthour}:${leftminute}:${leftsecond}`)


    },1000);
};
timerfunction();





