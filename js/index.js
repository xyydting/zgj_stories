window.onload = function() {
	//右侧二维码
	var scrollboxt = $(".er_bg").offset().top;
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop() + 150;
		if (scrollTop >= scrollboxt) {
			$('.er_bg').addClass('xs_news_left_fixed').css({
				'position': 'fixed',
				'top': 150 + 'px',
			})
		} else {
			$('.er_bg').removeClass('xs_news_left_fixed').css({
				'position': 'absolute',
				'top': 1062 + 'px'
			});
		}
	});
	//飘窗功能	
	//飘窗点击关闭
	$("#closed").click(function() {
		$("#piao").hide();
	});
	floatObj = document.getElementById("piao");
	//飘窗开始
	start();
}

//飘窗
var floatObj;
var xPos = 300;
var yPos = 200;
var step = 1;
var delay = 30;
var height = 0;
var Hoffset = 0;
var Woffset = 0;
var yon = 0;
var xon = 0;
var pause = true;
var interval;

function changePos() {
	width = $(window).width();
	height = $(window).height();
	Hoffset = floatObj.offsetHeight;
	Woffset = floatObj.offsetWidth;
	floatObj.style.left = xPos + 'px';
	floatObj.style.top = yPos + 'px';
	if (yon) {
		yPos = yPos + step;
	} else {
		yPos = yPos - step;
	}
	if (yPos < 0) {
		yon = 1;
		yPos = 0;
	}
	if (yPos >= (height - Hoffset)) {
		yon = 0;
		yPos = (height - Hoffset);
	}
	if (xon) {
		xPos = xPos + step;
	} else {
		xPos = xPos - step;
	}
	if (xPos < 0) {
		xon = 1;
		xPos = 0;
	}
	if (xPos >= (width - Woffset)) {
		xon = 0;
		xPos = (width - Woffset);
	}
}

function start() {
	floatObj.visibility = "visible";
	interval = setInterval('changePos()', delay);
	floatObj.onmouseover = function() {
		clearInterval(interval)
	}
	floatObj.onmouseout = function() {
		interval = setInterval('changePos()', delay)
	}
}

function pause_resume() {
	if (pause) {
		clearInterval(interval);
		pause = false;
	} else {
		interval = setInterval('changePos()', delay);
		pause = true;
	}
}