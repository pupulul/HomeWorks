define(["jquery"], function() {

	 $(".nb-top").mouseenter(function() {
        $(".tab").css("display", "block");
    });
    $(".tab").mouseleave(function() {
        $(this).css("display", "none");
    });
})
