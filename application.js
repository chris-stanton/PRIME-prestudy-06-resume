
$(document).ready(function() {

  $("header, p, img, h2, h3, h4, ul, li, div, footer").hide();    // hides all data
    $("button").click(function(){
        $("header, p, img, h2, h3, h4, ul, li, div, footer").show();    // reveals hidden data
        $("button").hide();    // hides button
    });
});
