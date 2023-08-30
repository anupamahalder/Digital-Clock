function showTime(){
    let date = new Date();
    //calling a method to get hours
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session = " AM ";

    //for making 12 hour format
    if(hour > 12){
        hour -= 12;
        session=" PM ";
    }
    //make double digit
    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;
    //formatting to show time on screen
    let time = hour + " : " + minute + " : " + second + session;
    document.getElementById('myTime').innerText = time;

    //To refresh the time with each 1000 miliseconds
    setTimeout(showTime,1000); 
}