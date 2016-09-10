package com.asiainfo.svr.hackathon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/view")
public class ViewController extends BaseController {

	@RequestMapping("/{viewPath}")
	public ModelAndView getView(@PathVariable("viewPath")String viewPath) {
		return new ModelAndView(viewPath);
	}
}
