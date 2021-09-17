$(document).ready(function () {
    $('.tab-list li').click(function(){
        var id = $(this).attr('data-id');
        $('.tab-list li').removeClass('active');
        $('.upcoming-anime').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active');
    });
    $('.slide-list').slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
		autoplay: false,
        adaptiveHeight: true
    });
});