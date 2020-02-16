 //Event funtion on button
function akanName 
 var maleNames =["Kwasi", "Kwando", "Kwambena", "Kwaku", "yaw", "Kofi", "Kwame"]
 var femaleNames =["Akosua", "Adowa", "Abenaa", "Akua", "Yaa", "Ama"]
 Var daysOfWeek=["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
 
 var yy=parseInt(document.getElementById("year").value);
 var cc=document.getElementById("year").value,slice(0,2);
 var mm=parseInt(document.getElementById("month").value);
 var dd=parseInt(document.getElementById("dayOfWeek").value);

 //century and year
 cc=parseInt(century);
year=document.getElementById("year").value.slice(2,4);
year=parseInt(year);


 // birth day details validation validation 
 if(date===""&&date<1&&date>31){
    alert("date must be between 1 and 31")
}
else if(month===""&&month<1&&month>12){
    alert("month must be between 1 and 12")
}
else if (year===""&&year<1&&year>2024){
    alert("year must be 4 characters")
}
else {
var daysOfWeek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 );
    return daysOfWeek;
}
