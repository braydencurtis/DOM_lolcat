var timeEventJS = document.getElementById("timeEvent");
var lolcatImage = document.getElementById("lolcat");
var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


// Make showCurrentTime into a function
var updateClock = function () {

    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

    if (time == partyTime){
        messageText = "IZ PARTEE TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    } else if (time == napTime) {
        messageText = "IZ NAP TIME…";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    } else if (time == lunchTime) {
        messageText = "IZ NOM NOM NOM TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    } else if (time == wakeupTime) {
        messageText = "IZ TIME TO GETTUP.";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    } else if (time < noon) {
        messageText = "Good morning!";
    } else if (time > evening) {
        messageText = "Good Evening!";
    } else {
        messageText = "Good afternoon!";
    }
    showCurrentTime();
    // Update message text
    timeEventJS.innerText = messageText;
    // Update Image source file
    lolcatImage.src = image;
};




// Call clock function
updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);


// Party Time Button

var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
 
var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
      partyTimeButton.innerText = "Party Over";
      // color of the button should be "#0A8DAB" (bonus!)
      partyTimeButton.style.background = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
      partyTimeButton.innerText = "PARTY TIME!";
      // color of the button should be "#222" (bonus!)
      partyTimeButton.style.background = "#222";
   }
};

partyTimeButton.addEventListener("click", partyEvent);



// Wake Up Time Selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);