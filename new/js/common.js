$(document).ready(function(){

    // main typing effect
    var typeSpeed = 130,
        yourText = "Hi, there stranger!",
        anyText = "",
        posText = 0;

    var myInterval = setInterval(function() {
        anyText += yourText[posText];
        if (posText >= yourText.length) {
            clearInterval(myInterval);
        }else {
            $('.container_txt').text(anyText);
            posText++;
        };
    }, typeSpeed);

    //gnb scroll animation
    $(".nav a").click(function() {
        var scrollPosition = $($(this).attr("href")).offset().top;
        $(".nav a").removeClass("active");
        $(this).addClass("active");
        $("html").animate({
            scrollTop: scrollPosition - 77
        }, 500);
    })

    //gnb scroll highlite
    $(window).on('scroll', function() {
        $('.content_section').each(function() {
            if($(window).scrollTop() + 80 >= $(this).offset().top) {
                var id = $(this).attr('id');
                console.log(id);
                $('.nav a').removeClass('active');
                $('.nav a[href="#'+ id +'"]').addClass('active');
            }
        });
    });

    //project detail popup
    $(".pjt .pjt_cont").click(function(){
        $(this).siblings(".popup_area").fadeIn();
        $('body').css({'overflow': 'hidden', 'height': '100%','padding-right':'16px'});
        $(".popup_pjt_detail .btn_close").click(function() {
            $(".popup_area").fadeOut();
            $('body').css({'overflow': 'auto', 'height': '100%','padding-right':'0'});
        });
    });

});