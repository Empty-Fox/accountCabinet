$(document).ready(function() {
     $.getJSON("testData.json", function(json) {
        $("#account_number").html(JSON.parse(JSON.stringify(json[0].account_number)));
        $("#profileName").html(JSON.parse(JSON.stringify(json[0].profileName)));
        $(".managerName").html(JSON.parse(JSON.stringify(json[0].manager[0].name)));
        $(".managerSurname").html(JSON.parse(JSON.stringify(json[0].manager[0].surname)));
        
        $(".emailManager").html(JSON.parse(JSON.stringify(json[0].emailManager[0].emailManager)));
        $(".skypeManager").html(JSON.parse(JSON.stringify(json[0].skypeManager[0].skypeManager)));

        $(".clickCounts").html(JSON.parse(JSON.stringify(json[0].clickCounts)));
        $(".clickHosts").html(JSON.parse(JSON.stringify(json[0].clickCounts)));
        $(".clickConversation").html(JSON.parse(JSON.stringify(json[0].clickCounts)));


        
        });
        
});
