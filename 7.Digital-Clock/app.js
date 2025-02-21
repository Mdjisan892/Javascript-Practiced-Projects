const time = document.getElementById("time");

function digitalClock(){
    const getTimes = new Date();
    let getHour = getTimes.getHours();
    let getMinute = getTimes.getMinutes();
    let getSecond = getTimes.getSeconds();
    let getSession = "AM";

    if(getHour === 0){
        getHour = 12;
    }
    if(getHour > 12){
        getHour = getHour - 12;
        getSession = "PM";
    }

    getHour = (getHour < 10) ? "0" + getHour : getHour;
    getMinute = (getMinute < 10) ? "0" + getMinute : getMinute;
    getSecond = (getSecond < 10) ? "0" + getSecond : getSecond;

    const fullTime = getHour + ":" + getMinute + ":" + getSecond + " " + getSession;
    time.innerText = fullTime;
}

setInterval(digitalClock, 1000);