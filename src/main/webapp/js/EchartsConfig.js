var	myChart, 		//echarts绘图对象
	echartsCode, 	//echarts绘图代码
	chartOption;	//echarts绘图Json数据对象
var optionObj = {};	//实时保存echarts数据对象

;(function($,doc,win){
/**
 * [EchartsConfig 图例]
 * @param {[type]} obj           [调用EchartsConfig组件对象]
 * @param {[type]} echartObj     [调用echarts组件对象]
 * @param {[type]} echartsOption [echarts组件导入时的数据对象]
 * @param {[type]} legendData    [legend数据]
 * @param {[type]} seriesData    [series数据]
 * @param {[type]} polarData     [polar数据]
 */
var EchartsConfig = function(obj,echartObj,echartsOption,legendData,seriesData,polarData){
	var self = this;
	//EchartsConfig公共属性
	this.obj 				= obj;  							//调用EchartsConfig组件对象
	this.echartObj 			= echartObj; 						//调用echarts组件对象
	this.echartsOption 		= echartsOption;					//echarts组件导入时的数据对象
	this.legendData			= legendData;						//legend数据
	this.seriesData 		= seriesData;						//series数据
	this.polarData			= polarData;						//polar数据
	
	this.previewBtn			= obj.find('#previewBtn');			//预览按钮
	this.echartsCodeDiv 	= obj.find('#echartsCode'); 		//预览文本框
	this.finished 			= obj.find('#finished'); 			//配置完成按钮
	this.onOff		 		= obj.find('.btn-gray'); 			//开关动态按钮
	this.calculable_switch 	= obj.find('#calculableSwitch'); 	//拖拽重计算开关按钮
	this.legend_switch 		= obj.find('#legendSwitch'); 		//图示开关按钮

	this.title_switch 		= obj.find('#titleSwitch'); 		//标题开关按钮
	this.title_text_switch	= obj.find('.titletext');
	this.title_text			= obj.find('#titleText');			//主标题更改对象
	this.title_subtext		= obj.find('#titleSubtext');		//副标题更改对象
	this.title_menu			= obj.find('#titleDropMenu');		//标题选项菜单
	// this.title_pos_switch	= obj.find('#titlePosSwitch');		//标题位置自定义开关按钮
	this.title_pos_menu		= obj.find('#titlePosMenu');		//标题自定义位置菜单
	// this.title_size_switch	= obj.find('#titleSizeSwitch');
	// this.title_size_menu	= obj.find('#titleSizeMenu');
	
	this.legend_menu		= obj.find('#legendDropMenu');		//图例选项菜单
	// this.legend_pos_switch	= obj.find('#legendPosSwitch');		//图例位置自定义开关按钮
	this.legend_pos_menu	= obj.find('#legendPosMenu');		//图例自定义位置菜单
	// this.legend_size_switch	= obj.find('#legendSizeSwitch');
	this.legend_size_menu	= obj.find('#legendSizeMenu');

	this.tooltip_switch		= obj.find('#tooltipSwitch');		//提示框开关按钮

	this.pos_xAis			= obj.find('.posxAis');				//位置x轴
	this.pos_yAis			= obj.find('.posyAis');				//位置y轴
	this.pos_sub			= obj.find('.PosSub');				//位置sub对象
	this.pos_add			= obj.find('.PosAdd');				//位置add对象
	this.font_size			= obj.find('.fontSize');

	this.theme 				= obj.find('#theme > li');			//主题选择列表

	//EchartsConfig私有属性
	//pie
	this.pie_pos_switch		= obj.find('#piePosSwitch');		//饼图自定义位置开关按钮
	this.pie_pos_menu		= obj.find('#piePosMenu');			//饼图自定义位置菜单
	this.pie_size_switch	= obj.find('#pieSizeSwitch');		//饼图自定义大小开关按钮
	this.pie_size_menu		= obj.find('#pieSizeMenu');			//饼图自定义大小菜单
	this.pie_label_switch	= obj.find('#pieLabelSwitch');
	this.pie_label_menu		= obj.find('#pieLableMenu');
	//grid
	this.grid_switch		= obj.find('#gridSwitch');			//图格配置开关按钮
	this.grid_menu			= obj.find('#gridMenu');			//图格配置菜单
	this.line_type_menu		= obj.find('#lineTypeMenu');		//折线图类型菜单
	//bar
	this.bar_width_switch 	= obj.find('#barWidthSwitch');
	this.bar_width_menu		= obj.find('#barWidthMenu');
	//初始化图例绘图
	this.echartsOption && (
		
		chartOption = this.echartsOption,

		this.echarts(chartOption),

		this.initSwitch(chartOption),

		this.configSwitch(chartOption)

	) || this.initEcharts();
};

EchartsConfig.prototype = {
	/**
	 * [initEcharts 将文本框里的内容转换为echarts中的option Json对象,用于图例绘图]
	 * @return {[canvas]} [接收转换后的option对象,进行图例绘图]
	 */
	initEcharts : function(){
		var self = this ;

		self.previewBtn.click(function(){
			echartsCode = self.echartsCodeDiv.val();
			chartOption = eval('('+echartsCode+')');
			//初始化图例绘图
			self.echarts(chartOption);

			self.initSwitch(chartOption);

			//配置化
			self.configSwitch(chartOption);
		});
	},
	/**
	 * [initSwitch 配置开关位置初始化]
	 * @param  {[Json对象]} option [图例绘图Json对象]
	 * @return {[active]}        [接收转换后的option对象,进行开关位置初始化]
	 */
	initSwitch : function(option){
		var self = this;
		var series = option.series[0];
		//初始化标题开关位置
		if(option.title == undefined){
			option.title = {
				show:false,
				textStyle:{},
				subtextStyle:{}
			};
			self.title_switch.removeClass('active');
			self.title_switch.parent().parent().hide();
			self.title_menu.hide();
		}else{
			self.title_switch.parent().parent().show();
			(option.title.show == undefined || option.title.show == true) && (
				self.title_switch.addClass('active'),
				self.title_menu.show()
			) || (
				self.title_switch.removeClass('active'),
				self.title_menu.hide()
			);
			//初始化自定义title x轴,y轴输入框数值
			(option.title.x == undefined || typeof (option.title.x) != 'number') 
				&& self.pos_xAis.eq(0).val(0)
				|| self.pos_xAis.eq(0).val(option.title.x);
			(option.title.y == undefined || typeof (option.title.y) != 'number') 
				&& self.pos_yAis.eq(0).val(0)
				|| self.pos_yAis.eq(0).val((option.title.y));
			//初始化标题字体大小
			if(option.title.textStyle == undefined){
				option.title.textStyle = {fontSize:18}
			}else{
				if(option.title.textStyle.fontSize == undefined){
					option.title.textStyle.fontSize = 18;
				}
			}
			if(option.title.subtextStyle == undefined){
				option.title.subtextStyle = {fontSize:14}
			}else{
				if(option.title.subtextStyle.fontSize == undefined){
					option.title.subtextStyle.fontSize = 14;
				}
			}
			self.font_size.eq(0).val(option.title.textStyle.fontSize);
			self.font_size.eq(1).val(option.title.subtextStyle.fontSize);
			//初始化标题文本框
			if(option.title.text == undefined || option.title.text == ''){
				self.title_text_switch.eq(0).parent().hide();
				self.title_text_switch.eq(0).parent().next().hide();
			}
			if(option.title.subtext == undefined || option.title.subtext == ''){
				self.title_text_switch.eq(1).parent().hide();
				self.title_text_switch.eq(1).parent().next().hide();
			}
			self.title_text_switch.addClass('active');
			// self.title_text.val(option.title.text);
			// self.title_subtext.val(option.title.subtext);
		}
		//初始化重计算开关位置
		(option.calculable == undefined || option.calculable == false)
			&& self.calculable_switch.removeClass('active')
			|| self.calculable_switch.addClass('active');
		//初始化图例开关位置
		if(option.legend == undefined){
			self.legend_switch.parent().addClass('none');
			self.legend_switch.parent().prev().hide();
			self.legend_menu.hide();
		}else{
			self.legend_switch.parent().show();
			self.legend_switch.parent().prev().show();
			(option.legend.show == undefined || option.legend.show == true) && (
				self.legend_switch.addClass('active'),
				self.legend_menu.show()
			) || (
				self.legend_switch.removeClass('active'),
				self.legend_menu.hide()
			);
			//初始化自定义legend x轴,y轴输入框数值
			(option.legend.x == undefined || typeof (option.legend.x) != 'number') 
				&& self.pos_xAis.eq(1).val(0)
				|| self.pos_xAis.eq(1).val(option.legend.x);
			(option.legend.y == undefined || typeof (option.legend.y) != 'number') 
				&& self.pos_yAis.eq(1).val(0)
				|| self.pos_yAis.eq(1).val((option.legend.y));
			//初始化图例字体大小
			if(option.legend.textStyle == undefined){
				option.legend.textStyle = {color:'auto',fontSize:13};
			}else{
				if(option.legend.textStyle.fontSize == undefined){
					option.legend.textStyle.fontSize = 13;
				}
			}
			self.font_size.eq(2).val(option.legend.textStyle.fontSize);
		}
		
		//初始化提示框开关位置
		if(option.tooltip == undefined){
			self.tooltip_switch.parent().hide();
			self.tooltip_switch.parent().prev().hide();
		}else{
			(option.tooltip.show == undefined || option.tooltip.show == true) && (
				self.tooltip_switch.addClass('active')
			) || (
				self.tooltip_switch.removeClass('active')
			);
		}
		
		//初始化主题显示
		(option.theme == undefined || !option.theme) 
			&& self.theme.parent().siblings('.C_value').val('default')
			|| self.theme.parent().siblings('.C_value').val((option.theme).split('theme/')[1]);

		//饼图私有默认配置
		if(series.type == 'pie' || series.type == 'gauge'){
			if(series.center == undefined){
				series.center = ['50%','50%'];
			}
			if(series.radius == undefined){
				series.radius = ['55%','70%'];
			}
			if(series.type == 'pie'){
				self.pie_label_switch.parent().show();
				self.pie_label_menu.show();
				self.pos_xAis.eq(3).parent().show();
			}
			if(series.type == 'gauge'){
				self.pie_label_switch.parent().hide();
				self.pie_label_menu.hide();
				self.pos_xAis.eq(3).parent().hide();
			}
			self.pie_pos_switch.parent().show();
			//初始化饼图位置自定义输入框数值
			self.pos_xAis.eq(2).val(series.center[0].split('%')[0]);
			self.pos_yAis.eq(2).val(series.center[1].split('%')[0]);
			self.pie_size_switch.parent().show();
			//初始化饼图大小自定义输入框数值
			self.pos_xAis.eq(3).val(series.radius[0].split('%')[0]);
			self.pos_yAis.eq(3).val(series.radius[1].split('%')[0]);
			if(series.itemStyle == undefined){
				series.itemStyle = {
					normal : {
		                label : {
		                    show : false,
		                    textStyle:{
		                    	fontSize:13
		                    }
		                },
		                labelLine : {
		                    show : false
		                }
	            	}
	        	}
			}else{
				if(series.itemStyle.normal == undefined){
					series.itemStyle.normal = { 
						label : {
		                    textStyle:{
		                    	fontSize:13
		                    }
		                }
		            };
					self.pie_label_switch.addClass('active');
					self.pie_label_menu.show();
				}else{
					if(series.itemStyle.normal.label == undefined){
						series.itemStyle.normal.label	= {
							textStyle:{
		                    	fontSize:13
		                    }
						};
						series.itemStyle.normal.labelLine	= {};
						self.pie_label_switch.addClass('active');
						self.pie_label_menu.show();		
					}else{
						if(series.itemStyle.normal.label.show == undefined || series.itemStyle.normal.label.show == true){
							self.pie_label_switch.addClass('active');
							self.pie_label_menu.show();
							series.itemStyle.normal.labelLine = {show:true};
						}else{
							self.pie_label_switch.removeClass('active');
							self.pie_label_menu.hide();
							series.itemStyle.normal.labelLine = {show:false};
						}
						if(series.itemStyle.normal.label.textStyle == undefined){
							series.itemStyle.normal.label.textStyle = {fontSize:13};
						}else{
							if(series.itemStyle.normal.label.textStyle.fontSize == undefined){
								series.itemStyle.normal.label.textStyle.fontSize = 13
							}
						}
					}
				}
			}
			self.pos_xAis.eq(4).val(20);
			self.font_size.eq(3).val(series.itemStyle.normal.label.textStyle.fontSize);
		}else{
			self.pie_pos_switch.parent().hide();
			self.pie_size_switch.parent().hide();
		}
		//柱状图柱宽配置
		(series.type == 'bar') && (
			self.bar_width_switch.parent().show(),
			self.bar_width_switch.parent().prev().show(),
			(series.barWidth == undefined) && self.pos_xAis.eq(7).val(0) || self.pos_xAis.eq(7).val(option.series[0].barWidth)
		) || (
			self.bar_width_switch.parent().hide(),
			self.bar_width_switch.parent().prev().hide()
		);

		//初始化自定义开关按钮
		//标题自定义位置开关
		// self.title_pos_switch.removeClass('active');
		// self.title_pos_switch.parent().hide();
		self.title_pos_menu.hide();
		// self.title_size_switch.removeClass('active');
		// self.title_size_menu.hide();
		//图示位置开关
		// self.legend_pos_switch.removeClass('active');
		self.legend_pos_menu.hide();
		// self.legend_size_switch.removeClass('active');
		// self.legend_size_menu.hide();
		//饼图位置开关
		self.pie_pos_switch.removeClass('active');
		self.pie_pos_menu.hide();
		//饼图大小开关
		self.pie_size_switch.removeClass('active');
		self.pie_size_menu.hide();
		//直角系图格开关
		self.grid_switch.removeClass('active');
		self.grid_menu.hide();
		//柱状图柱宽配置开关
		self.bar_width_switch.removeClass('active');
		self.bar_width_menu.hide();

		self.Switch();
	},
	/**
	 * [initData 数据抽离，可允许实例化EchartsConfig对象时单独操作数据]
	 * @param  {[type]} option [图例绘图Json对象]
	 * @return {[type]}        [description]
	 */
	initData : function(option){
		var self = this;
		var type = option.series[0].type;
		if(self.legendData && self.seriesData && !option.series[0].data){
			option.legend.data = self.legendData;
			option.series[0].data = [];
			for(var i=0;i<self.seriesData.length;i++){
				option.series[0].data.push({
					value:self.seriesData[i],
					name:self.legendData[i]
				});
			}
			if (type == 'radar') {
				option.polar[0].indicator = self.polarData;
			}
		}else{
			// if(type == 'pie'){
			// 	if(option.legend){
			// 		option.legend.data = ['数据一','数据二','数据三'];
			// 		option.series[0].data = [
			// 			{
			// 				value: parseInt(Math.random()*9)+1,
			// 				name : "数据一"
			// 			},
			// 			{
			// 				value: parseInt(Math.random()*9)+1,
			// 				name : "数据二"
			// 			},
			// 			{
			// 				value: parseInt(Math.random()*9)+1,
			// 				name : "数据三"
			// 			}
			// 		]
			// 	}
				
			// }
		}
		//直角坐标系内绘图网格
		if(type == 'bar' || type == 'line' || type == 'k' || type == 'scatter' ){
			self.grid_switch.parent().show();
			self.grid_switch.parent().prev().show();
			self.pie_pos_switch.parent().parent().hide();
			self.pie_label_switch.parent().parent().hide();
			(type == 'line') ? (
				self.line_type_menu.show(),
				self.line_type_menu.prev().show()
			) : (
				self.line_type_menu.hide(),
				self.line_type_menu.prev().hide()
			);
			if(option.grid == undefined){
				option.grid = {
					x:20,
					y:20,
					x2:20,
					y2:20,
					borderColor:'rgba(0,0,0,0)'
				};
				self.pos_xAis.eq(4).val(20);
				self.pos_yAis.eq(4).val(20);
				self.pos_xAis.eq(5).val(20);
				self.pos_yAis.eq(5).val(20);
			}else{
				option.grid.borderColor = 'rgba(0,0,0,0)';
				(option.grid.x == undefined || typeof (option.grid.x) != 'number') ? self.pos_xAis.eq(5).val(20) : self.pos_xAis.eq(5).val(option.grid.x);
				(option.grid.y == undefined || typeof (option.grid.y) != 'number') ? self.pos_yAis.eq(4).val(20) : self.pos_yAis.eq(4).val(option.grid.y);
				(option.grid.x2 == undefined || typeof (option.grid.x2) != 'number') ? self.pos_xAis.eq(6).val(20) : self.pos_xAis.eq(6).val(option.grid.x2);
				(option.grid.y2 == undefined || typeof (option.grid.y2) != 'number') ? self.pos_yAis.eq(5).val(20) : self.pos_yAis.eq(5).val(option.grid.y2);
			}
		}else if(type == 'gauge' || type == 'radar'){
			self.pie_label_switch.parent().parent().hide();
		} else{
			self.grid_switch.parent().hide();
			self.grid_switch.parent().prev().hide();
			self.line_type_menu.hide();
			self.line_type_menu.prev().hide();
			self.pie_pos_switch.parent().parent().show();
			self.pie_label_switch.parent().parent().show();
		};
	},
	/**
	 * [echarts 绘图方法对象]
	 * @param  {[Json对象]} option [图例绘图Json对象]
	 * @return {[type]}        [description]
	 */
	echarts : function(option){
		var self = this;
		(!option.theme || option.theme == undefined ) && (option.theme = '')
		require.config({
			paths: {
				echarts: './js'
			}
		});
		require([
			'echarts',
			'echarts'+option.theme,
			'echarts/chart/'+option.series[0].type // 按需加载所需图表
		],function(ec,theme) {
			myChart = ec.init(document.getElementById(self.echartObj),theme);
			
			// 为echarts对象加载数据,进行初始化绘图操作
			self.initData(option);
			myChart.setOption(option);

			//echarts实时更新数据
			self.pos_xAis && self.customPos(self.pos_xAis,myChart,option);
			self.pos_yAis && self.customPos(self.pos_yAis,myChart,option);
			self.font_size && self.customPos(self.font_size,myChart,option);
			(self.pos_sub && self.pos_add) && self.PosAddSub(myChart,option);
			self.downMenu('.C_value','.C_menu',myChart,option);
			// self._compare(option)

		});
	},

	/**
	 * [handler description]
	 * @return {[type]} [description]
	 */
	handler : function(){
		$(this).hasClass("active") ? (
			$(this).removeClass("active"),
			$(this).children().animate({ 
				left:0 
			},200)
		)
		: (
			$(this).addClass("active"),
			$(this).children().animate({ 
				left:"50%" 
			},200)
		);
	},

	/**
	 * [switch description]
	 * @return {[type]} [description]
	 */
	Switch : function(){
		var self = this;
		self.onOff.each(function(){
			$(this).hasClass("active") ? 
			$(this).children().css({ left:"50%" }) : 
			$(this).children().css({ left:0 });
		});
	},
	/**
	 * [dataConfig 当前对象的option缓存数据]
	 * @param  {[type]} data [option对象,缓存数据]
	 * @return {[type]}      [完成对应组件的属性绑定]
	 */
	dataConfig : function(BufferData){
		var objKey = $('.ibox.addActive').find('.ibox-content').attr('id');
		optionObj[objKey] = BufferData;
	},
	/**
	 * [titleSwitch 标题开关]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]} [description]
	 */
	titleSwitch : function(option){
		var self = this;
		self.title_switch.unbind('click');
		self.title_switch.bind('click',self.handler);
		self.title_switch.click(function(){
			$(this).hasClass("active") ? (
				option.title.show = true,
				self.title_menu.slideDown()
			)
			: (
				option.title.show = false,
				self.title_menu.slideUp()
			);
			self.echarts(option);
			self.dataConfig(option);
		});
		var text = option.title.text,
			subtext = option.title.subtext;
		self.title_text_switch.unbind('click');
		self.title_text_switch.bind('click',self.handler);
		self.title_text_switch.each(function(index){
			$(this).click(function(){
				if(index == 0){				
					$(this).hasClass("active") ? (
						option.title.text = text,
						$(this).parent().next().slideDown()
					)
					: (
						option.title.text = '',
						$(this).parent().next().slideUp()
					);
					self.echarts(option);
					self.dataConfig(option);
				}
				if(index == 1){
					$(this).hasClass("active") ? (
						option.title.subtext = subtext,
						$(this).parent().next().slideDown()
					)
					: (
						option.title.subtext = '',
						$(this).parent().next().slideUp()
					);
					self.echarts(option);
					self.dataConfig(option);
				}
			})
		});
		// self.title_text_switch.click(function(){
		// 	var i = $(this).index();console.log(i)
		// 	if(i == 1){				
		// 		$(this).hasClass("active") ? (
		// 			option.title.text = ''
		// 		)
		// 		: (
		// 			option.title.text = text
		// 		);

		// 	self.echarts(option);
		// 	self.dataConfig(option);
		// 	}
		// });
	},
	/**
	 * [calculableSwitch 拖拽重计算开关]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]} [description]
	 */
	calculableSwitch : function(option){
		var self = this;
		self.calculable_switch.unbind('click');
		self.calculable_switch.bind('click',self.handler);
		self.calculable_switch.click(function(){
			$(this).hasClass("active") ? (
				option.calculable = true
			)
			: (
				option.calculable = false
			);
			self.echarts(option);
			self.dataConfig(option);
		})
	},
	/**
	 * [legendSwitch 图示开关]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]}        [description]
	 */
	legendSwitch : function(option){
		var self = this;
		self.legend_switch.unbind('click');
		self.legend_switch.bind('click',self.handler);
		self.legend_switch.click(function(){
			$(this).hasClass("active") ? (
				option.legend.show = true,
				self.legend_menu.slideDown()
			)
			: (
				option.legend.show = false,
				self.legend_menu.slideUp()
			);
			self.echarts(option)
			self.dataConfig(option);
		})
	},
	/**
	 * [tooltipSwitch 提示框开关]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]}        [description]
	 */
	tooltipSwitch : function(option){
		var self = this;
		self.tooltip_switch.unbind('click');
		self.tooltip_switch.bind('click',self.handler);
		self.tooltip_switch.click(function(){
			$(this).hasClass("active") ? (
				option.tooltip.show = true
			)
			: (
				option.tooltip.show = false
			);
			self.echarts(option)
			self.dataConfig(option);
		});
	},
	/**
	 * [titleChange 主标题改变]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]}        [description]
	 */
	titleChange : function(option){
		var self = this;
		self.title_text.unbind('change');
		self.title_text.change(function(){
			option.title.text = $(this).val();
			self.echarts(option);
			self.dataConfig(option);
		});
	},
	/**
	 * [subTitleChange 副标题改变]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]}        [description]
	 */
	subTitleChange : function(option){
		var self = this;
		self.title_subtext.unbind('change');
		self.title_subtext.change(function(){
			option.title.subtext = $(this).val();
			self.echarts(option);
			self.dataConfig(option);
		});
	},
	/**
	 * [downMenu 标题位置下拉菜单]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]}        [description]
	 */
	downMenu : function(clickClass,dropMenu,myChart,option){
		var self = this;
		$(clickClass).unbind('click');
		$(clickClass).click(function(event){
			event = event || window.event;
			event.stopPropagation();
			$(this).siblings(dropMenu).toggle();
		});

		$(dropMenu).find('li').unbind('click');
		$(dropMenu).find('li').click(function(){
			var html = $(this).html(),
				attrPos = $(this).attr('data_pos'),
				dataPos;
			$(this).parent().siblings(clickClass).val(html);
			if(attrPos == undefined){
				var style = $(this).attr('data_line').split('_')[1];
				if(style == 'default'){
					option.xAxis[0].boundaryGap = true;
					for(var k in option.series){
						option.series[k].smooth = false;
						for(var c in option.series[k]){
							if(c.toString() == 'itemStyle') delete option.series[k][c];
						}
					}
				}
				if(style == 'area'){
					option.xAxis[0].boundaryGap = false;
					for(var key in option.series){
						option.series[key].smooth = true;
						option.series[key].itemStyle = {normal: {areaStyle: {type: 'default'}}};
					}
				}
				console.log(option.series[0])
				self.echarts(option);
			}else{
				dataPos = attrPos.split('_');
				// var posObj = $(this).parent().parent().parent().attr('id');
				if(dataPos[0] == 'free'){
					if(dataPos[1] == 'pos'){
						$(this).parent().parent().next().slideDown();
					}else{
						$(this).parent().parent().next().slideUp();
					}
				}
				if(dataPos[1] == 'title'){
					option.title.x = dataPos[2];
					option.title.y = dataPos[3];
				};
				if(dataPos[1] == 'legend'){
					option.legend.x = dataPos[2];
					option.legend.y = dataPos[3];
				};
				// if(posObj == 'pieLableMenu'){
				if(dataPos[0] == 'label'){
					if(dataPos[1] == 'inner') option.series[0].itemStyle.normal.labelLine.show = false;
					if(dataPos[1] == 'outer') option.series[0].itemStyle.normal.labelLine.show = true;
					option.series[0].itemStyle.normal.label.position = dataPos[1];
				}
				if(dataPos[0] == 'pie'){
					if(dataPos[1] == 'name') option.series[0].itemStyle.normal.label.formatter = '{b}';
					if(dataPos[1] == 'value') option.series[0].itemStyle.normal.label.formatter = '{c}';
					if(dataPos[1] == 'percent') option.series[0].itemStyle.normal.label.formatter = '{d}%';
					if(dataPos[1] == 'boss') option.series[0].itemStyle.normal.label.formatter = "{b}"+" : "+"{c} ( {d}% )";
				}
				// };
				myChart.setOption(option);
			};
			self.dataConfig(option);
			
		});

		self.theme.click(function(){
			option.theme = '/theme/'+$(this).attr('data_theme');
			self.echarts(option);
		});

		$(document).click(function(){
			$(dropMenu).hide();
		});
	},
	/**
	 * [customSwitch 自定义位置开关按钮]
	 * @param  {[type]} clickObj [点击对象]
	 * @param  {[type]} dropObj  [下拉对象]
	 * @return {[type]}          [description]
	 */
	customSwitch : function(clickObj,dropObj){
		var self = this;

		clickObj.unbind('click');
		clickObj.bind('click',self.handler);
		clickObj.click(function(){
			$(this).hasClass("active") ? (
				dropObj.slideDown()
			)
			: (
				dropObj.slideUp()
			);
		});
	},
	/**
	 * [customPos 自定义位置]
	 * @param  {[type]} el      [定位对象]
	 * @param  {[type]} myChart [实时更新echart图例对象]
	 * @param  {[type]} option  [echart绘图option数据]
	 * @return {[type]}         [description]
	 */
	customPos : function(el,myChart,option){
		var self = this;
		if(el)
		el.unbind('keydown');
		el.keydown(function(event){
			var posLen;
			var e = event || window.event || arguments.callee.caller.arguments[0];
			//Up按键
			if(e && e.keyCode==38){
				posLen = parseInt($(this).val())+1;
				$(this).val(posLen);
			};
			//Down按键
			if(e && e.keyCode==40){
				posLen = parseInt($(this).val())-1;
				if(posLen < 0) posLen = 0;
				$(this).val(posLen);
			};
			posLen = parseInt($(this).val());
			var direction= $(this).attr('posData');
			if(direction == 'title_x')  option.title.x  = posLen;
			if(direction == 'title_y')  option.title.y  = posLen;
			if(direction == 'title_size')  option.title.textStyle.fontSize = posLen;
			if(direction == 'subtitle_size')  option.title.subtextStyle.fontSize  = posLen;

			if(direction == 'legend_x') option.legend.x = posLen;
			if(direction == 'legend_y') option.legend.y = posLen;
			if(direction == 'legend_size')  option.legend.textStyle.fontSize = posLen;

			if(direction == 'inner_pie') option.series[0].radius[0] = posLen+'%';
			if(direction == 'outer_pie') option.series[0].radius[1] = posLen+'%';

			if(direction == 'grid_x') option.grid.x = posLen;
			if(direction == 'grid_y') option.grid.y = posLen;
			if(direction == 'grid_x2') option.grid.x2 = posLen;
			if(direction == 'grid_y2') option.grid.y2 = posLen;

			if(direction == 'bar_width'){
				for(var k in option.series){
					option.series[k].barWidth = posLen;
				}
			}
			if(direction == 'label_size') option.series[0].itemStyle.normal.labelLine.length = posLen;
			if(direction == 'label_fontsize') option.series[0].itemStyle.normal.label.textStyle.fontSize = posLen;

			myChart.setOption(option);
			self.dataConfig(option);


			el.unbind('keyup');
			el.keyup(function(){
				posLen = parseInt($(this).val());
				if(direction == 'title_x')  option.title.x  = posLen;
				if(direction == 'title_y')  option.title.y  = posLen;
				if(direction == 'title_size')  option.title.textStyle.fontSize = posLen;
				if(direction == 'subtitle_size')  option.title.subtextStyle.fontSize  = posLen;

				if(direction == 'legend_x') option.legend.x = posLen;
				if(direction == 'legend_y') option.legend.y = posLen;
				if(direction == 'legend_size')  option.legend.textStyle.fontSize = posLen;

				if(direction == 'center_x') option.series[0].center[0] = posLen+'%';
				if(direction == 'center_y') option.series[0].center[1] = posLen+'%';

				if(direction == 'inner_pie') option.series[0].radius[0] = posLen+'%';
				if(direction == 'outer_pie') option.series[0].radius[1] = posLen+'%';

				if(direction == 'grid_x') option.grid.x = posLen;
				if(direction == 'grid_y') option.grid.y = posLen;
				if(direction == 'grid_x2') option.grid.x2 = posLen;
				if(direction == 'grid_y2') option.grid.y2 = posLen;

				if(direction == 'bar_width'){
					for(var k in option.series){
						option.series[k].barWidth = posLen;
					}
				} 
				if(direction == 'label_size') option.series[0].itemStyle.normal.labelLine.length = posLen;
				if(direction == 'label_fontsize') option.series[0].itemStyle.normal.label.textStyle.fontSize = posLen;

				myChart.setOption(option);
				self.dataConfig(option);
			})			
		});
	},
	/**
	 * [PosAddSub 定位微调]
	 * @param {[type]} myChart [实时更新echart图例对象]
	 * @param {[type]} option  [echart绘图option数据]
	 */
	PosAddSub : function(myChart,option){
		var self = this;
		var posLen;
		self.pos_sub.unbind('click');
		self.pos_sub.click(function(){
			posLen = parseInt($(this).siblings('input').val())-1;
			posLen >= 0 && $(this).siblings('input').val(posLen);			
			posLen = parseInt($(this).siblings('input').val());

			var direction = $(this).siblings('input').attr('posData');
			if(direction == 'title_x')  option.title.x  = posLen;
			if(direction == 'title_y')  option.title.y  = posLen;
			if(direction == 'title_size')  option.title.textStyle.fontSize = posLen;
			if(direction == 'subtitle_size')  option.title.subtextStyle.fontSize  = posLen;

			if(direction == 'legend_x') option.legend.x = posLen;
			if(direction == 'legend_y') option.legend.y = posLen;
			if(direction == 'legend_size')  option.legend.textStyle.fontSize = posLen;

			if(direction == 'center_x') option.series[0].center[0] = posLen+'%';
			if(direction == 'center_y') option.series[0].center[1] = posLen+'%';

			if(direction == 'inner_pie') option.series[0].radius[0] = posLen+'%';
			if(direction == 'outer_pie') option.series[0].radius[1] = posLen+'%';

			if(direction == 'grid_x') option.grid.x = posLen;
			if(direction == 'grid_y') option.grid.y = posLen;
			if(direction == 'grid_x2') option.grid.x2 = posLen;
			if(direction == 'grid_y2') option.grid.y2 = posLen;

			if(direction == 'bar_width'){
				for(var k in option.series){
					option.series[k].barWidth = posLen;
				}
			}
			if(direction == 'label_size') option.series[0].itemStyle.normal.labelLine.length = posLen;
			if(direction == 'label_fontsize') option.series[0].itemStyle.normal.label.textStyle.fontSize = posLen;

			myChart.setOption(option);
			self.dataConfig(option);
		});
		self.pos_add.unbind('click');
		self.pos_add.click(function(){
			posLen = parseInt($(this).siblings('input').val())+1;
			$(this).siblings('input').val(posLen);			
			posLen = parseInt($(this).siblings('input').val());

			var direction = $(this).siblings('input').attr('posData');
			if(direction == 'title_x')  option.title.x  = posLen;
			if(direction == 'title_y')  option.title.y  = posLen;
			if(direction == 'title_size')  option.title.textStyle.fontSize = posLen;
			if(direction == 'subtitle_size')  option.title.subtextStyle.fontSize  = posLen;

			if(direction == 'legend_x') option.legend.x = posLen;
			if(direction == 'legend_y') option.legend.y = posLen;
			if(direction == 'legend_size')  option.legend.textStyle.fontSize = posLen;

			if(direction == 'center_x') option.series[0].center[0] = posLen+'%';
			if(direction == 'center_y') option.series[0].center[1] = posLen+'%';

			if(direction == 'inner_pie') option.series[0].radius[0] = posLen+'%';
			if(direction == 'outer_pie') option.series[0].radius[1] = posLen+'%';

			if(direction == 'grid_x') option.grid.x = posLen;
			if(direction == 'grid_y') option.grid.y = posLen;
			if(direction == 'grid_x2') option.grid.x2 = posLen;
			if(direction == 'grid_y2') option.grid.y2 = posLen;

			if(direction == 'bar_width'){
				for(var k in option.series){
					option.series[k].barWidth = posLen;
				}
			} 
			if(direction == 'label_size') option.series[0].itemStyle.normal.labelLine.length = posLen;
			if(direction == 'label_fontsize') option.series[0].itemStyle.normal.label.textStyle.fontSize = posLen;

			myChart.setOption(option);
			self.dataConfig(option);
		});
	},
	/**
	 * [configSwitch 所有配置总开关]
	 * @param  {[type]} option [echart绘图option数据]
	 * @return {[type]} [description]
	 */
	configSwitch : function(option){
		var self = this;
		self.title_switch 		&& self.titleSwitch(option);
		self.calculable_switch 	&& self.calculableSwitch(option);
		self.legend_switch 		&& self.legendSwitch(option);
		self.tooltip_switch		&& self.tooltipSwitch(option);
		// self.title_text 		&& self.titleChange(option);
		// self.title_subtext 		&& self.subTitleChange(option);
		self.title_pos_switch 	&& self.customSwitch(self.title_pos_switch,self.title_pos_menu);
		// self.title_size_switch	&& self.customSwitch(self.title_size_switch,self.title_size_menu);
		// self.legend_pos_switch 	&& self.customSwitch(self.legend_pos_switch,self.legend_pos_menu);
		// self.legend_size_switch	&& self.customSwitch(self.legend_size_switch,self.legend_size_menu);

		self.pie_pos_switch		&& self.customSwitch(self.pie_pos_switch,self.pie_pos_menu);
		self.pie_size_switch	&& self.customSwitch(self.pie_size_switch,self.pie_size_menu);
		self.pie_label_switch	&& self._pieLableSwitch(option);
		self.grid_switch		&& self.customSwitch(self.grid_switch,self.grid_menu);
		self.bar_width_switch	&& self.customSwitch(self.bar_width_switch,self.bar_width_menu);
	}
};
/**
 * [_pieLableSwitch 饼图私有label菜单开关]
 * @param  {[type]} option [echart绘图option数据]
 * @return {[type]}        [description]
 */
EchartsConfig.prototype._pieLableSwitch = function(option){
	var self = this;
	self.pie_label_switch.unbind('click');
	self.pie_label_switch.bind('click',self.handler);
	self.pie_label_switch.click(function(){
		$(this).hasClass("active") ? (
			option.series[0].itemStyle.normal.label.show = true,
			option.series[0].itemStyle.normal.labelLine.show = true,
			self.pie_label_menu.slideDown()
		)
		: (
			option.series[0].itemStyle.normal.label.show = false,
			option.series[0].itemStyle.normal.labelLine.show = false,
			self.pie_label_menu.slideUp()
		);
		self.echarts(option)
		self.dataConfig(option);
	});
}
EchartsConfig.prototype._compare = function(option,cb){
	var self = this;
	
	if(option.compare == undefined){
		return;
	}else{
		var compare = $('#compare .compare').clone();
		if(option.compare.x == 'right') compare.css({right:0});
		if(option.compare.y == 'top') compare.css({top:0});
		$('#'+self.echartObj).append(compare);
	}
	$('#'+self.echartObj).find('.compare').click(function(event){
		event = event || window.event;
		event.stopPropagation();
	})
}
EchartsConfig.prototype.compare = function(cb){
	setTimeout(function(){
		cb && cb()
	},50);
}
/**
 * [init EchartsConfig公有方法]
 * @param  {Func} cb [回调,自定义操作方法]
 * @return {[type]}      [description]
 */
EchartsConfig.init = function(cb){
	cb && cb();
}


window['EchartsConfig'] = EchartsConfig;

})(jQuery,document,window);

;(function($){

$.fn.extend({
	preventScroll:function(){
		$(this).each(function(){
			var _this = this;
			if(navigator.userAgent.indexOf('Firefox') >= 0){ //firefox
				_this.addEventListener('DOMMouseScroll',function(e){
					_this.scrollTop += e.detail > 0 ? 60 : -60;
					e.preventDefault();
				},false);
			}else{
				_this.onmousewheel = function(e){
					e = e || window.event;
					_this.scrollTop += e.wheelDelta > 0 ? -60 : 60;
					return false;
				};
			}
		})
	}
});

})(jQuery);
