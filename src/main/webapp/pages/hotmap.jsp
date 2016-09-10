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
	<link rel="shortcut icon" href="img/small-logo.png">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/hotmap.css">
	<link rel="stylesheet" href="css/settingModule.css">
      <link rel="stylesheet" href="css/modules.css">
      <link rel="stylesheet" href="fonts/iconfont.css">
</head>
<body>
 <div class="box-banner">
  <div class="par-banner clearfix">
    <div class="banner-box-left clearfix">
       <div class="par-div">
      <a href="home"><img class="par-img w128" src="img/logo2.png"></a></div>
    </div>
    <div class="banner-box-right clearfix">
      <div class="par-div par-clock">
        <div class="par-item detailTime"></div>
        <div class="par-item detailDay"></div>
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
      <ul class="nav-ul clearfix">
        <li>
          <div class="gradient-btn grad-nav grad-nav-cli">
            <a type="button" class="btn btn-primary btn-lg" href="view/hotmap">汽车消费潜力图</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/hotmap1">汽车销量对比图</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/person">潜在消费人群画像</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/showEnd">奢侈品购买渠道分析</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/luxuryGoods">奢侈品销售偏好分析</a>
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
			徐汇区
		</div>
		<div class="area area2">
			长宁区
		</div>
		<div class="area area3">
			静安区
		</div>
		<div class="area area4">
			黄浦区
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
	oAddHtml.fMyEventFunc();
	var data = [
		{
			alertL:['潜在客户数','偏好品牌','消费能力'],
			alertR:['1.3万','大众','25万/辆']
		},
		{
			alertL:['潜在客户数','偏好品牌','消费能力'],
			alertR:['0.9万','丰田','35万/辆']
		},
		{
			alertL:['潜在客户数','偏好品牌','消费能力'],
			alertR:['2.3万','大众','30万/辆']
		},
		{
			alertL:['潜在客户数','偏好品牌','消费能力'],
			alertR:['1.5万','奔驰宝马等','50万/辆']
		}
	]
	fAreaData('.area',data);
})
/**
 * [fHoverHtml description]
 * @param  {[type]} obj  [区域对象]
 * @param  {[type]} data [各区域数据]
 * @return {[type]}      [description]
 */
function fAreaData(obj,data){
	$(obj).mouseenter(function(){
		var left = $(this).offset().left,
			  top = $(this).offset().top,
			  html = $(this).html(),
        mapL = $('.map_alert').width(),
        mapH = $('.map_alert').height(),
        areaW = $(this).width(),
			  i= $(this).index();
		
		for(var j=0;j<4;j++){
			$('.alert_left').eq(j).html(data[i]['alertL'][j]);
			$('.alert_right').eq(j).html(data[i]['alertR'][j]);
		} 
		
		$('.area_html').html(html);
		$('.map_alert').css({
			left:left -mapL-$('.hotmap').offset().left+areaW/2,
			top:top-mapH-$('.hotmap').offset().top+40,
			display:'block'
		});
		$(obj).mouseleave(function(){
			$('.map_alert').hide();
		})
	})
}

</script>
</html>