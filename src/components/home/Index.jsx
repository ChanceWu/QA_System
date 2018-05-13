import React from 'react';
import { Icon,Timeline, Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import CSSModules from 'react-css-modules';
import styles from './styles.less';
import CiYun from './Ciyun.js';
class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div className="gutter-example">
                <div className="ant-layout-content">
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card bordered={false}>
                                    <div className="ditu"><CiYun /></div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card bordered={false}>
                                    <div className="shuju">
                                        <p className="bigtitle">[&nbsp;&nbsp;&nbsp;&nbsp;问题分类&nbsp;&nbsp;&nbsp;&nbsp;]</p>
                                        {/*<p styleName="smalltitle">多重维度指标，满足不同岗位权限划分，管理更高效</p>
                                        <p styleName="smalltitle">老板、大区经理、品牌经理、售后经理...各取所需</p>*/}
                                        <div className="left">
                                            <p>专业指导</p>
                                             <Timeline>
                                                <Timeline.Item>计算机科学与技术</Timeline.Item>
                                                <Timeline.Item>软件工程</Timeline.Item>
                                                <Timeline.Item>信息安全</Timeline.Item>
                                                <Timeline.Item>医学影像</Timeline.Item>
                                             </Timeline>
                                        </div>
                                        <div className="right">
                                            <p>校园百科</p>
                                            <Timeline>
                                                <Timeline.Item>推荐热门</Timeline.Item>
                                                <Timeline.Item>助力学习</Timeline.Item>
                                                <Timeline.Item>多彩生活</Timeline.Item>
                                                <Timeline.Item>权威声音</Timeline.Item>
                                                <Timeline.Item>寻求帮助</Timeline.Item>
                                            </Timeline>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            
        );
    }
}

export default CSSModules(Index, styles);