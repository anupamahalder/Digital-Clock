function showTime(){
    let date = new Date();
    //calling a method to get hours
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //formatting to show time on screen
    let time = hour + " : " + minute + " : " + second;
    document.getElementById('myTime').innerText = time;

    //To refresh the time with each 1000 miliseconds
    setTimeout(showTime,1000); 
}