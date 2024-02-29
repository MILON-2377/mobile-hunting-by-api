
const lastDate = "23 February, 2024 01:00 AM";

function dateIime(){
    const NowTime = new Date();
    const lastDateEnd = new Date(lastDate);

    const differenceBetNowLast = lastDateEnd - NowTime;

    const days = Math.floor(differenceBetNowLast / (24*3600*1000));
    const hours = Math.floor((differenceBetNowLast % (24*3600*1000)) / (3600*1000));
    const minutes = Math.floor((differenceBetNowLast % (3600*1000)) / (60*1000));
    const miliseconds = Math.floor((differenceBetNowLast % (1000*60)) / 1000)


    displayTime("day-container", days)
    displayTime("hour-container", hours)
    displayTime("minutes-container", minutes)
    displayTime("seconds-container", miliseconds)

}



function displayTime (id, value) {
    const display = document.getElementById(id);
    display.innerText = value;
}

// dateIime()

setInterval(
    () => {
        dateIime();
    }, 1000
)