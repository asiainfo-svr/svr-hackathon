package com.asiainfo.svr.hackathon.model;

import java.util.List;

public class Paginator<T> {

	private int totalPage;
	private int totalCnt;
	private int page;
	private int pageSize;
	private List<T> list;
	
	public Paginator(List<T> list, int totalCnt, int page, int pageSize) {
		super();
		this.totalCnt = totalCnt;
		this.page = page;
		this.pageSize = pageSize;
		this.list = list;
	}
	
	public int getTotalPage() {
		totalPage = totalCnt/pageSize + (totalCnt%pageSize==0?0:1);
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getTotalCnt() {
		return totalCnt;
	}
	public void setTotalCnt(int totalCnt) {
		this.totalCnt = totalCnt;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public List<T> getList() {
		return list;
	}
	public void setList(List<T> list) {
		this.list = list;
	}
	
}
