import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
// const SubMenu = Menu.SubMenu;

class AdminHome extends React.Component {
	render() {
        return ( 
            <div className="gutter-example">
                <div className="ant-layout-content">
                    <a href="http://localhost:3006/#/app/home/index">返回</a>
                </div>
            </div>
            
        );
    }
}

export default AdminHome;