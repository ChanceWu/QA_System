import React from 'react';
import $ from 'jquery';
import { Modal, Button, message } from 'antd';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import {
    supplementAnswer,
} from '../../action/ask';
import styles from './styles.less';

@connect(state => ({
	ask: state.ask,
}))
@CSSModules(styles)

class ModalBox extends React.Component {
    
    constructor(props) {
	    super(props);
	    this.state = {
	    	myAnswer: '',
	    	modal1Visible: false,
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.setModal1Visible = this.setModal1Visible.bind(this);
	    this.onClickOk = this.onClickOk.bind(this);
	    // this.getCookie = this.getCookie.bind(this);
	    // this.setCookie = this.setCookie.bind(this);
	}
	handleChange(event) {
	    this.setState({myAnswer: event.target.value});
  	}
	setModal1Visible(modal1Visible) {
    	this.setState({ modal1Visible: modal1Visible});
	}
	onClickOk(event){
		var an = document.getElementById("modal_input");
		console.log(an.value);
		console.log(this.props.value.questionId);
		console.log(this.state.myAnswer);
		
		this.setState({
			myAnswer: this.state.value,
		});
		this.props.dispatch(supplementAnswer({
			askId: this.props.value.questionId,
			submit: this.state.myAnswer
		})).then(() => {
			if(!!this.props.ask.supplementAnswer){
				if(this.props.ask.supplementAnswer.status == "SUCCESS"){
                    message.success("补充答案成功！");
                }
            }else{
                message.error("补充答案失败，请稍后再试！");
            }
		})
		/*$.post("http://qa.ksust.com/saveSubmitReply.do", {askId: this.props.value.data2, submit: this.state.myAnswer}, function(data,status){
	      message.success('你的补充回答我们已经收到啦！');
	    }.bind(this));*/
  		this.setModal1Visible(false);
	}
	
	render() {
		return (
		  	<div>
		    	<Button type="primary" onClick={() => this.setModal1Visible(true)}>我要补充答案</Button>
	    		<Modal
		      		title="自动问答"
		      		style={{ top: 20 }}
		      		visible={this.state.modal1Visible}
		      		onOk={this.onClickOk}
		      		onCancel={() => this.setModal1Visible(false)}
		    	>
		      		<h1>问题：{this.props.value.value}</h1>
        			<label className="modal_label">
         		 		补充回答:
         				 <input id="modal_input" className="modal_input" type="text" value={this.state.value} onChange={this.handleChange} />
		 			</label>
		    	</Modal>
	  		</div>
		);
	}
}

export default ModalBox;