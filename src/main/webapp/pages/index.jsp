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
    <title>首页</title>
	<link rel="shortcut icon" href="img/small-logo.png">
    <link rel="stylesheet" href="css/mystyle.css">
    <script src="js/jquery-1.10.2.min.js"></script>
</head>

<body>
    <div class="wrap bg-index" style="min-height:100%">
        <div class="main">
            <div class="nav">
                <div class="nav-logo">
                    <a href="home"><img src="img/logo.png" alt=""></a>
                </div>
                <div class="nav-link">
                    <a href="view/hotmap">汽车消费潜力图</a>
                    <a href="view/hotmap1">汽车销量对比图</a>
                    <a href="view/person">潜在消费人群画像</a>
                    <a href="view/showEnd">奢侈品购买渠道分析</a>
                    <a href="view/luxuryGoods">奢侈品销售偏好分析</a>
                </div>
            </div>
            <div class="box padt160">
                <div class="index-banner">
                    <div>
                        <h1 class="h1-header">数据引领未来生活</h1>
                        <p class="plain-text padr300">随着IT化建设的快速发展，智能应用使用的普及，各个行业、系统积累的数据越来越丰富，这些数据的应用也越来越为人们重视。通过对用户APP使用信息、搜索信息、位置信息、个人资料的综合分析，可以为商品销售提供更有力的支撑。
                        </p>
                        <div class="btn-wrap">
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="box padrl">
                <ul class="index-function img-hover-wrap">
                    <li>
                        <div class="img-hover" data-img="index-function-1">
                            <img src="img/index-function-1.png" alt="">
                        </div>
                        <h6 class="h6-header">实时分析</h6>
                        <p class="plain-text">
                            基于海量数据进行深度学习，实时分析，进而产生有价值的分析数据
                        </p>
                    </li>
                    <li>
                        <div class="img-hover" data-img="index-function-2">
                            <img src="img/index-function-2.png" alt="">
                        </div>
                        <h6 class="h6-header">人群画像</h6>
                        <p class="plain-text">
                            对汽车或奢侈品销售的潜在消费人群进行精准画像
                        </p>
                    </li>
                    <li>
                        <div class="img-hover" data-img="index-function-3">
                            <img src="img/index-function-3.png" alt="">
                        </div>
                        <h6 class="h6-header">渠道分布</h6>
                        <p class="plain-text">
                            对销售渠道的分布情况进行分析展示
                        </p>
                    </li>
                </ul>
            </div>
            
           
        </div>
    </div>
    <script>
        $(function() {
            $(".img-hover").mouseover(function() {
                $(".index-function").find(".index-function-img").each(function() {
                    var img = $(this).attr("data-img");
                    $(this).children("img").attr("src", "img/" + img + ".png")
                })
                var src = $(this).attr("data-img");
                $(this).children("img").attr("src", "img/" + src + "-hover.png")
            }).mouseout(function() {
                $(".img-hover-wrap").find(".img-hover").each(function() {
                    var img = $(this).attr("data-img");
                    $(this).children("img").attr("src", "img/" + img + ".png")
                })
            })
        })

    </script>
</body>

</html>
