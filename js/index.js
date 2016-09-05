// JavaScript Document

$(function(){
	/*$(".footmenu > figcaption figure").click(
		function(){
			$(this).addClass("currentlogo").siblings().removeClass("currentlogo");
			$(".footmenu > hgroup a").eq($(this).index()).addClass("color").siblings().removeClass("color");
		}
	);*/
		
	$("#rec").click(
		function(){
			$(document).scrollTop(0);
		}
	);
	$(document).scroll(
		function(){
			toppos = $(document).scrollTop();
			if(toppos > 0){
				$("#header .search").addClass("searfix");	
			}else if(toppos == 0){
				$("#header .search").removeClass("searfix");
			}
			if(toppos > 30){
				$("#rec").fadeIn();
			}else if(toppos == 0){
				$("#rec").fadeOut();
			}
		}
	);
	
	$("#section > .banner .bannerbox .photobox .imgbox").eq(0).show().siblings().hide();
	var size = $("#section > .banner .ctrlboxsmall .ctrl").length;
	var i=0;
	var t=setInterval(move,2000);
	function move(){
		i++;
		if(i==size){
			i=0;
		}
		$("#section > .banner .ctrlboxsmall .ctrl").eq(i).addClass("current").siblings().removeClass("current");
		$("#section > .banner .bannerbox .photobox .imgbox").eq(i).show().siblings().hide();
	}
	
	var t = setInterval(
		function(){
			$("#section > .hot hgroup").animate({marginTop:-32},2000,function(){
				$("#section > .hot hgroup h4:last").after($("#section > .hot hgroup h4:first"));
				$("#section > .hot hgroup").css({marginTop:0});
			});
		},3000
	);
	
	$("#section .today .tbox .todaybox").eq(0).show().siblings().hide();
	$("#section .today .title h2").click(
		function(){
			$(this).addClass("current-color").siblings().removeClass("current-color");
			$("#section .today .tbox .todaybox").eq($(this).index()).show().siblings().hide();
		}
	);
	/*$("#section .today figure,#section .new .img").mouseenter(
		function(){
			$(this).addClass("figbgcolor");
		}
	).mouseleave(
		function(){
			$(this).removeClass("figbgcolor");
		}
	);*/
	
	var bodywid = document.body.clientWidth;
	if(bodywid < 622){
		var imgwid = bodywid * 0.49;
	}
	else if(bodywid >= 622){
		var imgwid = bodywid * 0.2425;
	}
	$("#section > .new figure .img").css({"height":imgwid});
	//var imgheight = $("#section > .new figure .img").height();
	//alert(imgwid + " " + imgheight);

})
