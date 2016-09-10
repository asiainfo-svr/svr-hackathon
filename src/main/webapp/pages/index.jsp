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
    <link rel="stylesheet" href="css/mystyle.css">
    <script src="js/jquery-1.10.2.min.js"></script>
</head>

<body>
    <div class="wrap bg-index">
        <div class="main">
            <div class="nav">
                <div class="nav-logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="nav-link">
                    <a href="view/hotmap">车辆销售热力图</a>
                    <a href="view/hotmap1">车辆销售额对比图</a>
                    <a href="view/person">热区人群画像</a>
                    <a href="view/showEnd">热区消费偏好</a>
                    <a href="view/luxuryGoods">奢侈品销售分析</a>
                </div>
            </div>
            <div class="box padt160">
                <div class="index-banner">
                    <div>
                        <h1 class="h1-header">这里是标题</h1>
                        <p class="plain-text padr300"> qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        </p>
                        <div class="btn-wrap">
                            <button class="btn btn-blue">快速加入</button>
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
                        <h6 class="h6-header">功能文字</h6>
                        <p class="plain-text">
                            hfhfhfhfhffhfhfhfhfhfhfhf hfhfhfhfhffhfhfhfhfhfhfhf hfhfhfhfhffhfhfhfhfhfhfhf hfhfhfhfhffhfhfhfhfhfhfhf hfhfhfhfhffhfhfhfhfhfhfhf

                        </p>
                    </li>
                    <li>
                        <div class="img-hover" data-img="index-function-2">
                            <img src="img/index-function-2.png" alt="">
                        </div>
                        <h6 class="h6-header">功能文字</h6>
                        <p class="plain-text">
                            hfhfhfhfhffhfhfhfhfhfhfhf
                        </p>
                    </li>
                    <li>
                        <div class="img-hover" data-img="index-function-3">
                            <img src="img/index-function-3.png" alt="">
                        </div>
                        <h6 class="h6-header">功能文字</h6>
                        <p class="plain-text">
                            hfhfhfhfhffhfhfhfhfhfhfhf
                        </p>
                    </li>
                </ul>
            </div>
            <div class="box padtb0">
                <div class="index-thermal">
                    <div>
                        <h2 class="h2-header">这里是文字介绍</h2>
                        <div class="text-group">
                            <p>ssssssssssssssssbbbbbsssss</p>
                            <p>ssssfsssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                            <p>sssssssssssssssssssss</p>
                            <p>sssssssssssssssssssss</p>
                            <p>fffffffffhhhhhhhhhhhhh</p>
                        </div>
                        <div class="btn-wrap">
                            <button class="btn btn-blue">快速加入</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="index-car">
                    <div class="img-hover-wrap">
                        <div class="index-intro index-intro-posi1">
                            <div class="img-hover" data-img="index-intro-1">
                                <img src="img/index-intro-1.png" alt="">
                            </div>
                            <h4 class="h4-header">文字介绍</h4>
                        </div>
                        <div class="index-intro index-intro-posi2">
                            <div class="img-hover" data-img="index-intro-2">
                                <img src="img/index-intro-2.png" alt="">
                            </div>
                            <h4 class="h4-header">文字介绍</h4>
                        </div>
                        <div class="index-intro index-intro-posi3">
                            <div class="img-hover" data-img="index-intro-3">
                                <img src="img/index-intro-3.png" alt="">
                            </div>
                            <h4 class="h4-header">文字介绍</h4>
                        </div>
                        <div class="index-intro index-intro-posi4">
                            <div class="img-hover" data-img="index-intro-4">
                                <img src="img/index-intro-4.png" alt="">
                            </div>
                            <h4 class="h4-header">文字介绍</h4>
                        </div>
                        <div class="index-intro index-intro-posi5">
                            <div class="img-hover" data-img="index-intro-5">
                                <img src="img/index-intro-5.png" alt="">
                            </div>
                            <h4 class="h4-header">文字介绍</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <p>版权所有：上海亚信科技 全国统一热线：400-161-1808 电话：0755-61881808 传真：0755-61881868</p>
                    <p>公司地址：上海市徐汇区虹漕路416号56号楼2楼 邮箱：service@qm-cn.com 备案：呜呜呜呜呜</p>
                </div>
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
