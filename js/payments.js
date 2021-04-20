/////////////form1 webmobey////////////
function displayDivDemo1(elementValue) {
    if (elementValue.value == 'Webmoney') {
        return
    };
    if (elementValue.value == 'WireTransfer') {
        $('#WebmoneyForm').hide();
        $('#WireTransferForm').show();
    }
    if (elementValue.value == 'Payoneer') {
        $('#WebmoneyForm').hide();
        $('#PayoneerForm').show();
    }
    if (elementValue.value == 'Paxum') {
        $('#WebmoneyForm').hide();
        $('#PaxumForm').show();
    }
    if (elementValue.value == 'PayPal') {
        $('#WebmoneyForm').hide();
        $('#PayPalForm').show();
    }

}
document.getElementById("submit_webmobey").disabled = true;
const isEmpty = str => !str.trim().length;
document.getElementById("WMZ").addEventListener("input", function () {
    if (isEmpty(this.value)) {
        document.getElementById("submit_webmobey").disabled = true;
    } else {
        document.getElementById("submit_webmobey").disabled = false;
    }
});

/////////////form2 WireTransfer ////////////
function displayDivDemo2(elementValue) {
    if (elementValue.value == 'Webmoney') {
        $('#WireTransferForm').hide();
        $('#WebmoneyForm').show();
    };
    if (elementValue.value == 'WireTransfer') {
        return
    }
    if (elementValue.value == 'Payoneer') {
        $('#WireTransferForm').hide();
        $('#PayoneerForm').show();
    }
    if (elementValue.value == 'Paxum') {
        $('#WireTransferForm').hide();
        $('#PaxumForm').show();
    }
    if (elementValue.value == 'PayPal') {
        $('#WireTransferForm').hide();
        $('#PayPalForm').show();
    }

}
document.getElementById("submit_WireTransfer").disabled = true;

const isEmpty1 = str => !str.trim().length;
document.getElementById("iban_number_WireTransferForm").addEventListener("input", function () {
    if (isEmpty1(this.value)) {
        document.getElementById("submit_WireTransfer").disabled = true;
    } else {
        document.getElementById("submit_WireTransfer").disabled = false;
    }
});

/////////////form3 Payoneer ////////////
function displayDivDemo3(elementValue) {
    if (elementValue.value == 'Webmoney') {
        $('#PayoneerForm').hide();
        $('#WebmoneyForm').show();
    };
    if (elementValue.value == 'WireTransfer') {
        $('#PayoneerForm').hide();
        $('#WireTransferForm').show();
    }
    if (elementValue.value == 'Payoneer') {
        return
    }
    if (elementValue.value == 'Paxum') {
        $('#PayoneerForm').hide();
        $('#PaxumForm').show();
    }
    if (elementValue.value == 'PayPal') {
        $('#PayoneerForm').hide();
        $('#PayPalForm').show();
    }
}
document.getElementById("submit_Payoneer").disabled = true;
const isEmpty3 = str => !str.trim().length;
document.getElementById("emai_Payoneer").addEventListener("input", function () {
    if (isEmpty3(this.value)) {
        document.getElementById("submit_Payoneer").disabled = true;
    } else {
        document.getElementById("submit_Payoneer").disabled = false;
    }
});

/////////////form4 Paxum ////////////
function displayDivDemo4(elementValue) {
    if (elementValue.value == 'Webmoney') {
        $('#PaxumForm').hide();
        $('#WebmoneyForm').show();
    };
    if (elementValue.value == 'WireTransfer') {
        $('#PaxumForm').hide();
        $('#WireTransferForm').show();
    }
    if (elementValue.value == 'Payoneer') {
        $('#PaxumForm').hide();
        $('#PayoneerForm').show();

    }
    if (elementValue.value == 'Paxum') {
        return
    }
    if (elementValue.value == 'PayPal') {
        $('#PaxumForm').hide();
        $('#PayPalForm').show();
    }
}
document.getElementById("submit_Paxum").disabled = true;
const isEmpty4 = str => !str.trim().length;
document.getElementById("emai_Paxum").addEventListener("input", function () {
    if (isEmpty4(this.value)) {
        document.getElementById("submit_Paxum").disabled = true;
    } else {
        document.getElementById("submit_Paxum").disabled = false;
    }
});


/////////////form5 PayPal ////////////
function displayDivDemo5(elementValue) {
    if (elementValue.value == 'Webmoney') {
        $('#PayPalForm').hide();
        $('#WebmoneyForm').show();
    };
    if (elementValue.value == 'WireTransfer') {
        $('#PayPalForm').hide();
        $('#WireTransferForm').show();
    }
    if (elementValue.value == 'Payoneer') {
        $('#PayPalForm').hide();
        $('#PayoneerForm').show();
    }
    if (elementValue.value == 'Paxum') {
        $('#PayPalForm').hide();
        $('#PaxumForm').show();
    }
    if (elementValue.value == 'PayPal') {
        return
    }

}
document.getElementById("submit_PayPal").disabled = true;
const isEmpty5 = str => !str.trim().length;
document.getElementById("emai_PayPal").addEventListener("input", function () {
    if (isEmpty5(this.value)) {
        document.getElementById("submit_PayPal").disabled = true;
    } else {
        document.getElementById("submit_PayPal").disabled = false;
    }
});

///////////Buttons style disable and spiner/////////

$("#markAsMain1").click(function () {

    $('.markAsMain').removeAttr('disabled');
    document.getElementById("markAsMain1").disabled = true;

});
$("#markAsMain2").click(function () {
    $('.markAsMain').removeAttr('disabled');
    document.getElementById("markAsMain2").disabled = true;

});

$('#payment_system_form1').submit(function () {
    $('.fa.fa-spinner.fa-spin.spinerSave1').css('display', 'block');
    $('.fa.fa-spinner.fa-spin.spinerSave1').css('margin-right', '-14px');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spinerSave1').css('display', 'none');
    }, 1000);
});

$('#payment_system_form2').submit(function () {
    $('.fa.fa-spinner.fa-spin.spinerSave2').css('display', 'block');
    $('.fa.fa-spinner.fa-spin.spinerSave2').css('margin-right', '-14px');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spinerSave2').css('display', 'none');
    }, 1000);
});




$('#btn_cancel').click(function () {
    document.getElementById("removeModal").style.display = "none"
});


//////////////////Modal Windows open and close/////////


var modal1 = document.getElementById("removeModal");
var modal2 = document.getElementById("adPaymentModal");


var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

var btn3 = document.getElementById("btn_addPayment");

$(".close").click(function () {
    modal1.style.display = "none";
    modal2.style.display = "none";
});

btn1.onclick = function () {
    modal1.style.display = "block";
}
btn2.onclick = function () {
    modal1.style.display = "block";
}

btn3.onclick = function () {
    modal2.style.display = "block";
}


window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


//////////////////////////For Payment System page - delete payments
$('#myBtn1, #myBtn2').click(function () {
    if (this.id == 'myBtn1') {
        $('#button_confirm_delete').click(function () {
            $('.fa.fa-spinner.fa-spin.delete').css('display', 'block');
            $('.fa.fa-spinner.fa-spin.delete').css('margin-right', '-14px');
            setTimeout(function () {
                $('.fa.fa-spinner.fa-spin.delete ').css('display', 'none');
                document.getElementById("removeModal").style.display = "none";
                $(".payments_col_block").eq(0).css("display", "none");
            }, 1000);
        });
    }
    else if (this.id == 'myBtn2') {
        $('#button_confirm_delete').click(function () {
            $('.fa.fa-spinner.fa-spin.delete').css('display', 'block');
            $('.fa.fa-spinner.fa-spin.delete').css('margin-right', '-14px');
            setTimeout(function () {
                $('.fa.fa-spinner.fa-spin.delete ').css('display', 'none');
                document.getElementById("removeModal").style.display = "none";
                $(".payments_col_block").eq(1).css("display", "none");
            }, 1000);
        });
    }
});
