import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Table, Input, Button, Popconfirm} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
// const SubMenu = Menu.SubMenu;

class EditableCell extends React.Component {
	state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
	render() {
		const { value, editable } = this.state;
        return ( 
            <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
            
        );
    }
}





class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'ID',
      dataIndex: 'name',
      width: '30%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'name')}
        />
      ),
    }, {
      title: '创建时间',
      dataIndex: 'age',
    }, {
      title: '是否为管理员',
      dataIndex: 'address',
    }, 
    {
      title: '添加权限',
      dataIndex: 'admin',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (

            <Popconfirm title="Sure to add?" onConfirm={() => this.addadmin(record.key)}>
              <a href="javascript:;" id="y">添加权限</a>
            </Popconfirm>
          ) : null
        );
      },
    }, {
      title: '删除',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <a href="javascript:;">Delete</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        name: '5120160',
        age: '0',
        address: '是',
      }, {
        key: '1',
        name: '5120161',
        age: '0',
        address: '是',
      }],
      count: 2,
    };
  }
  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  addadmin = (key) => {
    alert("ta已经成为管理员！");
    const dataSource = [...this.state.dataSource];
    console.log(dataSource);
     let str='是';
     let data=dataSource;
     data[key].address=str;
     data[key]
    this.setState({ dataSource: data});
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `512016${count}`,
      age: count,
      address: `否`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}


export default EditableTable;