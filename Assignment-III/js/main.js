$(document).ready(function () {
    $("#toggleText").click(function () {
        $("header h1").toggle("slow", function () {
            if ($(this).is(":visible")) {
                $("#toggleText").text("Hide");
            } else {
                $("#toggleText").text("Show");
            }
        });
    });
});
$(document).ready(function () {

    $("#logoButton").click(function () {
        $("#ucsyLogo").fadeOut();

    });

});
$(document).ready(function () {

    $("#infoText").on({
        mouseenter: function () {
            $(this).css("font-weight", "bold");
        },
        mouseleave: function () {
            $(this).css("font-weight", "normal");
        }
    });
});

$(document).ready(function () {

    $("#ucsyPhoto").hover(function () {
        $(this).animate({ opacity: 0.5 }, 300);
    }, function () {
        $(this).animate({ opacity:2 }, 300);
    });


});

$(document).ready(function () {

    $("#infod").click(function () {
        $("#infoDetaill").slideToggle();
    });


});
