window.onload=function(){
	//右侧二维码
    var scrollboxt = $(".er_bg").offset().top;
    console.log(scrollboxt);
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop()+150;
        if (scrollTop >= scrollboxt) {
            $('.er_bg').addClass('xs_news_left_fixed').css({
                'position': 'fixed',
                'top': 150+ 'px',
            })
        } else {
            $('.er_bg').removeClass('xs_news_left_fixed').css({
                'position': 'absolute',
                'top': 1062+'px'
            });
        }
    });
}
