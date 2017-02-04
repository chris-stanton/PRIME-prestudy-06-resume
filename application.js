
$(document).ready(function() {
// Hides all data on refresh
  $("header, p, img, h2, h3, h4, ul, li, div, footer").hide();
// Button reveals hidden data
    $("button").click(function(){
        $("header, p, img, h2, h3, h4, ul, li, div, footer").show();
// Hides button
        $("button").hide();
    });
});
