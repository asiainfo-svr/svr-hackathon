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
    <title>热区人群画像</title>
    <link rel="shortcut icon" href="img/small-logo.png">
    <link rel="stylesheet" href="css/qudao.css">
      <link rel="stylesheet" href="fonts/iconfont.css">
      <link rel="stylesheet" href="css/settingModule.css">
      <link rel="stylesheet" href="css/modules.css">
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/l-banner.js"></script>
</head>
<body style="background: url(img/bg.png) 50%;
    background-size: 150%;">
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
          <div class="gradient-btn grad-nav grad-nav-cli">
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
<style type="text/css">
  .qudao-con{
    width:100%;
    height: 90%;
  }
</style>
    <div class="qudao-out">
      <div class="qudao" >
        <div class="qudao-l" id='echarts2'>
        </div>
        <div class="qudao-r">
          <div class="qudao-in" >
            <p class="qudao-til">
            APP购物分析柱状图
            </p>
            <div class="qudao-con" id='echarts4'>
            </div>
          </div>
          <div class="qudao-in" >
          <p class="qudao-til" >
          实体店购物分析柱状图
            </p>
            <div class="qudao-con" id='echarts5'>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
<script src="js/echarts.js"></script>
<script src="js/EchartsConfig.js"></script>
<script type="text/javascript" src="js/showEnd.js"></script>
</html>
