import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Table, Input, Button, Popconfirm} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
// const SubMenu = Menu.SubMenu;


const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `512016${i}`,
    age: `00:0${i}`,
    address: `否`,
    admin:`添加权限`,
  });
}

class EditableCell extends React.Component {
	state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {

    const { searchText } = this.state;
    console.log('searchText');console.log(searchText);
    const reg = new RegExp(searchText, 'gi');
    console.log(reg);
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
          // name: (
          //   <span>
          //     {record.name.split(reg).map((text, i) => (
          //       i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
          //     ))}
          //   </span>
          // ),
        };
      }).filter(record => !!record),
    });
  }
  componentWillMount(){
  	this.setState({data:data});
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys');console.log(selectedRowKeys);

    this.setState({ selectedRowKeys: selectedRowKeys});
  }
  allDelete = () =>{
    // alert(5);
  	const dataSource = [...this.state.data];
    console.log('dataSource');console.log(dataSource);
    // let data=dataSource;
     // data.length=0;
    // this.setState({ data: null});
    console.log(this.state.selectedRowKeys);
    let RowKeys = this.state.selectedRowKeys;
    console.log(RowKeys);
  	
  		// let key=this.state.selectedRowKeys[i];
		 // for(let i=0;i<this.state.selectedRowKeys.length;i++){
   //      dataSource.filter(item => item.key !== this.state.selectedRowKeys[i]);
   //    }
     this.setState({ data: dataSource.filter(function(item){
        
        for(let i = 0; i < RowKeys.length; i++){
          if(item.key == RowKeys[i]){
            return false;
          }
        }
        return true;
          
     })});
      console.log('dataSourcel');console.log(dataSource);
     // for (let i = 0; i < this.state.selectedRowKeys.length; i++) 
  		 //  dataSource.splice(this.state.selectedRowKeys[i]-i,1);
  	
  	//this.state.selectedRowKeys=null;
  	//this.state.selectedRowKeys.length=0;
  	
    // this.setState({ data: dataSource});
  }
	render() {
		const columns = [{
      title: 'ID',
      dataIndex: 'name',
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
    }, {
      title: '反馈时间',
      dataIndex: 'age',
    }, {
      title: '是否为管理员？',
      dataIndex: 'address',
    }, {
      title: '添加权限',
      dataIndex: 'admin',

    }];
		const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()], // 0...45
          });
        },
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],
      onSelection: this.onSelection,
    };
    return ( 
    	<div>
    	<Button onClick={this.allDelete}>删除已选</Button>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} /></div>
    );
  }
}



export default EditableCell;