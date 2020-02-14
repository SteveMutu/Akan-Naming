 //Event funtion on button
 function akanName
 var maleNames =["Kwasi", "Kwando", "Kwambena", "Kwaku", "yaw", "Kofi", "Kwame"]
 var femaleNames =["Akosua", "Adowa", "Abenaa", "Akua", "Yaa", "Ama"]
 Var daysOfWeek=["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]

 // birth day details validation validation 
 if(date===""&&date<1&&date>31){
     alert("date must be between 1 and 31")
 }
 else if(month===""&&month<1&&month>12){
     alert("date must be between 1 and 2")
 }
 else if (year===""&&year<1&&year>2024){
     alert("date must be 4 characters")
 }
 else {
     return false;
 }
 
 var yy=document.getElementById("")
 var cc=century(yob)
 var mm=document.getElementById("")
 var dd=document.getElementById("")

 //century calculation 
 function century(yy){
     Var century =math.floor(yy/100)+1;
     return century
} 
//day of the week validation
var daysOfweek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
