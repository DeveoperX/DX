$(document).ready(function(){
    $(".bars").click(function(){
        $(".header_overlay").toggleClass("custom_styling");
        $(this).toggleClass("change_bar");
    });
    $(".header_overlay nav ul li a").click(function(){
        $(".header_overlay").toggleClass("custom_styling");
        $(".bars").toggleClass("change_bar");
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > 5){
            $(".header").addClass('custom_header');
        }
        else{
            $(".header").removeClass('custom_header');
        }
    });
    $(".section_1_btn").click(function(){
        $("#hidden_row").slideToggle('slow');
        $("#hidden_row").css({
            display: 'flex'
        })
        $(this).hide();
    });
    $("#blog_show").click(function(){
        console.log('hello');
        $("#hidden_blogs").slideToggle('slow');
        $("#hidden_blogs").css({
            display: 'flex'
        })
        $(this).hide();
    });
    $("#blog_btn_1").click(function(){
        $("#para_1").slideDown("slow");
        $(this).hide();
    });
    $("#blog_btn_2").click(function(){
        $("#para_2").slideDown("slow");
        $(this).hide();
    });
    $("#blog_btn_3").click(function(){
        $("#para_3").slideDown("slow");
        $(this).hide();
    });
});
$('.main_isotope').isotope({   
    itemSelector: '.item',
    layoutMode: 'fitRows'
    });
    $(".buttons_all button").click(function(){
        $(".buttons_all button").removeClass("active");
        $(this).addClass("active");
        let selector = $(this).attr('data-filter');
        $('.main_isotope').isotope({   
            filter: selector
        });
    });
var typed = new Typed('#typing', {
    strings: ['Front End Developer', 'Web Developer', 'Graphic Designer'],
    smartBackspace: true,
    typeSpeed: 40,
    backSpeed: 30,
    loop: true
});