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
          <div class="gradient-btn grad-nav grad-nav-cli">
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
    <div class="wrap bg-star">
        <div class="main pt150">
            <div class="portrait">
                <div class="portrait-gender" center_img="gender">
                    <p>性别</p>
                    <h1>男</h1>
                </div>
                <div class="portrait-age" center_img="age">
                    <p>年龄</p>
                    <h1>35</h1>
                </div>
                <div class="portrait-professional" center_img="professional">                    
                    <p>职位</p>
                    <h1>经理人</h1>
                </div>
                <div class="portrait-schooling" center_img="schooling">
                    <p>学历</p>
                    <h1>本科</h1>
                </div>
                <div class="portrait-income" center_img="income">
                    <p>收入</p>
                    <h1>16K</h1>
                </div>
                <div class="portrait-center"></div>
            </div>
        </div>
    </div>
    <script>
        $(function() {
            Img();
            oAddHtml.fGetBannerTime();
            oAddHtml.fMyEventFunc();
            $(".portrait-center").unbind("click");
            $(".portrait > div").hover(function(){
              if(!$(this).hasClass("portrait-click")){
                $(this).addClass("portrait-hover");
              }
            },function(){
              $(this).removeClass("portrait-hover");
            })
            function Img() {
                $(".portrait > div").click(function() {
                    $(".portrait-center").unbind("click");
                    $(".portrait > div").removeClass("portrait-click");
                    var centerImg = $(this).attr("center_img");
                    $(this).addClass("portrait-click");
                    $(".portrait-center").addClass("portrait-transform").css({
                        backgroundImage: "url(img/" + centerImg + ".png)"
                    });
                    $(".portrait > div").unbind("click");
                    setTimeout(function() {
                        $(".portrait-center").removeClass("portrait-transform");
                        Img();
                        $(".portrait-center").unbind("click");
                    }, 1000)
                })
            }

        })

    </script>
</body>

</html>
