function provideHint1() {
  var modFirst = document.getElementById("a");
  var hint1 = document.createTextNode("Must contain only 2 or more letters");
  while (modFirst.hasChildNodes()) {
    modFirst.removeChild(modFirst.lastChild);
  }
  modFirst.appendChild(hint1);
}
function provideHint2() {
  var modLast = document.getElementById("b");
  var hint2 = document.createTextNode("Must contain only 2 or more letters");
  while (modLast.hasChildNodes()) {
    modLast.removeChild(modLast.lastChild);
  }
  modLast.appendChild(hint2);
}
function provideHint3() {
  var modEmail = document.getElementById("c");
  var hint3 = document.createTextNode("You must follow the pattern: blah@blah.com.");
  while (modEmail.hasChildNodes()) {
    modEmail.removeChild(modEmail.lastChild);
  }
  modEmail.appendChild(hint3);
}
function provideHint4() {
  var modPhone = document.getElementById("d");
  var hint4 = document.createTextNode("Must contain only numbers: XXX-XXX-XXXX");
  while (modPhone.hasChildNodes()) {
    modPhone.removeChild(modPhone.lastChild);
  }
  modPhone.appendChild(hint4);
}
function provideHint5() {
  var modSulley = document.getElementById("e");
  var hint5 = document.createTextNode("Must contain http(s):// and the ~ symbol");
  while (modSulley.hasChildNodes()) {
    modSulley.removeChild(modSulley.lastChild);
  }
  modSulley.appendChild(hint5);
}

function generateWelcome() {

  var welcomeName = document.forms["validation"]["firstname"].value;
  welcomeName += " ";
  welcomeName += document.forms["validation"]["lastname"].value;
  var welcomeEmail =  document.forms["validation"]["email"].value;
  var welcomePhone = document.forms["validation"]["phone"].value;
  var welcomeSulley = document.forms["validation"]["sulley"].value;
  var welcomeMessageLoc = document.getElementById('validation');
  var welcomeMessage = document.createTextNode("Welcome, " + welcomeName + "!" +  " Your email is: " + welcomeEmail + 
   "; Your Phone Number is: " + welcomePhone + "; Your Sulley address is: " + welcomeSulley);
  welcomeMessageLoc.appendChild(welcomeMessage);
  welcomeMessageLoc.setAttribute('style', 'text-align: center;');
  return false;
}

function validateFirst() {
    var firstResult = document.forms["validation"]["firstname"].value;
    var firstReg = /[a-zA-Z]{2}/;
    var firstTest = firstReg.test(firstResult);
    var modFirst = document.getElementById("a");
    
    if (firstTest == false || firstResult == "") {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/x.png');
        var infoText = document.createTextNode(" You need to enter your first name");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'red';
      return false;

    } else {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/checkmark.png');
        var infoText = document.createTextNode(" Good!");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'green';
    }
  }

   function validateLast() {
    var lastResult = document.forms["validation"]["lastname"].value;
    var lastReg = /[a-zA-Z]{2}/;
    var lastTest = lastReg.test(lastResult);
    var modFirst = document.getElementById("b");

    if (lastTest == false || lastResult == "") {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/x.png');
        var infoText = document.createTextNode(" You need to enter your last name");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'red';
      return false;

    } else {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/checkmark.png');
        var infoText = document.createTextNode(" Good!");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'green';
    }
  }

function validateEmail() { 
    var emailResult = document.forms["validation"]["email"].value;
    var emailReg = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
    var emailTest = emailReg.test(emailResult);
    var modFirst = document.getElementById("c");

    if (emailTest == false || emailResult == "") {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/x.png');
        var infoText = document.createTextNode(" You need to enter your email properly");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'red';
      return false;

    } else {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/checkmark.png');
        var infoText = document.createTextNode(" Good!");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'green';
    }
  }

  function validatePhone() {
    var phoneResult = document.forms["validation"]["phone"].value;
    var phoneReg = /^\d\d\d-\d\d\d-\d\d\d\d$/;
    var phoneTest = phoneReg.test(phoneResult);
    var modFirst = document.getElementById("d");

    if (phoneTest == false || phoneResult == "") {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/x.png');
        var infoText = document.createTextNode(" You need to enter phone like: XXX-XXX-XXXX");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'red';
      return false;

    } else {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/checkmark.png');
        var infoText = document.createTextNode(" Good!");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'green';
    }
  }

  function validateSulley() {
    var sulleyResult = document.forms["validation"]["sulley"].value;
    var sulleyReg = /(^http|https):\/\/students.cah.ucf.edu\/~/;
    var sulleyTest = sulleyReg.test(sulleyResult);
    var modFirst = document.getElementById("e");

    if (sulleyTest == false || sulleyResult == "") {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/x.png');
        var infoText = document.createTextNode(" You need to enter a Sulley address");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'red';
      return false;

    } else {
      while (modFirst.hasChildNodes()) {
        modFirst.removeChild(modFirst.lastChild);
      }
        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/checkmark.png');
        var infoText = document.createTextNode(" Good!");
        modFirst.appendChild(icon);
        modFirst.appendChild(infoText);
        modFirst.style.color = 'green';
    }
  }

function generateBadge() {

    event.preventDefault();
    var badgeValue = 0;
    var values1 = document.getElementsByName("q1");
    for (var i = 0; i < values1.length; i++) {
        if (values1[i].checked == true) {
            badgeValue += (parseInt([i]) + 1);
        }
    }
    var values2 = document.getElementsByName("q2");
    for (var i = 0; i < values2.length; i++) {
        if (values2[i].checked == true) {
            badgeValue += (parseInt([i]) + 1);
        }
    }
    var values3 = document.getElementsByName("q3");
    for (var i = 0; i < values3.length; i++) {
        if (values3[i].checked == true) {
            badgeValue += (parseInt([i]) + 1);
        }
    } 

    
    switch (badgeValue) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        var changingContentDiv = document.getElementById('badge');
        while(changingContentDiv.hasChildNodes()) {
            changingContentDiv.removeChild(changingContentDiv.lastChild);
        }
        var newHeading = document.createElement('h3');
        var headText = document.createTextNode("You got Mario!");
        newHeading.appendChild(headText);
        changingContentDiv.setAttribute('style', 'display: block;');
        changingContentDiv.appendChild(newHeading);
        var newPara = document.createElement('p');
        changingContentDiv.appendChild(newPara);
        var paraText = document.createTextNode("This means you basic. You got plain Jane Mario, every one gets Mario, try something new!");
        changingContentDiv.appendChild(paraText);
        var br = document.createElement("br");
        changingContentDiv.appendChild(br);
        var badgeImg = document.createElement('img');
        badgeImg.setAttribute('src', 'img/supermario.png');
        changingContentDiv.appendChild(badgeImg);
        changingContentDiv.setAttribute('style', 'outline: 2px solid black;');
        break;
        case 6:
        case 7:
        case 8:
        var changingContentDiv = document.getElementById('badge');
        while(changingContentDiv.hasChildNodes()) {
            changingContentDiv.removeChild(changingContentDiv.lastChild);
        }
        var newHeading = document.createElement('h3');
        var headText = document.createTextNode("You got Link!");
        newHeading.appendChild(headText);
        changingContentDiv.setAttribute('style', 'display: block;');
        changingContentDiv.appendChild(newHeading);
        var newPara = document.createElement('p');
        changingContentDiv.appendChild(newPara);
        var paraText = document.createTextNode("Link is pretty cool, means you might be pretty cool.");
        changingContentDiv.appendChild(paraText);
        var br = document.createElement("br");
        changingContentDiv.appendChild(br);
        var badgeImg = document.createElement('img');
        badgeImg.setAttribute('src', 'img/link.jpg');
        changingContentDiv.appendChild(badgeImg);
        changingContentDiv.setAttribute('style', 'outline: 2px solid black;');
        break;
        case 9:
        case 10:
        case 11:
        case 12:
        var changingContentDiv = document.getElementById('badge');
        while(changingContentDiv.hasChildNodes()) {
            changingContentDiv.removeChild(changingContentDiv.lastChild);
        }
        var newHeading = document.createElement('h3');
        var headText = document.createTextNode("You got Sonic!");
        newHeading.appendChild(headText);
        changingContentDiv.setAttribute('style', 'display: block; margin: 5px;')
        changingContentDiv.appendChild(newHeading);
        var newPara = document.createElement('p');
        changingContentDiv.appendChild(newPara);
        var paraText = document.createTextNode("He fast as hell, but its ok, so are you!");
        changingContentDiv.appendChild(paraText);
        var br = document.createElement("br");
        changingContentDiv.appendChild(br);
        var badgeImg = document.createElement('img');
        badgeImg.setAttribute('src', 'img/sonic.png');
        changingContentDiv.appendChild(badgeImg);
        changingContentDiv.setAttribute('style', 'outline: 2px solid black;')
        break;
        default:
          return false;
    }

}