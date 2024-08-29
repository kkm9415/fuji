$(function(){

    // slide image
    $('.slide_box').slick();

    // menu drop down
    $(".main_menu li").on({
        mouseover:function(){
            $(".main_menu .sub").stop().slideDown();
        },
        mouseout:function(){
            $(".main_menu .sub").stop().slideUp();
        }
    });

    // menu bar
    $(".menu_bar i").on('click',function(){
        $(".menu_box").stop().animate({right:'0'});
    });
    $(".close").on('click',function(){
        $(".menu_box").stop().animate({right:"-100%"})
    });

    // top button
    $(window).on('scroll',function(){
        let spot = $(window).scrollTop();
                console.log(spot)

        if($(this).scrollTop()>=100){
            $(".top_btn").fadeIn();
        } else{
            $(".top_btn").fadeOut();
        }
    });

    $(".top_btn").on('click',function(){
        $(window).scrollTop(0);
    });

});
// 끝