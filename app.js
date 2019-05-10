//made by Eduards Birznieks

//show today's date in the following format:
function timeControler(){   //refactor
  var today = new Date();
  var date = today.getDate();
  var year = today.getFullYear();
  //printig day's name as a string form this aray
  var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  var dayName = weekday[today.getDay()];
//moth names to :D hear we go
  var monthName = new Array(12);
    monthName[0] = "January";
    monthName[1] = "February";
    monthName[2] = "March";
    monthName[3] = "April";
    monthName[4] = "May";
    monthName[5] = "June";
    monthName[6] = "July";
    monthName[7] = "August";
    monthName[8] = "September";
    monthName[9] = "October";
    monthName[10] = "November";
    monthName[11] = "December";
  var monthNames = monthName[today.getMonth()];

 document.getElementById('fullDate').innerHTML = "Today is " + dayName + " " + date + "th " + monthNames +  " " + year;

  var timeout = setTimeout(timeControler, 500);
}
//add zero in front of numbers < 10 for seconds and howers
function checkTime(i) {
  if (i <10){
    i = "0" + 1
  };
  return i;
}
//clock format time
function startTime() {
  var today = new Date();
  var h = (today.getHours() >= 12) ? today.getHours()-12 : today.getHours(); //figuering out if its past 12 or before 12
  var ampm = (today.getHours() >= 12) ? "PM" : "AM"; //changig AM to PM after 12. Known bug with 0 time value okay at mid night but not okay at nune

  var min = today.getMinutes();

  min = checkTime(min);

  document.getElementById('clockId').innerHTML =  h + "." + min + " " + ampm ;
  var t = setTimeout(startTime, 500);
}


//provided array of objects of taks
var tasks = [
    {
        "id": 1,
        "day": "Monday",
        "time": "08:00",
        "description": "Laugh to Your Heart’s Content"
    },
    {
        "id": 2,
        "day": "Monday",
        "time": "11:00",
        "description": "Dance Like No One’s Watching"
    },
    {
        "id": 3,
        "day": "Monday",
        "time": "16:00",
        "description": "Make Dinner for homeless guy"
    },
    {
        "id": 4,
        "day": "Tuesday",
        "time": "07:00",
        "description": "Change Your Morning Routine"
    },
    {
        "id": 5,
        "day": "Tuesday",
        "time": "10:00",
        "description": "Go People Watching"
    },
    {
        "id": 6,
        "day": "Tuesday",
        "time": "18:00",
        "description": "Do Something Stupid"
    },
    {
        "id": 7,
        "day": "Wednesday",
        "time": "08:00",
        "description": "Sing in the Shower"
    },
    {
        "id": 8,
        "day": "Wednesday",
        "time": "13:00",
        "description": "Listen to Nature Sounds"
    },
    {
        "id": 9,
        "day": "Wednesday",
        "time": "15:00",
        "description": "Join a Club"
    },
    {
        "id": 10,
        "day": "Thursday",
        "time": "06:00",
        "description": "Strike a Pose"
    },
    {
        "id": 11,
        "day": "Thursday",
        "time": "09:00",
        "description": " Challenge Yourself"
    },
    {
        "id": 12,
        "day": "Thursday",
        "time": "20:00",
        "description": "Reconnect with an Old Friend"
    },
    {
        "id": 13,
        "day": "Friday",
        "time": "09:00",
        "description": "Learn a Joke"
    },
    {
        "id": 14,
        "day": "Friday",
        "time": "12:00",
        "description": "Become an Expert"
    },
    {
        "id": 15,
        "day": "Friday",
        "time": "19:00",
        "description": "Take a Class"
    },
    {
        "id": 16,
        "day": "Saturday",
        "time": "07:00",
        "description": "Change Your Look"
    },
    {
        "id": 17,
        "day": "Saturday",
        "time": "12:00",
        "description": "Excite Your Palate"
    },
    {
        "id": 18,
        "day": "Saturday",
        "time": "21:00",
        "description": "Begin a Diary"
    },
    {
        "id": 19,
        "day" : "Sunday",
        "time": "10:00",
        "description": "Embrace Your Curiosity"
    },
    {
        "id": 20,
        "day": "Sunday",
        "time": "11:00",
        "description": "Pretend to Be a Tourist"
    },
    {
        "id": 21,
        "day": "Sunday",
        "time": "17:00",
        "description": "Drive Away with No Destination in Mind"
    }
]

 //dispay all time and decription from taks of corosponding day
//step 1 return tasks that are today
function retrunTaskOfDay(){
  var curentDay = new Date().getDay();
  //console.log(curentDay); ..debuging
  var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  var curentDayName = weekday[curentDay];

  //console.log(curentDayName);
  getTodaysTasks(curentDayName);
}
//step 2 loop emtey array fileret thorw the provided array if day maches put it in the new Array
// x is the day in string formant
function getTodaysTasks(x){
  var todaysList = [];

  tasks.forEach(function(task){
    console.log(task.day)
    if (task.day === x){
      todaysList.push(task);
    }
  })
  console.log(todaysList); //debuging
  todaysList.map(function(task){

  document.getElementById('table').innerHTML += "<tr><th>" + task.time + "</th><th>"+ task.description +"</th></tr>";

  })
}
 //change the tittle
 function titleChange(){
   console.log(document.querySelector('#newText').value)

   document.getElementById("title").innerHTML = document.querySelector('#newText').value;
 }
// change bacgroud with dropdownmenue
 function backgroundChange(c){
   //console.log(document.getElementsByTagName('body'));
   document.getElementsByTagName('body')[0].bgColor=c.value;
 }

 //insperations meesages of the dayName
// function insperaton(){
//     var message = new Array(10);
//       message[0] = "You look good!";
//       message[1] = "Your hot peace of ass!";
//       message[2] = "Sky is the limit!";
//       message[3] = "Never back down!";
//       message[4] = "Hit books not women!";
//       message[5] = "Make JS great again!";
//       message[6] = "Dont stop get it get it!";
//       message[7] = "You can do it!";
//       message[8] = "Don't stop beliving!";
//       message[9] = "Just stop!";
//
//       var randInsp = message[Math.round(Math.round()*(sites.length-1))];
//       console.log(randInsp);
// }
