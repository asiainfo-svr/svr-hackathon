package com.asiainfo.svr.hackathon.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;

import com.asiainfo.svr.hackathon.model.AppProperties;

public class BaseController {
	@Autowired
	protected HttpServletRequest request;
	@Resource(name="appProperties")
	protected AppProperties appProperties;
	
	protected String lineSeparator = System.getProperty("line.separator", "\n");
	
	public Object getCurrentUser() {
//		return getDebugCurrentUser();
		return null;
	}
	
	public Object getDebugCurrentUser() {
		return null;
	}
	
	public String getServletContent() {
		String path = request.getContextPath();
		String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
		return basePath;
	}
	
	public String getFullUri(String path) {
		return getServletContent() + (path.charAt(0)=='/'?path.substring(1):path);
	}
}
