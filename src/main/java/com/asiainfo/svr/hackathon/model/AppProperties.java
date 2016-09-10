package com.asiainfo.svr.hackathon.model;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Value;

public class AppProperties implements Serializable{
	private static final long serialVersionUID = 1L;

	@Value("${app.domain}")
	private String domain;

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}
	
}
