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
	<link rel="shortcut icon" href="img/small-logo.png">
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
          <div class="gradient-btn grad-nav">
            <a type="button" class="btn btn-primary btn-lg" href="view/hotmap">汽车消费潜力图</a>
            <div class="bg">
              <div class="bg-left"></div>
              <div class="bg-center"></div>
              <div class="bg-right"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="gradient-btn grad-nav grad-nav-cli">
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
	<div class="hotmap1">
		<div class="area area1">
			<p>徐汇区
				<span class="money"></span>
			</p>
			<img src="img/hk.png" alt="">
		</div>
		<div class="area area2">
			<p>长宁区
				<span class="money"></span>
			</p>
			<img src="img/he.png" alt="">
		</div>
		<div class="area area3">
			<p>静安区
				<span class="money"></span>
			</p>
			<img src="img/hf.png" alt="">
		</div>
		<div class="area area4">
			<p>黄浦区
				<span class="money"></span>
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
	oAddHtml.fGetBannerTime();
	oAddHtml.fMyEventFunc();
	var data = [
	    		{
	    			alertL:['人口密度','人均GDP','私车存量'],
	    			alertR:['20176人/k㎡','11.71万','18万辆']
	    		},
	    		{
	    			alertL:['人口密度','人均GDP','私车存量'],
	    			alertR:['18187人/k㎡','15.14万','7万辆']
	    		},
	    		{
	    			alertL:['人口密度','人均GDP','私车存量'],
	    			alertR:['29651人/k㎡','13.49万','15万辆']
	    		},
	    		{
	    			alertL:['人口密度','人均GDP','私车存量'],
	    			alertR:['34100人/k㎡','24.93万','5万辆']
	    		}
	    	];
	fAreaDataAndBg('.area',data);

});
/**
 * [fAreaDataAndBg description]
 * @param  {[type]} obj  [区域对象]
 * @param  {[type]} data [各区域数据]
 * @return {[type]}      [description]
 */
function fAreaDataAndBg(obj,data){
	$('.map_alert').show()

	$(obj).mouseenter(function(){
		var src = $(this).find('img').attr('src').split('.')[0];
		$(this).find('img').attr('src',src+'1.png');
		var left = $(this).find('img').offset().left,
			width = $(this).find('img').width(),
			top  = $(this).find('img').offset().top,
			html = $(this).find('p').html().split('<span')[0],
			i= $(this).index();
		for(var j=0;j<4;j++){
			$('.alert_left').eq(j).html(data[i]['alertL'][j]);
			$('.alert_right').eq(j).html(data[i]['alertR'][j]);
		}
		$('.area_html').html(html);
		$('.alert_parent').css({
			left:left-$('.alert_parent').width()-$('.hotmap1').offset().left+width/2-12,
			top:top-$('.alert_parent').height()-$('.hotmap1').offset().top,
			display:'block'
		});
		$(obj).mouseleave(function(){
			$(this).find('img').attr('src',src+'.png');
			$('.alert_parent').hide();
		})
	})
}

</script>
</html>