//////////select country///////
$(document).ready(function () {
    $("#quick-setup_country").countrySelector();
});

/////////////////select daterange/////////
$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'right'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});
/////////////////download table exel///////////// 
jQuery(document).ready(function () {

    $('#btn_export_country').on('click', function (e) {
        e.preventDefault();
        ResultsToTable();
    });

    function ResultsToTable() {
        $("#countriesStatisticTable").table2excel({
            exclude: ".excludeThisClass",
            name: "Countries Statistic Table",
            filename: "CountriesStatisticTable.xls",
            preserveColors: false
        });
    }
});
////////////select timezone////////////
$('#select1_country').timezones();

/////////////togle open table plus-minus///////
$(document).ready(function () {
    $("svg").click(function () {
        $(".detalizationByHover").toggle();
        $('.toggle_hide').toggle();

    });
});

//////////byttons clicks////////
$('#refresh_country').click(function () {
    $('.fa.fa-spinner.fa-spin.spiner_refresh').css('display', 'block');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spiner_refresh ').css('display', 'none');
    }, 1000);
});

$('#aply_country').click(function () {
    $('.fa.fa-spinner.fa-spin.spiner_aply').css('display', 'block');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spiner_aply ').css('display', 'none');
        $('#aply_country').css("display", "none");
        $('#refresh_country').css("display", "inline-block");
    }, 1000);
});

$('#clear_country').click(function () {
    $('.fa.fa-spinner.fa-spin.spiner_clear').css('display', 'block');
    setTimeout(function () {
        $('.fa.fa-spinner.fa-spin.spiner_clear ').css('display', 'none');
    }, 1000);
});



$("#clear_country").click(function () {
    $('#dateInput_country').val("");
    $('#select1_country').val("");
    $('#quick-setup_country').val("");

    $('input[name="daterange"]').daterangepicker({
        opens: 'right'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });

    $('#select1_country').timezones();
    $("#quick-setup_country").countrySelector();



});

$('#dateInput_country').on("change", function () {
    $('#aply_country').css("display", "inline-block");
    $('#refresh_country').css("display", "none");
}).trigger("change");