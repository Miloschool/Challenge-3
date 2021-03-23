function todayDay() {
    var getDateForDay = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[getDateForDay.getDay()];
    document.getElementById('todayShow').innerHTML = dayName;
};
todayDay();


function todayTime() {
    var getDateForTime = new Date();
    var h = getDateForTime.getHours();
    var m = getDateForTime.getMinutes();
    var s = getDateForTime.getSeconds();
    m = checkTime(m); // Tijden apart gemaakt voor checking time om 0 toe te voegen bij tijden met alleen 1 digit
    s = checkTime(s); // Tijden apart gemaakt voor checking time om 0 toe te voegen bij tijden met alleen 1 digit

    var currentTime;
    if (screen.width <= 425) { // Time placeholder width
        currentTime = h + ':' + m;
    } else {
        currentTime = h + ':' + m + ':' + s;
    }

    document.getElementById('timeShow').innerHTML = currentTime;

    var swapImagePlaceholder = document.getElementById('swapImagePlaceholder');
    var visualDateImg = document.getElementById('dayCyclus');


    // // Hours
     var morning = (h >= 6 && m >= 0) && (h <= 11 && m <=59 && s <=58);
     var afternoon = (h >= 12 && m >= 0) && (h <= 17 && m <= 59 && s<=58);
     var evening = (h >= 18 && m >= 0 ) && (h <= 19 && m <= 59 && s<=58);
     var night = (h >= 20 && m >= 0) || (h <= 5 && m <= 59 && s<=58); // Last fix

    switch (true) { // check which fase of the day it is
        case morning: 
            swapImagePlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Morning.svg';
            break;
        case afternoon: 
            swapImagePlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Afternoon.svg';
            break;
        case evening: 
            swapImagePlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Evening.svg';
            break;
        case night:  
            swapImagePlaceholder.classList.add('switchImage');
            visualDateImg.src = 'images/Night.svg';
            break;
        default:
            swapImagePlaceholder.classList.remove('switchImage');
            break;  
    }


// Voor docent: remove comment to test the fullRotation after each fase of the day! :D

    // switch (true) { // check which fase of the day it is
    //     case (s >= 0 && s <= 14) : 
    //         swapImagePlaceholder.classList.add('switchImage');
    //         visualDateImg.src = 'images/Morning.svg';
    //         break;
    //     case (s >= 16 && s <= 29) : 
    //         swapImagePlaceholder.classList.add('switchImage');
    //         visualDateImg.src = 'images/Afternoon.svg';
    //         break;
    //     case (s >= 31 && s <= 44) : 
    //           swapImagePlaceholder.classList.add('switchImage');
    //         visualDateImg.src = 'images/Evening.svg';
    //         break;
    //     case (s >= 46 && s <= 58) : 
    //                  swapImagePlaceholder.classList.add('switchImage');
    //         visualDateImg.src = 'images/Night.svg';
    //         break;
    //     default:
    //         swapImagePlaceholder.classList.remove('switchImage');
    //         break;  
    // }

    setTimeout(todayTime, 500); //  0.5 seconden
}

todayTime();


function todayDate() {
    var getTodayDate = new Date();
    var y = getTodayDate.getFullYear().toString().substr(-2);
    var m = getTodayDate.getMonth();
    var d = getTodayDate.getDate();
    y = checkTime(y);
    m = checkTime(m);
    d = checkTime(d);
    document.getElementById('dateShow').innerHTML = d + '/' + m + '/' + y;
}

todayDate();


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // Voegt 0 achter een cijfer 
    return i;
}