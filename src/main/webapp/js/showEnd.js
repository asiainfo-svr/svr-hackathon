var obj = {
	"options": {
		"echarts4": {
			"tooltip": {
				"show": true
			},
			"title": {
				"text": "柱状图配置",
				"subtext": "作者:强者大帅哥",
				"textStyle": {
					"fontSize": 18,
					"color":"#fff"
				},
				"subtextStyle": {
					"fontSize": 14
				},
				"show": false
			},
			"legend": {
				"orient": "vertical",
				"x": "right",
				"y": "top",
				"data": ["2015年"],
				"textStyle": {
					"color": "auto",
					"fontSize": 13
				},
				"show": false
			},
			"grid": {
				"x": 40,
				"y": 5,
				"x2": 20,
				"y2": 25,
				"borderColor": "rgba(0,0,0,0)"
			},
			"calculable": false,

			"yAxis": [{
				"type": "value",
				"splitLine": false,
				"axisLabel":{
        	"textStyle": {
            "color": "#fff"
        	}
      	}
			}],
			"xAxis": [{
				"type": "category",
				"axisTick": {
					"show": false
				},
				"axisLabel":{
        	"textStyle": {
            "color": "#fff"
        	}
      	},
				"splitLine": false,
				"data": ["淘宝", "天猫", "京东", "亚马逊", "苏宁", "大众点评"]
			}],
			"series": [{
				"name": "2015年",
				"itemStyle":{
					"normal":{
							"color":'#2678CC',
					}
				},
				"type": "bar",
				"barWidth": 25,
				"data": [1500, 1350, 980, 550, 300, 200],
			}],
			"theme": "/theme/macarons"
		},
		"echarts2": {
			"theme": "/theme/macarons",
			"tooltip": {
				"trigger": "item",
				"formatter": "{a} <br/>{b} : {c} ({d}%)"
			},
			"color":['#2678CC','#FFC107'],
			"legend": {
				"show": false,
				"orient": "vertical",
				"x": 1,
				"y": 2,
				"data": ["数据一", "数据三"],
				"textStyle": {
					"fontSize": 13,
					"color":"#fff"
				}
			},
			"calculable": false,
			"series": [{
				"name": "访问来源",
				"type": "pie",
				"center": ["50%", "50%"],
				"radius": ["30%", "45%"],
				"itemStyle": {
					"normal": {
						"label": {
							"formatter": "{b} : {c} ( {d}% )",
							"textStyle": {
								"fontSize": 13,
								"color":"#fff"
							}
						},
						"labelLine": {
							"show": true
						}
					}
				},
				"data": [{
					"value": 65,
					"name": "app"
				}, {
					"value": 35,
					"name": "实体店"
				}]
			}],
			"title": {
				"show": false,
				"textStyle": {
					"fontSize": 18,
					"color":"#fff"
				},
				"subtextStyle": {
					"fontSize": 14
				}
			}
		},
		"echarts5": {
			"tooltip": {
				"show": true
			},
			"title": {
				"text": "柱状图配置",
				"subtext": "作者:强者大帅哥",
				"textStyle": {
					"fontSize": 18
				},
				"subtextStyle": {
					"fontSize": 14
				},
				"show": false
			},
			"legend": {
				"orient": "vertical",
				"x": "right",
				"y": "top",
				"data": ["2015年"],
				"textStyle": {
					"color": "#fff",
					"fontSize": 13
				},
				"show": false
			},
			"grid": {
				"x": 40,
				"y": 5,
				"x2": 20,
				"y2": 25,
				"borderColor": "rgba(0,0,0,0)"
			},
			"calculable": false,
			"yAxis": [{
				"type": "value",
				"splitLine": false,
				"textStyle":{
					"color":"#fff"
				},
				"axisLabel":{
        	"textStyle": {
            "color": "#fff",
        	}
      	}
			}],
			"axisLabel" : {
				 	 "textStyle": {
				 	 	"color":"#fff"
				 	 }
				 },
			"xAxis": [{
				"type": "category",
				"axisTick": {
					"show": false
				},
				"axisLabel":{
        	"textStyle": {
            "color": "#fff",
        	}
      	},
				"splitLine": false,
				"data": ["实体店一", "实体店二", "实体店三", "实体店四", "实体店五", "实体店六", "实体店七", "实体店八", "实体店九", "实体店十"]
			}],
			"series": [{
				"name": "2015年",
				"type": "bar",
				"itemStyle":{
					"normal":{
							"color":'#FFC107',
					}
				},
				"barWidth": 25,
				"data": [400, 600, 700, 1000, 1200, 1400, 1600, 1700, 1800, 1200]
			}],
			"theme": "/theme/macarons"
		}
	}
};
var page='<div class="box-boss selbox theme-star" style="padding-top: 126px; height: 700px;"><div class="box-banner"><div class="par-banner clearfix"><div class="banner-box-left clearfix"><div class="par-div"><img class="par-img" src="img/logo.png"></div></div><div class="banner-box-right clearfix"><div class="par-div par-clock"><div class="par-item detailTime">22:46</div><div class="par-item detailDay">2016年9月9日</div><div class="par-bg"><div class="par-bg-left"></div><div class="par-bg-center"></div><div class="par-bg-right"></div></div></div><div class="par-div par-img-text"><div class="par-div-img"><img class="par-img" src="img/user.png"></div><div class="par-div-text"><span>Johnn Smith</span><i class="iconfont icon-xiasanjiao-copy1"></i></div></div></div></div></div><div class="box-nav" style="top: 84px;"><div class="par-nav"><div class="nav-box"><div class="nav-home"><div class="gradient-btn grad-nav"><a type="button" class="btn btn-primary btn-lg" href="home"><i class="iconfont icon-shouye"></i></a><div class="bg"><div class="bg-left"></div><div class="bg-center"></div><div class="bg-right"></div></div></div></div><ul class="nav-ul clearfix"><li><div class="gradient-btn grad-nav grad-nav-cli"><a type="button" class="btn btn-primary btn-lg" href="view/hotmap">汽车消费潜力图</a><div class="bg"><div class="bg-left"></div><div class="bg-center"></div><div class="bg-right"></div></div></div></li><li><div class="gradient-btn grad-nav"><a type="button" class="btn btn-primary btn-lg" href="view/hotmap1">汽车销量对比图</a><div class="bg"><div class="bg-left"></div><div class="bg-center"></div><div class="bg-right"></div></div></div></li><li><div class="gradient-btn grad-nav"><a type="button" class="btn btn-primary btn-lg" href="view/person">潜在消费人群画像</a><div class="bg"><div class="bg-left"></div><div class="bg-center"></div><div class="bg-right"></div></div></div></li><li><div class="gradient-btn grad-nav grad-nav-cli"><a type="button" class="btn btn-primary btn-lg" href="view/showEnd">奢侈品购买渠道分析</a><div class="bg"><div class="bg-left"></div><div class="bg-center"></div><div class="bg-right"></div></div></div></li><li><div class="gradient-btn grad-nav"><a type="button" class="btn btn-primary btn-lg" href="view/luxuryGoods">奢侈品销售偏好分析</a><div class="bg"><div class="bg-left"></div><div class="bg-center"></div><div class="bg-right"></div></div></div></li></ul><div class="nav-btn"></div></div><div class="par-b-shade"></div></div></div><div class="col-w-24 col-h-24 po "><div class="ibox-all col-h-24" style="padding: 0px;"><div class="ibox po" style="border: none;"><div class="ibox-content selbox0"><div class="box-boss"><div class="col-w-24 col-h-3 po "><div class="ibox-all col-h-24" style="padding: 0px;"><div class="ibox po" style="border: none;"><div class="ibox-content selbox01" id="echarts1"></div></div></div></div><div class="col-w-12 col-h-21 po "><div class="ibox-all col-h-24" style="padding: 0px;"><div class="ibox" style="border: none;"><div class="ibox-content selbox02" id="echarts2" _echarts_instance_="1473430532336" style="-webkit-tap-highlight-color: transparent; -webkit-user-select: none; cursor: default; background-color: rgba(0, 0, 0, 0);"><div style="position: relative; overflow: hidden; width: 653px; height: 475px;"><div data-zr-dom-id="bg" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 653px; height: 475px; -webkit-user-select: none;"></div><canvas width="653" height="475" data-zr-dom-id="0" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 653px; height: 475px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas><canvas width="653" height="475" data-zr-dom-id="1" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 653px; height: 475px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas><canvas width="653" height="475" data-zr-dom-id="_zrender_hover_" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 653px; height: 475px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div></div></div></div></div><div class="col-w-12 col-h-21 po "><div class="ibox-all col-h-24" style="padding: 0px;"><div class="ibox" style="border: none;"><div class="ibox-content selbox03"><div class="box-boss"><div class="col-w-24 col-h-12 po "><div class="ibox-all col-h-24"><div class="ibox sty-border-g po" style="padding-top: 40px; border: none;"><div class="title title-level2"><img class="title-img" src="img/i-yellow.png"><h3>APP购物分析柱状图</h3></div><div class="ibox-content selbox034" id="echarts4" _echarts_instance_="1473430532335" style="-webkit-tap-highlight-color: transparent; -webkit-user-select: none; cursor: default; background-color: rgba(0, 0, 0, 0);"><div style="position: relative; overflow: hidden; width: 619px; height: 166px;"><div data-zr-dom-id="bg" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none;"></div><canvas width="619" height="166" data-zr-dom-id="0" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas><canvas width="619" height="166" data-zr-dom-id="1" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas><canvas width="619" height="166" data-zr-dom-id="_zrender_hover_" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div></div><img class="border-img" src="data:image/png;base64,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"></div></div></div><div class="col-w-24 col-h-12 po "><div class="ibox-all col-h-24"><div class="ibox sty-border-g po addActive" style="padding-top: 40px; border: none;"><div class="title title-level2"><img class="title-img" src="img/i-yellow.png"><h3>实体店购物分析柱状图</h3></div><div class="ibox-content selbox035" id="echarts5" _echarts_instance_="1473430532337" style="-webkit-tap-highlight-color: transparent; -webkit-user-select: none; cursor: default; background-color: rgba(0, 0, 0, 0);"><div style="position: relative; overflow: hidden; width: 619px; height: 166px;"><div data-zr-dom-id="bg" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none;"></div><canvas width="619" height="166" data-zr-dom-id="0" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas><canvas width="619" height="166" data-zr-dom-id="1" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas><canvas width="619" height="166" data-zr-dom-id="_zrender_hover_" class="zr-element" style="position: absolute; left: 0px; top: 0px; width: 619px; height: 166px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div></div><img class="border-img" src="data:image/png;base64,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"></div></div></div></div></div></div></div></div></div></div></div></div></div></div>';
$(function(){
	$("#J_Demo").html(page);
	showBody(obj);
	oAddHtml.fGetBannerTime();
	oAddHtml.fMyEventFunc();
})
function showBody(obj){
  var options=obj.options;
  for(var k in options){
    new EchartsConfig($('html,body'),k,options[k]);
  }
}