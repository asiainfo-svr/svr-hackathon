	//banner组件开关
// $(function(){
// 	$("#turn-banner").click(function(){
// 		oAddHtml.fBannerHtml(".V-div");
// 		oAddHtml.fGetBannerTime();
// 	})

// 	//nav组件开关
// 	$("#turn-nav").click(function(){
// 		oAddHtml.fNavHtml(".V-div");
// 		oAddHtml.fMyEventFunc();
// 	})	

// 	//一级标题开关
// 	$("#turn-title1").click(function(){
// 		oAddHtml.fTitleHtmlLevel1(".V-div");
// 	})

// 	//二级标题开关 蓝色
// 	$("#turn-title2").click(function(){
// 		oAddHtml.fTitleHtmlLevel2_b(".V-div");
// 	})

// 	//二级标题开关 黄色
// 	$("#turn-title3").click(function(){
// 		oAddHtml.fTitleHtmlLevel2_y(".V-div");
// 	})

// 	//默认按钮开关
// 	$("#turn-btn").click(function(){
// 		oAddHtml.fBtnHtml(".V-div");
// 	})
// })

var oAddHtml = {
	//banner组件页面结构
	fBannerHtml : function(bannerObj){
		$(bannerObj).find('.par-banner').remove();
		var oBanner = $(	'<div class="par-banner clearfix">'+
			'<div class="banner-box-left clearfix">'+
				'<div class="par-div bar">'+
					'<img class="par-img" src="img/logo1.png">'+
				'</div>'+
				'<div class="par-div">'+
					'<img class="par-img" src="img/title.png">'+
				'</div>'+
			'</div>'+
			'<div class="banner-box-right clearfix">'+
				'<div class="par-div par-clock">'+
					'<div class="par-item detailTime"></div>'+
					'<div class="par-item detailDay"></div>'+
					'<div class="par-bg">'+
						'<div class="par-bg-left"></div>'+
						'<div class="par-bg-center"></div>'+
						'<div class="par-bg-right"></div>'+
					'</div>'+
				'</div>'+
				'<div class="par-div par-img-text">'+
					'<div class="par-div-img">'+
						'<img class="par-img" src="img/user.png">'+
					'</div>'+
					'<div class="par-div-text">'+
						'<span>Johnn Smith</span>'+
						'<i class="iconfont icon-xiasanjiao-copy1"></i>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'</div>');
  		$(bannerObj).append(oBanner);
	},
	//nav组件页面结构
	fNavHtml : function(navObj){
		$(navObj).find('.par-nav').remove();
		var oNav = $(	'<div class="par-nav">'+
			'<div class="nav-box">'+
				'<div class="nav-home">'+
					'<div class="gradient-btn grad-nav">'+
						'<button type="button" class="btn btn-primary btn-lg">'+
							'<i class="iconfont icon-shouye"></i>'+
						'</button>'+
						'<div class="bg">'+
							'<div class="bg-left"></div>'+
							'<div class="bg-center"></div>'+
							'<div class="bg-right"></div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<ul class="nav-ul clearfix">'+
					'<li>'+
						'<div class="gradient-btn grad-nav">'+
							'<button type="button" class="btn btn-primary btn-lg">总体业务分析</button>'+
							'<div class="bg">'+
								'<div class="bg-left"></div>'+
								'<div class="bg-center"></div>'+
								'<div class="bg-right"></div>'+
							'</div>'+
						'</div>'+
						'<div class="par-drop">'+
							'<ul class="clearfix">'+
								'<li class="par-li">'+
									'开账收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
								'<li class="par-li">'+
									'运营收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'话务量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'流量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
							'</ul>'+
							//以下为下拉框li的透明背景
							'<div class="bg-opacity"></div>'+						
						'</div>'+
					'</li>'+
					'<li>'+
						'<div class="gradient-btn grad-nav">'+
							'<button type="button" class="btn btn-primary btn-lg">4G发展分析</button>'+
							'<div class="bg">'+
								'<div class="bg-left"></div>'+
								'<div class="bg-center"></div>'+
								'<div class="bg-right"></div>'+
							'</div>'+
						'</div>'+
						'<div class="par-drop">'+
							'<ul class="clearfix">'+
								'<li class="par-li">'+
									'开账收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
								'<li class="par-li">'+
									'运营收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'话务量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'流量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
							'</ul>'+
							// 以下为下拉框li的透明背景 
							'<div class="bg-opacity"></div>'+						
						'</div>'+
					'</li>'+
					'<li>'+
						'<div class="gradient-btn grad-nav">'+
							'<button type="button" class="btn btn-primary btn-lg">用户发展分析</button>'+
							'<div class="bg">'+
								'<div class="bg-left"></div>'+
								'<div class="bg-center"></div>'+
								'<div class="bg-right"></div>'+
							'</div>'+
						'</div>'+
						'<div class="par-drop">'+
							'<ul class="clearfix">'+
								'<li class="par-li">'+
									'开账收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
								'<li class="par-li">'+
									'运营收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'话务量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'流量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
							'</ul>'+
							// 以下为下拉框li的透明背景 
							'<div class="bg-opacity"></div>'+					
						'</div>'+
					'</li>'+
					'<li>'+
						'<div class="gradient-btn grad-nav">'+
							'<button type="button" class="btn btn-primary btn-lg">宽带发展分析</button>'+
							'<div class="bg">'+
								'<div class="bg-left"></div>'+
								'<div class="bg-center"></div>'+
								'<div class="bg-right"></div>'+
							'</div>'+
						'</div>'+
						'<div class="par-drop">'+
							'<ul class="clearfix">'+
								'<li class="par-li">'+
									'开账收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
								'<li class="par-li">'+
									'运营收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'话务量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'流量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
							'</ul>'+
							// 以下为下拉框li的透明背景 
							'<div class="bg-opacity"></div>'+					
						'</div>'+
					'</li>'+
					'<li>'+
						'<div class="gradient-btn grad-nav">'+
							'<button type="button" class="btn btn-primary btn-lg">电子渠道分析</button>'+
							'<div class="bg">'+
								'<div class="bg-left"></div>'+
								'<div class="bg-center"></div>'+
								'<div class="bg-right"></div>'+
							'</div>'+
						'</div>'+
						'<div class="par-drop">'+
							'<ul class="clearfix">'+
								'<li class="par-li">'+
									'开账收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
								'<li class="par-li">'+
									'运营收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'话务量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'流量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
							'</ul>'+
							// 以下为下拉框li的透明背景 
							'<div class="bg-opacity"></div>'+					
						'</div>'+
					'</li>'+
					'<li>'+
						'<div class="gradient-btn grad-nav">'+
							'<button type="button" class="btn btn-primary btn-lg">监控告警</button>'+
							'<div class="bg">'+
								'<div class="bg-left"></div>'+
								'<div class="bg-center"></div>'+
								'<div class="bg-right"></div>'+
							'</div>'+
						'</div>'+
						'<div class="par-drop">'+
							'<ul class="clearfix">'+
								'<li class="par-li">'+
									'开账收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
								'<li class="par-li">'+
									'运营收入分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'话务量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+						
								'<li class="par-li">'+
									'流量分析'+
									'<div class="par-b-shade"></div>'+
								'</li>'+
							'</ul>'+
							// 以下为下拉框li的透明背景 
							'<div class="bg-opacity"></div>'+					
						'</div>'+
					'</li>'+
				'</ul>'+
				// 左右滑组件 
				'<div class="nav-btn">'+
		
				'</div>'+
			'</div>'+
			'<div class="par-b-shade"></div>'+
		'</div>');
  		$(navObj).append(oNav);
	},
	/**
	 * 一级标题
	 * fTitleHtmlLevel1是一级标题
	 */	
	fTitleHtmlLevel1 : function(titleObj){
		$(titleObj).find('.title-box').remove();
		var oTitle = $(	'<div class="title-box">'+
	      '<div class="title title-level1">'+
	          '<h3>2016年8月20日区域三4G发展量</h3>'+
	          '<div class="bg">'+
	              '<div class="bg-left"></div>'+
	              '<div class="bg-center"></div>'+
	              '<div class="bg-right"></div>'+
	          '</div>'+
	      '</div>'+
	  '</div>');
	  $(titleObj).append(oTitle);
	},		
	/**
	 * 二级标题
	 * fTitleHtmlLevel2_b是蓝色标注的二级标题
	 */
	// ".box" "#ibox"
	fTitleHtmlLevel2_b : function(titleObj){
		$(titleObj).find('.title-level2').remove();
		var oTitle = $( 
			'<div class="title title-level2">'+
	      '<img class="title-img" src="img/i-blue.png">'+
	      '<h3>2016年8月20日区域三4G发展量</h3>'+
	  	'</div>');
	  $(titleObj).before(oTitle);
	  $(titleObj).parent().css("padding-top","40px");
	},
	/**
	 * 二级标题
	 * fTitleHtmlLevel2_y是黄色标注的二级标题
	 */
	fTitleHtmlLevel2_y : function(titleObj){
		$(titleObj).find('.title-level2').remove();
		var oTitle = $( 
			'<div class="title title-level2">'+
	      '<img class="title-img" src="img/i-yellow.png">'+
	      '<h3>2016年8月20日区域三4G发展量</h3>'+
	  	'</div>');
	  $(titleObj).before(oTitle);
	  $(titleObj).parent().css("padding-top","40px");
	},
	//按钮组件
	fBtnHtml : function(btnObj){
		var oBtn = $('<button type="button" class="btn btn-primary">默认按钮</button>');
		$(btnObj).append(oBtn);
	},
	// 获取当前时间
	fGetBannerTime : function(){
	    var myDate = new Date(),
	        myHour = myDate.getHours(),
	        myMini = myDate.getMinutes(),
	        //mySeconds = myDate.getSeconds(),//设置秒
	        myYear = myDate.getFullYear(),
	        myMonth = Number(myDate.getMonth())+1,
	        myDay  = myDate.getDate();
	    function fchangeTime(str){
	        var _str = Number(str);
	        if(_str >= 0 && _str < 10){
	            _str = "0" + _str;
	        }
	        return _str;
	    }
	    myHour = fchangeTime(myHour);
	    myMini = fchangeTime(myMini);
	    //mySeconds = changeTime(mySeconds);
	    $(".detailTime").html(myHour+":"+myMini);
	    $(".detailDay").html(myYear+"年"+myMonth+"月"+myDay+"日")
	    setTimeout('fGetBannerTime()',60000)
	},
	// nav相关事件
	fMyEventFunc : function(){
	    $(".nav-ul >li").click(function(event){
	        event = event || window.event;
	        event.stopPropagation();
	        $(this).siblings().find(".par-drop").slideUp();
	        $(this).find(".par-drop").slideToggle(300);
	        $(this).find(".grad-nav").addClass("grad-nav-cli");
	        $(this).siblings("li").find(".grad-nav").removeClass("grad-nav-cli");
	        $(".nav-home").find(".grad-nav").removeClass("grad-nav-cli");
	    })
	    $(".grad-nav").hover(function(){
	        if(!$(this).hasClass("grad-nav-cli")){
	            $(this).addClass("grad-nav-hover");
	        } 
	    },function(){
	        $(this).removeClass("grad-nav-hover");
	    })
	    $(document).click(function(){
	        $(".nav-ul").find(".par-drop").slideUp();
	    })
	    $(".nav-home").click(function(event){
	        event = event || window.event;
	        event.stopPropagation();
	        $(this).find(".grad-nav").addClass("grad-nav-cli");
	        $(".nav-ul >li").find(".par-drop").slideUp();
	        $(".nav-ul >li").find(".grad-nav").removeClass("grad-nav-cli");
	    })
	}
}