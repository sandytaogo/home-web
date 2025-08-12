<template>
	<div class="up-down-chart"></div>
    <div class="risk-container"></div>
</template>

<script lang="ts">

    import * as echarts from 'echarts';

	import { defineComponent, ref, toRefs, nextTick, watch } from 'vue'

    const financeOverview = defineComponent({


		name : 'finance-overview',

		props: {
			financeOverview : {
				type: Object,
				required : true
			},
			resize : {
				type: Object
			}
		},
		setup(props, context) {
			
			const loss_gain_color = {lossshow:'#1d913d',scoredraw:'#999393', gainshow:'#c71515'};
			var ups_downs_data = [
				{value: 70,itemStyle: {color: loss_gain_color.gainshow}},
				{value: 64,itemStyle: {color: loss_gain_color.gainshow}},
				{value: 179,itemStyle: {color: loss_gain_color.gainshow}},
				{value: 2300,itemStyle: {color: loss_gain_color.gainshow}},
				{value: 951,itemStyle: {color: loss_gain_color.gainshow}},
				{value: 2613,itemStyle: {color: loss_gain_color.scoredraw}},
				{value: 218,itemStyle: {color: loss_gain_color.lossshow}},
				{value: 1125,itemStyle: {color: loss_gain_color.lossshow}},
				{value: 151,itemStyle: {color: loss_gain_color.lossshow}},
				{value: 19,itemStyle: {color: loss_gain_color.lossshow}},
				{value: 15,itemStyle: {color: loss_gain_color.lossshow}}
			];

		 	let EChartsType = {  };

			let financeEcharts = {
				upDownEchart: EChartsType,
				riskEchart: EChartsType
			};
			
			let up_down_option = reactive({
				label: {
					show:true,
					normal: {
						// 在文本中，可以对部分文本采用 rich 中定义样式。
						// 这里需要在文本中使用标记符号：
						// `{styleName|text content text content}` 标记样式名。
						// 注意，换行仍是使用 '\n'。
						formatter: ['{a|这段文本采用样式a}','{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'].join('\n'),
						// 这里是文本块的样式设置：
						show:true,
						color: '#333',
						fontSize: 14,
						fontFamily: 'Arial',
						borderWidth: 8,
						backgroundColor: '#984455',
						padding: [2, 2, 2, 2],
						lineHeight: 10,
						// rich 里是文本片段的样式设置：
						rich: {
							a: {
								color: 'red',
								lineHeight: 10
							},
							b: {
								backgroundColor: {
									image: 'xxx/xxx.jpg'
								},
								height: 10
							},
							x: {
								fontSize: 14,
								fontFamily: 'Microsoft YaHei',
								borderColor: '#449933',
								borderRadius: 4
							}
						}
					}
				},
				grid : [ {
					top:'10%',
					left : '0%',
					right : '0%',
					bottom: "10%",
					y:20,
					y2:20
				}, {
					top : '45%',
					left : '0%',
					right : '0%',
					bottom: "19%",
					//y2:30
				} ],
				xAxis: {
					type: 'category',
					splitNumber:11,
					axisLabel: {
			//			interval:1,
						fontSize:14
					},
					data: ['涨停', '>7%', '7~5%', '5~2%', '2~0%', '平', '0~2%', '2~5%', '5~7%', '7<%', "跌停"]
				},
				yAxis: {
					type: 'value',
					show:false
				},
				series: [
					{
						data : ups_downs_data,
						type: 'bar',
						itemStyle:{
							normal:{
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
		//										formatter: '{c}%',//显示百分号
									textStyle: {
										color: '#000',//字体颜色
										fontSize: 14//字体大小
									}  
								},
								barBorderRadius:[2, 2, 0, 0]
							}
						}
					}
				]
			});

			watchEffect(function () {
				
			});

			onMounted(() => {
				let chartDom: any = document.querySelector('.up-down-chart');
				let myChart = echarts.init(chartDom, null, {renderer: 'canvas', useDirtyRect: false});
				financeEcharts.upDownEchart = myChart;

				chartDom = document.querySelector('.risk-container');
				myChart = echarts.init(chartDom, null, {renderer: 'canvas', useDirtyRect: false});
				financeEcharts.riskEchart = myChart;
			})

			return {up_down_option:up_down_option, financeEcharts: financeEcharts}
		},

		watch: {
			financeOverview: function(oldValue, newValue) {
				for (var i =0 ; i < this.financeOverview.upsdowns.length; i++) {
					this.up_down_option.series[0].data[i].value = this.financeOverview.upsdowns[i];
				}
				this.renderUpDownChart(new Object());
				this.readderRiskEchart();
			},
			resize: function(oldValue, newValue) {
				if (this.financeEcharts.upDownEchart) {
					this.financeEcharts.upDownEchart.resize();
				}
				if (this.financeEcharts.riskEchart) {
					this.financeEcharts.riskEchart.resize();
				}
			}
		},
		mounted() {
			this.renderUpDownChart(new Object());
			this.readderRiskEchart();
		},
		unmounted() {
			if (this.financeEcharts.upDownEchart) {
				this.financeEcharts.upDownEchart.destory();
			}
			// if (this.financeEcharts.riskEchart) {
			// 	this.financeEcharts.riskEchart.destory();
			// }
		},
		methods: {
			renderUpDownChart(event : any) {
				if (this.financeEcharts.upDownEchart) {
					this.financeEcharts.upDownEchart.setOption(this.up_down_option, true);
				}
			},
			readderRiskEchart() {
				//走势
				var trends = [220, 182, 191, 234, 290, 330, 110];
				//情绪
				var mss = [120, 132, 101, 134, 90, 230, 210,454,345,234,324,45,664,546,345,43];
				//预警
				var risk = [150, 232, 201, 154, 190, 330, 410];
				var min_data = trends[6], max_data = mss[12];
				let data = this.financeOverview;
				if (data && data.trends == undefined) {
					return;
				}
				if (data) {
					trends = [data.trends.length];
					mss = [data.mss.length];
					for (var i = 0; i < data.trends.length; i++) {
						if (i == 0) {
							min_data = data.trends[i];
						}
						if (data.trends[i]) {
							if (min_data > data.trends[i]) {
								min_data = data.trends[i];
							}
							if (max_data < data.trends[i]) {
								max_data = data.trends[i];
							}
						} else {
							data.trends[i] = '';
						}
						
						if (!data.mss[i]) {
							data.mss[i] = '';
						}
						if (!data.risk[i]) {
							data.risk[i] = '';
						}
					}
					trends = data.trends;
					risk = data.risk;
					var unit = (max_data - min_data) / 100;
					var mss_calc = [data.mss.length];
					for (var i = 0; i < data.mss.length; i++) {
						if (data.mss[i] == '' || data.mss[i] == null || data.mss[i] == 'null') {
							mss_calc [i] = '';
						} else {
							mss_calc [i] = min_data + (unit * data.mss[i]);
						}
					}
					mss = mss_calc;
				}
				let risk_option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross'
						}
					},
					legend: {
						icon: 'rect', 
						type:'scroll',
						itemWidth: 12,
						itemHeight: 5,
						left: 0,
						top: '37%',  
						textStyle: {
							fontSize: 18
							// color: '#0e99e2'
						},
						pageIconColor:'#0e99e2'
					},
						grid: [
						{
							top: '50%',
							left: '1%',
							right: '1%',
							bottom: '5%',
						},
						{
							top: '50%',
							left: '1%',
							right: '1%',
							bottom: '5%',
						},
						{
							top: '50%',
							left: '1%',
							right: '1%',
							bottom: '5%',
						}
					],
					xAxis: [
						{
							gridIndex: 0,
							type: 'category',
							boundaryGap: false,
							// data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						{
							gridIndex: 1,
							show:false,
						},
						{
							gridIndex: 2,
							show:false,
						}
					],
					yAxis: [
						{
							gridIndex: 0,
							position: 'left',
							splitNumber: 4,
							interval:(max_data - min_data) / 4,
							axisLabel: {
								inside: true,
								fontSize: 18,
								formatter:function(val: any) {
									if (typeof val == 'number') {
										return val.toFixed(2);
									}
									return val;
								}
							},
							axisPointer:{
								label: {
									formatter:function(params: any) {
										if (typeof params.value == 'number') {
											return params.value.toFixed(2);
										}
										return params.value;
									}
								}
							},
							min:min_data,
							max:max_data
						},
						{
							gridIndex: 1,
							show:false,
							position: 'right',
							axisLabel: {
								show:false
							},
							splitNumber: 4,
							interval: (max_data - min_data) / 4,
							axisPointer:{
								label: {
									formatter:function(params: any) {
										if (typeof params.value == 'number') {
											return params.value.toFixed(2);
										}
										return params.value;
									}
								}
							},
							min:min_data,
							max:max_data
						},
						{
							gridIndex: 2,
							position: 'right',
							splitNumber: 4,
							interval: (max_data - min_data) / 4,
							axisLabel: {
								inside: true,
								fontSize: 18,
								color:function(val: any) {
									var a = max_data - min_data;
									var bisection = a / 5;
									for (var i = 0; i < 5; i++) {
										if ((min_data + bisection * (i + 1) ) >= val) {
											switch(i) {
												case 0: return "#109133";
												case 1: return "#0da17f";
												case 2: return "#0f8bee";
												case 3: return "#d1991a";
												case 4: return "#ec0000";
											}
											break;
										}
									}
								},
								formatter:function(val: any) {
									var a = max_data - min_data;
									var bisection = a / 5;
									for (var i = 0; i < 5; i++) {
										if ((min_data + bisection * (i + 1) ) >= val) {
											switch(i) {
												case 0: return "底";
												case 1: return "偏低";
												case 2: return "正常";
												case 3: return "偏高";
												case 4: return "高";
											}
											break;
										}
									}
									return val;
								}
							},
							axisPointer:{
								label: {
									formatter:function(params: any) {
										if (typeof params.value == 'number') {
											return params.value.toFixed(2);
										}
										return params.value;
									}
								}
							},
							min:min_data,
							max:max_data
						}
					],
					series: [
						{
							gridIndex: 0,
							name: '大盘走势',
							type: 'line',
							data: trends
						},
						{
							gridIndex: 1,
							name: '市场情绪',
							type: 'line',
							data: mss
						},
						{
							gridIndex: 2,
							name: '风险预警',
							type: 'line',
							stack: 'Total',
							data: risk
						}
					]
				};
			
				this.financeEcharts.riskEchart.setOption(risk_option, true);
			}
		}
	});

	export default financeOverview;

</script>


<style scoped >

.up-down-chart {
	width: 100%;
    height: 50%;
}

.risk-container {
    width: 100%;
    height: 50%;
}

</style>