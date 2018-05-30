import React from 'react';
import configs from '../../axios/config';
//导入echarts
var echarts = require('echarts/lib/echarts') //必须
require('echarts-wordcloud');
require('echarts/lib/component/title') //标题插件
const hostUrl = configs.hostUrl;
export default class Ciyun extends React.Component {
	constructor(props) {
		super(props);
		this.setPieOption = this.setGuzhangOption.bind(this);
		this.initguzhang = this.initguzhang.bind(this);
		this.state={
			guzhang:''
		}
	};
	initguzhang(){
        let myChart=echarts.init(this.refs.guzhang);
        var that=this;
		
        let options=this.setGuzhangOption(this.state.guzhang);
        myChart.setOption(options);
        myChart.on('click', function (params) {
        	// this.onSelect(1);
        	// $("#menuId li:first").attr("class"," ant-menu-item ");
        	// $("#menuId li:last").attr("class"," ant-menu-item ant-menu-item-selected ");
		    console.log(this);
		    window.location.href= hostUrl+"/ask/Ask?value="+params.data.name+"&key=1";
		});
        window.onresize=myChart.resize;
    }
	componentDidMount() {
		this.initguzhang();
	};
	componentWillUnmount(){     
        this.initguzhang();
    };
	componentDidUpdate(){
		echarts.dispose(this.refs.guzhang);
		this.initguzhang();
	}
	setGuzhangOption(){
        return {
           title: {
                text: "大家都在问",
                textStyle: {
                  color: '#6991e6',
                  fontStyle: 'oblique',
                  fontFamily: "Microsoft Yahei",
                }
            },
            tooltip: {
		        show: true
		    },
            series: [{
                type: 'wordCloud',
                gridSize: 20,
				sizeRange: [12, 60],
				rotationRange: [0, 0],
				shape: 'circle',
		        autoSize: {
		            enable: true,
		            minSize: 14
		        },
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
               data: [
					    {  
					        "name": "西科大在哪儿",  
					        "value": "198"  
					    },  
					    {  
					        "name": "知识工程",  
					        "value": "180"  
					    },  
					    {  
					        "name": "寝室有空调吗",  
					        "value": "174"  
					    },  
					    {  
					        "name": "男女比例是多少",  
					        "value": "147"  
					    },  
					    {  
					        "name": "西科大女生多吗",  
					        "value": "123"  
					    },  
					    {  
					        "name": "C语言是学位课吗",  
					        "value": "119"  
					    },  
					    {  
					        "name": "学费多少钱",  
					        "value": "106"  
					    },  
					    {  
					        "name": "计算机科学与技术",  
					        "value": "105"  
					    },  
					    {  
					        "name": "英语四六级",  
					        "value": "94"  
					    },  
					    {  
					        "name": "大数据",  
					        "value": "92"  
					    },  
					    {  
					        "name": "双学位",  
					        "value": "87"  
					    },  
					    {  
					        "name": "寝室是几人寝呀",  
					        "value": "86"  
					    },  
					    {  
					        "name": "JavaScript",  
					        "value": "76"  
					    },  
					    {  
					        "name": "CSS",  
					        "value": "76"  
					    },  
					    {  
					        "name": "jQuery",  
					        "value": "74"  
					    },  
					    {  
					        "name": "计科学院有几个专业",  
					        "value": "72"  
					    },  
					    {  
					        "name": "Java",  
					        "value": "70"  
					    },  
					    {  
					        "name": "C++",  
					        "value": "68"  
					    },  
					    {  
					        "name": "Python",  
					        "value": "68"  
					    },  
					    {  
					        "name": "软件开发",  
					        "value": "67"  
					    },  
					    {  
					        "name": "互联网",  
					        "value": "66"  
					    },  
					    {  
					        "name": "数据挖掘",  
					        "value": "63"  
					    },  
					    {  
					        "name": "数据可视化",  
					        "value": "62"  
					    },  
					    {  
					        "name": "信息系统",  
					        "value": "62"  
					    },  
					    {  
					        "name": "C#",  
					        "value": "61"  
					    },  
					    {  
					        "name": "React",  
					        "value": "55"  
					    },  
					    {  
					        "name": "Bootstrapt",  
					        "value": "55"  
					    },  
					    {  
					        "name": "K-Means",  
					        "value": "52"  
					    },  
					    {  
					        "name": "电子商务",  
					        "value": "52"  
					    },  
					    {  
					        "name": "物联网",  
					        "value": "49"  
					    },  
					    {  
					        "name": "数据结构",  
					        "value": "49"  
					    },  
					    {  
					        "name": "计算机系统集成",  
					        "value": "48"  
					    },  
					    {  
					        "name": "美食节是什么时候",  
					        "value": "48"  
					    },  
					    {  
					        "name": "西科佳人",  
					        "value": "45"  
					    },  
					    {  
					        "name": "房地产开发经营",  
					        "value": "44"  
					    },  
					    {  
					        "name": "寒假是什么时候",  
					        "value": "44"  
					    },  
					    {  
					        "name": "寒假放多久",  
					        "value": "41"  
					    },  
					    {  
					        "name": "西科扛把子",  
					        "value": "41"  
					    },  
					    {  
					        "name": "软甲工程",  
					        "value": "41"  
					    },  
					    {  
					        "name": "信息安全",  
					        "value": "41"  
					    },  
					    {  
					        "name": "医学影像",  
					        "value": "40"  
					    },  
					    {  
					        "name": "项目管理",  
					        "value": "39"  
					    },  
					    {  
					        "name": "数据库",  
					        "value": "37"  
					    },  
					    {  
					        "name": "PHP",  
					        "value": "37"  
					    },  
					    {  
					        "name": "oj",  
					        "value": "37"  
					    },  
					    {  
					        "name": "swust",  
					        "value": "37"  
					    },  
					    {  
					        "name": "龙山",  
					        "value": "35"  
					    },  
					    {  
					        "name": "逸夫图书馆",  
					        "value": "34"  
					    },  
					    {  
					        "name": "东六教学楼",  
					        "value": "34"  
					    } 
                ]
            }]
         };
    };
	render() {
		return (
			<div ref="guzhang"  style={{width: "100%", height:'100%'}}></div>	
		);
	};
}