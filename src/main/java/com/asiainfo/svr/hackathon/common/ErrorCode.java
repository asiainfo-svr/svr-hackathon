package com.asiainfo.svr.hackathon.common;

public enum ErrorCode {

	SUCCESS("0000", "请求成功"),
	// 结果
	EMPTY("0001", "结果为空"), NO_RESULT("40001", "当前条件下无搜索结果，返回推荐结果"),

	;
	
	private String status;
	private String message;

	private ErrorCode(String status, String message) {
		this.status = status;
		this.message = message;
	}

	public String getStatus() {
		return status;
	}

	public String getMessage() {
		return message;
	}

	public String getMessage(String[] args) {
		int index = 0;
		String tempMsg = message;
		for(String arg : args) {
			tempMsg=tempMsg.replace("{"+index+++"}", arg);
		}
		return tempMsg;
	}

}
