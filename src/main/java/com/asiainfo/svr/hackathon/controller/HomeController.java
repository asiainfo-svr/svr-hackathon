package com.asiainfo.svr.hackathon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HomeController extends BaseController {

	@RequestMapping("home")
	public ModelAndView homepage() {
		return new ModelAndView("index");
	}
}
