<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
	<base href="<%=basePath%>" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>车辆销售额对比图</title>
	<link rel="stylesheet" href="css/style.css">
	 <link rel="stylesheet" href="fonts/iconfont.css">
      <link rel="stylesheet" href="css/settingModule.css">
      <link rel="stylesheet" href="css/modules.css">
	<link rel="stylesheet" href="css/hotmap.css">
</head>
<body>
 <div class="box-banner">
  <div class="par-banner clearfix">
    <div class="banner-box-left clearfix">
      <div class="par-div">
        <img class="par-img" src="img/logo2.png"></div>
    </div>
    <div class="banner-box-right clearfix">
      <div class="par-div par-clock">
        <div class="par-item detailTime">23:32</div>
        <div class="par-item detailDay">2016年9月9日</div>
        <div class="par-bg">
          <div class="par-bg-left"></div>
          <div class="par-bg-center"></div>
          <div class="par-bg-right"></div>
        </div>
      </div>
      <div class="par-div par-img-text">
        <div class="par-div-img">
          <img class="par-img" src="img/user.png"></div>
        <div class="par-div-text">
          <span>Johnn Smith</span> <i class="iconfont icon-xiasanjiao-copy1"></i>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="box-nav" style="top: 84px;">
  <div class="par-nav">
    <div class="nav-box">
      <div class="nav-home">
        <div class="gradient-btn grad-nav">
          <a type="button" class="btn btn-primary btn-lg" href="home"> <i class="iconfont icon-shouye"></i>
          </a>
          <div class="bg">
            <div class="bg-left"></div>
            <div class="bg-center"></div>
            <div class="bg-right"></div>
          </div>
        </div>
      </div>
      <ul class="nav-ul clearfix">
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/hotmap">车辆销量热力图</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav grad-nav-cli">
            <a type="button" class="btn btn-primary btn-lg" href="view/hotmap1">车辆销售额对比图</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/person">热区人群画像</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/showEnd">热区消费偏好</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/luxuryGoods">奢侈品销售分析</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
      </ul>
      <div class="nav-btn"></div>
    </div>
    <div class="par-b-shade"></div>
  </div>
</div>
	<div class="hotmap1">
		<div class="area area1">
			<p>热区A
				<span class="money">50万</span>
			</p>
			<img src="img/hk.png" alt="">
		</div>
		<div class="area area2">
			<p>热区B
				<span class="money">65万</span>
			</p>
			<img src="img/he.png" alt="">
		</div>
		<div class="area area3">
			<p>热区C
				<span class="money">75万</span>
			</p>
			<img src="img/hf.png" alt="">
		</div>
		<div class="area area4">
			<p>热区D
				<span class="money">30万</span>
			</p>
			<img src="img/hg.png" alt="">
		</div>
		<div class="alert_parent">
			<div class="map_alert map_alert1">
				<div class="area_html">热区B</div>
				<div class="alert_text">
				<ul>
					<li>
						<p class="alert_left">面积</p>
						<p class="alert_right">1408㎡</p>
					</li>
					<li>
						<p class="alert_left">面积</p>
						<p class="alert_right">1408㎡</p>
					</li>
					<li>
						<p class="alert_left">行政区</p>
						<p class="alert_right">静安寺</p>
					</li>
					<li>
						<p class="alert_left">人均消费</p>
						<p class="alert_right">5000K/月</p>
					</li>
				</ul>
				</div>
			</div>
			<div class="map_alert2"></div>
		</div>
	</div>
</body>
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/l-banner.js"></script>
<script>
$(function(){
	fHoverBg('.area');
	oAddHtml.fGetBannerTime();
	oAddHtml.fMyEventFunc();
	fAutoWidth();
	$(window).resize(function(){
		fAutoWidth();
	})
})
function fHoverBg(obj){
	$('.map_alert').show()
	var htmlObj = [
		{
			alertL:['人数','面积','徐汇区','人均消费'],
			alertR:['50万','14.08k㎡','徐家汇','10000K/月']
		},
		{
			alertL:['人数','面积','长宁区','人均消费'],
			alertR:['75万','21.08k㎡','长宁区','6000K/月']
		},
		{
			alertL:['人数','面积','行政区','人均消费'],
			alertR:['80万','24.08k㎡','静安寺','5000K/月']
		},
		{
			alertL:['人数','面积','青浦区','人均消费'],
			alertR:['132万','24.08k㎡','卢湾区','8000K/月']
		}
	]
	$(obj).mouseenter(function(){
		var src = $(this).find('img').attr('src').split('.')[0];
		$(this).find('img').attr('src',src+'1.png');
		var left = $(this).find('img').offset().left,
			width = $(this).find('img').width(),
			top  = $(this).find('img').offset().top,
			html = $(this).find('p').html().split('<span')[0],
			i= $(this).index();
		for(var j=0;j<3;j++){
			$('.alert_left').eq(j).html(htmlObj[i]['alertL'][j]);
			$('.alert_right').eq(j).html(htmlObj[i]['alertR'][j]);
		} 
		console.log($('.alert_parent').width())
		$('.area_html').html(html);
		$('.alert_parent').css({
			left:left-$('.alert_parent').width()+width/2-12,
			top:top-$('.alert_parent').height() - $('.hotmap1').offset().top,
			display:'block'
		});
		$(obj).mouseleave(function(){
			$(this).find('img').attr('src',src+'.png');
			$('.alert_parent').hide();
		})
	})
}
var doc = document.documentElement;
function fAutoWidth(){
	var width = doc.clientWidth;
	var zoom = width/1349;
	zoom < 0.6 ? zoom = 0.6:0;
	$('.hotmap1').css({zoom:zoom})
}
</script>
</html>