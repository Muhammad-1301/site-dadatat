$(document).ready(function (){
var token = 'cc59bf2b1e8c91906145bc2365a62ae67a9fff48';

    $(".address").suggestions({
        token: token,
        type: "ADDRESS",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $(".job").suggestions({
        token: token,
        type: "PARTY",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $(".fio").suggestions({
        token: token,
        type: "NAME",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});