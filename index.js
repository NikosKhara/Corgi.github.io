$(window).on("scroll", function() {
    
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
        $(".headerbuttons").addClass("active")
        $(".logo").attr("src","BlackCorgiWithRing.png")
        }      
    else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("active");
       $(".headerbuttons").removeClass("active");
       $(".logo").attr("src","Corgi-1 (2).png")
    }
});


$(window).on("scroll", function() {
    
    if($(window).scrollTop() > 700) {
        $(".imagesa").addClass("blue")
        $(".before_buyinglink").removeClass("blue")
        }      
    else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".imagesa").removeClass("blue")
    }
});

$(window).on("scroll", function() {
    
    if($(window).scrollTop() > 2100) {
        $(".aboutlink").addClass("blue")
        $(".imagesa").removeClass("blue")
        }      
    else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".aboutlink").removeClass("blue")
    }
});

$(window).on("scroll", function() {
    
    if($(window).scrollTop() > 3500) {
        $(".before_buyinglink").addClass("blue")
        $(".imagesa").removeClass("blue")
        $(".aboutlink").removeClass("blue")
        }      
    else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".before_buyinglink").removeClass("blue")
        $(".abouta").removeClass("blue")
    }
});