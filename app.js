let date=document.getElementById("date");
let calculate=document.getElementById("Calculate");
let span=document.getElementById("span");
let spanId=document.getElementById("spanId");
let idspan=document.getElementById("idspan");
let iSpan=document.getElementById("iSpan")


iSpan.style.display="none";

calculate.addEventListener("click",()=>{
    let brithDate= new Date(date.value);
    let brithYear=brithDate.getFullYear();
    let brithMon=brithDate.getMonth();
    let brithDay=brithDate.getDate();

    let currentDate= new Date();
    let currentYear=currentDate.getFullYear();
    let currentMon=currentDate.getMonth();
    let currentDay=currentDate.getDate();

    let y=0,m=0,d=0;

    // let leapYear=( year)=>{
    //     return (year % 4 ==0 && year % 100 !== 0) || (year % 400 !== 0)
    // }

    if (currentDay > brithDay) {
        d = currentDay - brithDay;
    } else {
        d = currentDay + (30 - brithDay); 
        brithMon += 1;
    }
    if(currentMon>brithMon){
        m=currentMon-brithMon;
    }
    else{
        m=(12-brithMon)+currentMon;
        currentYear-=1
    }
    y=currentYear-brithYear;

    // if (leapYear(brithYear) && (currentMon < brithMon || (currentMon === brithMon && currentDay < brithDay))) {
    //     y -= 1;
    // }
    
    span.innerText=d<10? `0${d}`:d;
    spanId.innerText=m<10? `0${m}`:m;
    idspan.innerText=y<10? `0${y}`:y;

    iSpan.style.display="block";
    
})

