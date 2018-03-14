

/* FIRST PAGE SHIPPING ADDRESS EXTRA */

function showHideShipInfo () {
    if ( document.getElementById('shipping').checked ) {
        document.getElementById('shipping-address').style.display= 'none';
    } else {
        document.getElementById('shipping-address').style.display= 'block';
        document.getElementById('nextStep').style.display= 'none';
    }
    
}

/* STEP 2 PASSWORD SECTION */

function checkPass () {
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('confirmMessage');

    if ( pass1.value !== pass2.value ) {
        message.innerHTML = "Password did not match!!!";
    } else {
        message.innerHTML = " Password matched ! ";
    } 
}

/* STEP 2 NEWSLETTER SECTION */

function val () {
var chks = document.getElementsByName('check[]');
var hasChecked = false;
for (var i = 0; i < chks.length; i ++) {
    if (chks [i].checked) {
        hasChecked = true;
        break;
    }
} if (hasChecked == false) {
    alert ('Please select at least one option from Newsletter!!');
    return false;
}
return true;

}


/* STEP 4 CREDIT CARD & CCV SECTION */


function checkCcv () {
    var a = document.getElementById('ccv').value;
    var msg = document.getElementById('msgs');
    if (a.length < 3) {
        msg.innerHTML = "3 digits only";
    } else if (a.length == 3) {
        msg.innerHTML = "";
    }
}






function checkCard () {
    var x = document.getElementById('carddNo').value;
    var msg2 = document.getElementById('confirmSms');
    if (x.length <16) {
        msg2.innerHTML = "16 digits";
    } else if (x.length == 16) {
        msg2.innerHTML = "";
    }
}