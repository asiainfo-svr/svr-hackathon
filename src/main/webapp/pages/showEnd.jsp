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
  <title>热区消费偏好</title>
  <link rel="stylesheet" href="css/daping.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="fonts/iconfont.css">
  <link rel="stylesheet" href="css/EchartsConfig.css">
  <link rel="stylesheet" href="css/settingModule.css">
  <link rel="stylesheet" href="css/modules.css">
  <script src="js/jquery-1.10.2.min.js"></script>
  <script src="js/echarts.js"></script>
  <script src="js/EchartsConfig.js"></script>
  <script src="js/l-banner.js"></script>
</head>
<body>
  <div class="wrap">
    <div class="contenter" id="J_Demo">
    </div>
  </div>
  <script src="js/showEnd.js"></script>
</html>