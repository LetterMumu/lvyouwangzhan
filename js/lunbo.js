var index = 0;
var $icons = $(".icon ul li");
var $imgs = $(".lunbo1 ul li");
var timer = null;
$(".right").click(function () {
	index++;
	if (index > 5) index = 0;
	play();
});
$(".left").click(function () {
	index--;
	if (index < 0) index = 5;
	play();
});

function play() {
	$icons.eq(index).addClass("first").siblings().removeClass("first");
	$imgs.eq(index).addClass("curr").siblings().removeClass("curr");
}
$icons.hover(function () {
	index = $(this).index();
	play();
});

$("#lunbo").hover(function () {
	$(".btn").show();
	clearInterval(timer);
}, function () {
	$(".btn").hide();
	autoplay();
});

function autoplay() {
	timer = setInterval(function () {
		index++;
		if (index > 5) index = 0;
		play();
	}, 2000);
}
autoplay();