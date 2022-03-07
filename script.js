let start = document.getElementById("start");
let stop = document.getElementById("stop");
let clear = document.getElementById("clear");
let m = 0, s = 0;
let timer;
let start_click_counter = 0;

start_timer = () => { 
    let s_str = "", m_str = "";
    if(s < 59) {
        s++;
    }
    else {
        s = 0;
        m++;
    }
    s_str = s;
    m_str = m;
    if(s_str.length != 2) {
        s_str = "0" + s_str
    }
    if(m_str.length != 2) {
        m_str = "0" + m_str
    }
    document.getElementById("min").innerHTML = m_str;
    document.getElementById("sec").innerHTML = s_str;
}

start.addEventListener('click', function() {
    start_click_counter++;
    if(start_click_counter == 1) {
        console.log(start_click_counter);
        timer = setInterval(start_timer, 1000);
    }
});

stop.addEventListener('click', function() {
    start_click_counter = 0;
    clearInterval(timer);
});
clear.addEventListener('click', function() {
    start_click_counter = 0;
    s = m = 0;
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    clearInterval(timer);
});