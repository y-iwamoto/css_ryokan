$(".header-nav-sp").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});
$('.plan-list').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    slidesToShow: 3,//スライドを画面に3枚見せる
    dots: false,//下部ドットナビゲーションの表示
    arrows: false,
    centerMode: true,
    centerPadding: '180px',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,//スライドを画面に3枚見せる
                centerMode: false,
            }
        }
    ]
});
$('.faq-item-title ').on('click', function(){
	$(this).toggleClass('active');
	$(this).next().slideToggle();
});
AOS.init(
    {
        once: true,
    }
);