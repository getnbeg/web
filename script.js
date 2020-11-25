$(function() {
	// info button transitions
    $(".menu").on("click", function() {
        $(".menu > i").toggleClass("fa-bars fa-close", 300);
        $(".sidebar-wrapper").toggleClass("show-sidebar", 500);
        $("body").toggleClass("push-body", 500);
    });
});


  window.onbeforeunload = function() {
        return "Dude, are you sure you want to leave? Think of the kittens!";
    }