//モーダル
lightbox.option({
  'maxWidth': 500,
})

$(".line").animate({"width":"100%"},1500,function(){
    $(".line").css("right",0)
    $(".line").animate({"width":"0%"},function(){
        $(".up").animate({"height":"0%"});
        $(".down").animate({"height":"0%"});
    });
})

$(function (){
	$('.burger').click(function (){
		$(this).toggleClass('nav-active');
    //$('.gnavi').css('display', 'block');
		if($(this).hasClass('nav-active')){
			$('.gnavi').addClass('nav-active');
		}
		else{
			$('.gnavi').removeClass('nav-active');
		}
    $('.burger').toggleClass('toggle');
	})
})
