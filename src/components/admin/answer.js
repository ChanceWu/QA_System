


import React from 'react';
import { Icon,Timeline, Row, Col, Card ,Layout,Modal,Popconfirm, Button,Carousel,Input,Radio,Menu,Dropdown,Select,Table} from 'antd';
import CSSModules from 'react-css-modules';
import BreadcrumbCustom from '../BreadcrumbCustom';

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Joe Black',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Jim Green',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];
class AdminHome extends React.Component {
	
state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,

  };
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
   onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }
  // handleAdd = () => {

  //   const { count, dataSource } = this.state;alert(5);
  //   const newData = {
  //     key: '5',
  //     name: 'Jim Gdddddddreen',
  //     age: 325,
  //     address: 'Sidney No. 1 ddLake Park',
  //   };
  //   this.setState({
  //     dataSource: [...dataSource, newData],
  //     count: count + 1,
  //   });
  // }

	render() {
		const columns = [{
      title: '问题描述',
      dataIndex: 'name',
      width:'35%',
      key: 'name',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
    },{
      title: '问题回答',
      dataIndex: 'answ',
      key: 'answ',
      width:'30%',
    }, {
      title: 'ID',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '访问量',
      dataIndex: 'address',
      key: 'address',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }];
        return (<div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
          <Table bordered   columns={columns} dataSource={this.state.data} />
        </div>);
         
    }
}

export default AdminHome;
