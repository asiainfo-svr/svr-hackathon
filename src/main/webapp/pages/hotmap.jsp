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
	<title>车辆销售热力图</title>
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
          <div class="gradient-btn grad-nav grad-nav-cli">
            <a type="button" class="btn btn-primary btn-lg" href="view/hotmap">车辆销量热力图</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
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
	<div class="hotmap">
		<div class="area area1">
			热区A
		</div>
		<div class="area area2">
			热区B
		</div>
		<div class="area area3">
			热区C
		</div>
		<div class="area area4">
			热区D
		</div>
		<div class="map_alert">
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
	</div>
</body>
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/l-banner.js"></script>
<script>
$(function(){
	oAddHtml.fGetBannerTime();
	fHoverHtml('.area');
	oAddHtml.fMyEventFunc();
	fAutoWidth();
	$(window).resize(function(){
		fAutoWidth();
	})
})
function fHoverHtml(obj){
	var htmlObj = [
		{
			alertL:['面积','徐汇区','人均消费'],
			alertR:['1408㎡','徐家汇','10000K/月']
		},
		{
			alertL:['面积','长宁区','人均消费'],
			alertR:['1408㎡','长宁区','6000K/月']
		},
		{
			alertL:['面积','行政区','人均消费'],
			alertR:['1408㎡','静安寺','5000K/月']
		},
		{
			alertL:['面积','青浦区','人均消费'],
			alertR:['1408㎡','卢湾区','8000K/月']
		}
	]
	$(obj).mouseenter(function(){
		var left = $(this).offset().left,
			top  = $(this).offset().top,
			html = $(this).html(),
			i= $(this).index();
		
		for(var j=0;j<3;j++){
			$('.alert_left').eq(j).html(htmlObj[i]['alertL'][j]);
			$('.alert_right').eq(j).html(htmlObj[i]['alertR'][j]);
		} 
		
		$('.area_html').html(html);
		$('.map_alert').css({
			left:left-480,
			top:top-170-$('.hotmap').offset().top,
			display:'block'
		});
		$(obj).mouseleave(function(){
			$('.map_alert').hide()
		})
	})
}
var doc = document.documentElement;
function fAutoWidth(){
	var width = doc.clientWidth;
	var zoom = width/1349;
	zoom < 0.6 ? zoom = 0.6:0;
	$('.hotmap').css({zoom:zoom})
}
</script>
</html>