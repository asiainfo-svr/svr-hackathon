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
    <title>奢侈品销售分析</title>
    <link rel="stylesheet" href="css/mystyle.css">
      <link rel="stylesheet" href="fonts/iconfont.css">
      <link rel="stylesheet" href="css/settingModule.css">
      <link rel="stylesheet" href="css/modules.css">
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/l-banner.js"></script>
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
          <div class="gradient-btn grad-nav grad-nav-cli">
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
    <div class="wrap bg-heat-map">
       

        <div class="heat-map">
            <div class="heat-map-con heat-map-1">
                <div>
                    <p>行政区</p>
                    <p>静安寺</p>
                </div>
                <div>
                    <p>持有量</p>
                    <p>50000</p>
                </div>
                <div>
                    <p>人均消费</p>
                    <p>5000k</p>
                </div>
            </div>
            <div class="heat-map-con heat-map-2">
                <div>
                    <p>行政区</p>
                    <p>静安寺</p>
                </div>
                <div>
                    <p>持有量</p>
                    <p>50000</p>
                </div>
                <div>
                    <p>人均消费</p>
                    <p>5000k</p>
                </div>
            </div>
            <div class="heat-map-con heat-map-3">
                <div>
                    <p>行政区</p>
                    <p>静安寺</p>
                </div>
                <div>
                    <p>持有量</p>
                    <p>50000</p>
                </div>
                <div>
                    <p>人均消费</p>
                    <p>5000k</p>
                </div>
            </div>
            <div class="heat-map-con heat-map-4">
                <div>
                    <p>行政区</p>
                    <p>静安寺</p>
                </div>
                <div>
                    <p>持有量</p>
                    <p>50000</p>
                </div>
                <div>
                    <p>人均消费</p>
                    <p>5000k</p>
                </div>
            </div>
        </div>
    </div>
</body>
<script>
    oAddHtml.fGetBannerTime();
    oAddHtml.fMyEventFunc();
</script>
</html>
