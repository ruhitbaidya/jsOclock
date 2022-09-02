// time zoom set
// hello project
function oclocktimer(){
    let date = new Date();
    let hours = date.getHours();
    let munits = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getUTCDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(day)
    let timezoon = 'AM';

    let allday = ['Sunday','Monday','Tuesday','Wednesday','Thurstday','Friday','Saturday'];
    let allMonth = ['January','February','March','April','May','Jun','July','August','September','October','Nobermber','December'];

    let setdate = `${allday[day]} ${allMonth[month]} ${year}`;
    

    if(hours === 0){
         hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        timezoon = 'PM';
    }

    hours = hours < 10 ? '0' + hours : hours;
    // console.log(hours);

    munits = munits < 10 ? '0' + munits : munits;
    second = second < 10 ? '0' + second : second;

    let finialTime = `${hours}: ${munits} : ${second}`;
    document.getElementById('timeset').innerText = finialTime;
    document.querySelector('small').innerText = timezoon;
    document.getElementById('dateContainer').innerText = setdate;

    setInterval(oclocktimer, 100)
}

oclocktimer();
