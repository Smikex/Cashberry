// togle nav
var mobileBtn = $(".mobileBtn");
var menu = $(".header__menu");

mobileBtn.on('click',  function(event) {
 event.preventDefault();
 $(this).toggleClass('active');
 menu.toggleClass('active');
});

// tabs

$('.walletButtons__link_mobile').click(function(){
$('.walletButtons__link_desktop').removeClass('walletButtons__link_active');
$('.walletButtons__link_mobile').addClass('walletButtons__link_active');
$('.walletBlock_desktop').addClass('walletBlock_none');
$('.walletBlock__img_desktop').addClass('hidden');
$('.walletBlock__img_mobile').removeClass('hidden')
});


$('.walletButtons__link_desktop').click(function(){
    $('.walletButtons__link_mobile').removeClass('walletButtons__link_active');
    $('.walletButtons__link_desktop').addClass('walletButtons__link_active');
    $('.walletBlock_mobile').addClass('walletBlock_none');
    $('.walletBlock_desktop').removeClass('walletBlock_none');
    $('.walletBlock__img_mobile').addClass('hidden');
    $('.walletBlock__img_desktop').removeClass('hidden')
    });

