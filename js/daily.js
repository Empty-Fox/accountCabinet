//////////////select country
$(document).ready(function () {
    $("#quick-setup").countrySelector();
});

/////////////select date
$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'right'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});
/////////////table btn +/-
$(document).ready(function () {
    $("svg").click(function () {
        $(".detalizationByHover").toggle();
        $('.toggle_hide').toggle();

    });
});
///////////////////download file exel


jQuery(document).ready(function () {

    $('#btn_export').on('click', function (e) {
        e.preventDefault();
        ResultsToTable();
    });

    function ResultsToTable() {
        $("#dailyStatisticTable").table2excel({
            exclude: ".excludeThisClass",
            name: "Daily Statistic Table",
            filename: "DailyStatisticTable.xls",
            preserveColors: false
        });
    }
});
///////////////////////select timezone
$('#select1').timezones();

/////////buttons click
$('#refresh').click(function () {
    $('.fa.fa-spinner.fa-spin.spiner_refresh').css('display', 'block');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spiner_refresh ').css('display', 'none');
    }, 1000);
});

$('#aply').click(function () {
    $('.fa.fa-spinner.fa-spin.spiner_aply').css('display', 'block');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spiner_aply ').css('display', 'none');
        $('#aply').css("display", "none");
        $('#refresh').css("display", "inline-block");
    }, 1000);
});

$('#clear').click(function () {
    $('.fa.fa-spinner.fa-spin.spiner_clear').css('display', 'block');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spiner_clear ').css('display', 'none');
    }, 1000);
});
$("#clear").click(function () {
    $('#dateInput').val("");
    $('#select1').val("");
    $('#quick-setup').val("");

    $('input[name="daterange"]').daterangepicker({
        opens: 'right'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });

    $('#select1').timezones();
    $("#quick-setup").countrySelector();

});

$('#dateInput').on("change", function () {
    $('#aply').css("display", "inline-block");
    $('#refresh').css("display", "none");
}).trigger("change");