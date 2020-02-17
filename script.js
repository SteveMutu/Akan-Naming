var weekday = function () {
    var d = new Date();
    var day1 = document.getElementById("bday").value;
    var day2 = day1.split("-");
    var day=day2[2];
    var month = day2[1];
    var year = day2[0];
    d.setDate(parseInt(day));
    d.setMonth(parseInt(month) - 1);
    d.setFullYear(parseInt(year));
     if ((month == 4 || month == 6 || month == 9 || month == 2 || month == 11) && parseInt(day) > 30) {
       alert("invalid date")
         return false;
      } else if (month == 2 && parseInt(year) % 100 === 0 && parseInt(year) % 400 !== 0 && parseInt(day) > 28) {
        alert("invalid date")
        return false;
      }
      else if (month == 2 && parseInt(year) % 4 !== 0 && parseInt(day) > 28) {
        alert("invalid date")
         return false;
      }
      else if (month == 2 && parseInt(day) > 29) {
        alert("invalid date")
         return false;
      } else {
        return d.getDay();
      }
}
// function centuryFromYear(year) {
//     var x = Math.floor(year/100) + 1;
//     return x;
// }
function akanFemale() {
    var femaleArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //sunday-saturday# sunday has index 0
    if (weekday() === 0) {
        return "Your Akan name is " + femaleArray[0];
    }
    else if (weekday() === 1) {
        return "And Your Akan name is " + femaleArray[1];
    } else if (weekday() === 2) {
        return "And Your Akan name is " + femaleArray[2];
    }
    else if (weekday() === 3) {
        return "AndYour Akan name is " + femaleArray[3];
    }
    else if (weekday() === 4) {
        return "And Your Akan name is " + femaleArray[4];
    }
    else if (weekday() === 5) {
        return "And Your Akan name is " + femaleArray[5];
    }
    else {
        return " And Your Akan name is " + femaleArray[6];
    }
}
function akanMale() {
    var maleArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];//sunday has index 0
    if (weekday() === 0) {
        return "And Your Akan name is " + maleArray[0];
    }
    else if (weekday() === 1) {
        return "And Your Akan name is " + maleArray[1];
    } else if (weekday() === 2) {
        return "And Your Akan name is " + maleArray[2];
    }
    else if (weekday() === 3) {
        return "And Your Akan name is " + maleArray[3];
    }
    else if (weekday() === 4) {
        return "And Your Akan name is " + maleArray[4];
    }
    else if (weekday() === 5) {
        return "And Your Akan name is " + maleArray[5];
    }
    else {
        return " And Your Akan name is " + maleArray[6];
    }
}
//output function
function output() {
    var day1 = document.getElementById("bday").value;
    var day2 =day1.split("-");
    var day= parseInt(day2[2]);
    var month =parseInt(day2[1]);
    var year = parseInt( day2[0]);
    if ((document.getElementById("rad1").checked) && (isNaN(day) || day < 1 || day > 31)) {
        alert("Please correctly fill day field");
        return false;
    }
    else if (isNaN(month) || month < 1 || month > 12 ||month===null ) {
        alert("Please correctly fill month field");
        return false;
    }
    else if (isNaN(year) || year < 1582 || year > 2020) {
        alert("Invalid year");
        // document.getElementById("akanForm").reset();
    }
    else if (document.getElementById("rad1").checked) {
        document.getElementById("display").innerHTML = akanFemale();
        document.getElementById("akanForm").reset();
    }
    else if (document.getElementById("rad2").checked) {
        document.getElementById("display").innerHTML = akanMale();
        document.getElementById("akanForm").reset();
    } else {
        alert("all fields must be filled")
        return false;//prevent refresh
    }
}





