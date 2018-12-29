$( document ).ready(function() {
   function Circle(id, percent, text){
        $(id).circliful({
        percent: percent,
        animationStep: 3,
        halfCircle: 5,
        textStyle: 'font-size: 16px; color: #7f8c8c; font-family: OpenSans-ExtraBold',
        pointSize: 1000,
        dimension: 100,
        fontColor: '#7f8c8c',
        percentageTextSize: 30,
        textAdditionalCss:'font-family: OpenSans-ExtraBold',
        backgroundColor: '#76c7c0',
        foregroundColor: '#e2534b',
        text: text,
        noPercentageSign: true,
        textBelow: true
            });
   }

   function AnimateCircle(id,percent, text){
        if ($(window).width() >= 1030){
            $(window).scroll(function() {
               if($(window).scrollTop() + $(window).height() >= $(document).height() -900) {
                   console.log(1)
                    if ($(id).attr('data-animation') == 0){
                    $(id).attr('data-animation', '1');
                    Circle(id, percent, text);
                    }
                }
                if($(window).scrollTop() <= 950){
                    $(id).attr('data-animation', '0');
                    $("svg").remove();
                }
            });
        }else{
             Circle(id, percent, text);
        }

    }

    AnimateCircle ('#1-circle',50, 'SUSPENDISE');
    AnimateCircle ('#2-circle', 70,'MAECENAS');
    AnimateCircle ('#3-circle', 80, 'ALIQUAM');
    AnimateCircle ('#4-circle', 100, 'HABIRASSE');

    function AnimateSlider(){

        var timer = null;
        var slideCount = 2;
        var a, b = 0;
        var slideIndex = 0;

        function nextSlider(slideIndex) {
            timer = setInterval(function(){
                if (slideIndex >= slideCount) {
                    Slider(slideIndex, 0);
                    slideIndex = 0;
                } else {
                    Slider(slideIndex, slideIndex + 1);
                    slideIndex++
                }
            }, 3000)
        }

        function selectSlide(side) {
            var currentSlide = StopSlider();
            if (currentSlide < 0) {
                start = 0;
                end = slideCount;
            } else if (currentSlide >= slideCount && side == -1) {
                start = slideCount;
                end = 0;
            } else {
                start = currentSlide;
                end = currentSlide - side;
            }
            Slider(start, end);
            nextSlider(end);
        }

        nextSlider(0);

        $(".move.left-pointer").click(function(){
            selectSlide(1);
        });

        $(".move.right-pointer").click(function(){
            selectSlide(-1);
        });

        $(".band").click(function(){
            var current_slide = StopSlider();
            //index - то, на что я нажала
            //stopslider - то, где остановилось
             if (current_slide == -1){
                current_slide = 0;
            }
            var index = $(this).index();
            console.log(index);
            if (current_slide != index){
                b = index;
                a = current_slide;
            }
            Slider(a, b);
        });

        function Slider(a, b){
            //console.log("slider",a,b)
            var slide = $('.slider-content-wrapper').eq(a);
            var slide_next = $('.slider-content-wrapper').eq(b);
            $(slide_next).addClass("current_slide");
            $(slide).removeClass("current_slide");
            $(slide).find("*").fadeOut();
            $(slide_next).find("*").fadeIn();
            var band = $('.band').eq(a);
            var band_next = $('.band').eq(b);
            $(band).css("background","#b0b8b9");
            $(band_next).css("background","#e2534b");

        }

        function StopSlider(){
            clearInterval(timer)
            var current_slide = $('.current_slide').index();
            return current_slide;
        }

    }

    AnimateSlider();

    $('.read-more').mouseover(function() {
        $(this).css("background","#fff");
        $(this).find('.icon-style').css("color","#e8645a");
        $(this).closest('.read-more').find('.read-more-button').css("background","#e8645a");
        });

    $('.read-more').mouseout(function() {
        $(this).css("background","#f8f8f8");
        $(this).find('.icon-style').css("color","#76c7c0");
        $(this).closest('.read-more').find('.read-more-button').css("background","#76c7c0");
        });

     $('.move').mouseover(function() {
        $(this).css("background","#e8645a");
        });

     $('.move').mouseout(function() {
        $(this).css("background","#98a3a3");
        });
     $('.happy-switch').mouseover(function() {
        $(this).css("background","#e8645a");
        });

     $('.happy-switch').mouseout(function() {
        $(this).css("background","#98a3a3");
        });

 });