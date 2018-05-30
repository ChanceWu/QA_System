 
import React from 'react';
import $ from 'jquery';
import { Icon,Timeline,Row, Col,Card,Modal,message } from 'antd';
import CSSModules from 'react-css-modules';
import BreadcrumbCustom from '../BreadcrumbCustom';
import ModalBox from './Modal';
import styles from './styles.less';
import b1 from "../../style/imgs/answer.jpg";
import b2 from "../../style/imgs/swust.jpg";
import b3 from "../../style/imgs/11.png";
import {
    connect
} from 'react-redux';
import {
    getQuestionAnswer,
    feedback,
} from '../../action/ask';
 $.ajaxSetup({
    async : true
});
@connect(state => ({
    ask: state.ask,
}))
@CSSModules(styles)

class Ask extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             value: '',
             answer:'',
             cards:[],
             inputHeight: 600,
             i:0,
             imgPreview: false,
             data2: '',
             questionId: '',
             userId: '',
 
         };
         this.setImgPreview = this.setImgPreview.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleColChange = this.handleColChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleSetQuestion = this.handleSetQuestion.bind(this);
         this.handleBack = this.handleBack.bind(this);
     }
     componentDidMount() {
         var div5=document.getElementById('dialog');
         var div6=document.getElementById('inputBox');
         if(window.screen.availWidth < 900){
             div5.style.height = "580px";
             div6.style.top = "91%";
         }
         var getHref = window.location.href;
         if(getHref.split("value=")[1]!=null){
             var getValue = getHref.split("value=")[1].split("&key")[0];
             if(getValue!=""){
                 this.setState({value: decodeURI(getValue)});
             }
         }
     }
     setImgPreview(event) {
         console.log(event.target.src);
         var motai=document.getElementById('mo');
         
         console.log(motai.style);
         var moimg=document.getElementById("moimg");
         motai.style.display="block";
         moimg.src=event.target.src;
         var span=document.getElementById("close");
         span.onclick=function(){
             motai.style.display="none";
         }
     }
     /*setImgPreviewOn(){
 
     }*/
     handleChange(event) {
         this.setState({value: event.target.value});
     }
     handleColChange(event){
         var div3=document.getElementById('dialog');
         var div4=document.getElementById('inputBox');
         div4.style.top = div3.scrollHeight+"px";
         this.setState({inputHeight: div3.scrollHeight});
     }
 
     handleSubmit(event) {
         event.preventDefault();
         var appName=navigator;
         console.log(appName);
         this.state.userId=getCookie('userId');
         // alert("userId: "+this.state.userId);
         this.setState({
             userId: this.state.userId,
         });
         if (this.state.userId==null || this.state.userId==""){
             setCookie('userId',365); 
         }
 
         function getCookie(c_name){
             // alert("c_name: "+ document.cookie.length);
             if (document.cookie.length>0){ 
                 var c_start=document.cookie.indexOf(c_name + "=")
                 if (c_start!=-1){ 
                     c_start=c_start + c_name.length+1;
                     var c_end=document.cookie.indexOf(";",c_start);
                     if (c_end==-1){
                         c_end=document.cookie.length;
                     }
                     return unescape(document.cookie.substring(c_start,c_end));
                 } 
             }
             return "";
         }
         function setCookie(c_name,expiredays){
             var d = new Date().getTime();
             var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                 var r = (d + Math.random()*16)%16 | 0;
                 d = Math.floor(d/16);
                 return (c=='x' ? r : (r&0x3|0x8)).toString(16);
             });
             var exdate=new Date();
             exdate.setDate(exdate.getDate()+expiredays);
             document.cookie=c_name+ "=" +escape(uuid)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
         }
 
         this.state.cards.push(
             <div key={this.state.i++}>
                 <div className="question_logo" >
                     <img src={b1} />
                 </div>
                 <div>
                     <Card className="question_margin" bordered={false} >
                         <p>Q:{this.state.value}</p>
                     </Card>
                 </div>
             </div>
         );
         
         this.setState({
         });
         this.props.dispatch(getQuestionAnswer({
             question:this.state.value,
             userIdentity:this.state.userId
         })).then(() => {
             console.log('this.props.ask');
             console.log(this.props.ask);
             if(!!this.props.ask.getQuestionAnswer){
                 var res = this.props.ask.getQuestionAnswer.data.answerList[0];
                 var regexp = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|\&|-|~)+)/g;
                 var content = res.answer!=null ? res.answer+"":"很抱歉，没找到答案，请换个问题试试...";
                 var reg = "";
                 content = content.replace(regexp, function($url){
                     reg = $url;
                     return "$url";
                 });
                 var word1 = content.split("$url")[0];
                 var word2 = content.split("$url")[1];
                 console.log(word1+reg.link(reg)+word2);
                 // alert(res.owner.login);
                 // console.log(res.answer);
                 this.setState({
                     questionId: res.questionId,
                 });
                 
                 this.state.cards.push(
                     <div key={this.state.i++}>
                         <div className="answer_logo" >
                             <img src={b2} />
                         </div>
                         <div>
                             <Card className="answer_margin" bordered={false} >
                                 {/*<img onLoad={this.handleColChange} styleName="real" src="https://avatars3.githubusercontent.com/u/583231?v=4" id="real" alt="model test picture" onClick={this.setImgPreview} />*/}
                                 
                                 {
                                     reg.match(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|\&|-)+)/g) == reg
                                     &&
                                     <p>A:{word1}<a href={reg} style={{color: "#00f"}} target="view_window" >{reg}</a>{word2}</p>
                                 }
                                 {
                                     reg.match(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|\&|-)+)/g) != reg
                                     &&
                                     <p>A:{word1}{word2}</p>
                                 }
                                 {
                                     res.photo != ""
                                     &&
                                     <img onLoad={this.handleColChange} className="real" src={res.photo} id="real" alt="model test picture" onClick={this.setImgPreview} />
                                 }
                                 {
                                     res.file != ""
                                     &&
                                     <div><Icon type="file" /><a href={reg.file} target="view_window" >{reg.file}</a></div>
                                 }
                                 {
                                     true
                                     &&
                                     <div><Icon type="environment" /><a href="#/app/pages/Map" target="view_window" >查看地图</a></div>
                                 }
                                 <br />
                                 <h6>回答对你是否有帮助？</h6>
                                 <div className="answer_back" ><p data-value="1" onClick={this.handleBack}>很有帮助</p><p data-value="2" onClick={this.handleBack}>有点用</p><p data-value="3" onClick={this.handleBack}>完全没用</p></div>
                                 <ModalBox value={this.state} />
                             </Card>
                         </div>
                     </div>

                 );
                 console.log("卡片id"+this.state.cards[this.state.i-1].key)
                 this.setState({
                     answer: res.answer,
                     value: '',
                     data2: this.props.ask.getQuestionAnswer.data.askId,
                 });
                 var div1=document.getElementById('dialog');
                 var div2=document.getElementById('inputBox');
                 console.log(div1.scrollHeight+": "+div1.clientHeight);
                 console.log(div2.scrollHeight+": "+div2.clientHeight);
                 div2.style.top = div1.scrollHeight+"px";
                 console.log(div2.style.top);
                 //alert("顶部："+div1.scrollTop+"高度："+div1.scrollHeight+"差值："+(div1.scrollHeight-div1.scrollTop));
                 div1.scrollTop=div1.scrollHeight;
                 /*
                 *  图片加载有延迟，导致渲染后输入框隐藏在对话窗口下面
                 *  判断回答中是否含有图片，减去图片大小使得显示在对话框中
                 */
                 if(res.photo != ""){
                     div2.style.top = div1.scrollHeight-parseInt("120")+"px";
                 }
                 
                 this.setState({
                     inputHeight: div1.scrollHeight
                 });
 
             }
         });
     }
     handleSetQuestion(event){
         console.log(event.target.textContent);
         document.getElementById("question").value=event.target.textContent;
         this.setState({value: event.target.textContent});
         document.getElementById("question").focus();
     }
     handleBack(event){

         this.props.dispatch(feedback({
             askId:this.state.data2,
             feedbackId: event.target.getAttribute("data-value")
         })).then(() => {
             console.log('this.props.ask');
             console.log(this.props.ask);
             if (!!this.props.ask.feedback) {
                 if(this.props.ask.feedback.status == "success"){
                     message.success("评价成功！");
                 }
             }else{
                 message.success("评价失败，请稍后再试！");
             }
         });
         // $.get("http://qa.ksust.com/feedback.do", {askId:this.state.data2, feedbackId: event.target.getAttribute("data-value")}, function(status){
         //   message.success('你的反馈信息我们已经收到啦！');
         // }.bind(this));
         // alert("thsi: "+this.state.data2);
     }
     render() {
         return (
             <div>
                 <div >
                     <Row gutter={6} className="chatRow" >
                         <div>
                             <Col id="dialog" className="chatCol" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 14, offset: 1 }} >
                                {/*图片预览模态框*/}
                                <div className="motai" id="mo">
                                    <span className="close" id="close">X</span>
                                    <img className="motaiimg" id="moimg" />
                                    {/*<div styleName="caption" id="caption"></div>*/}
                                </div>
                                {this.state.cards}
                                
                            </Col>
                            <Col id="dialog"  xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 14, offset: 1 }} >
                                <div id="inputBox" className="chatCol_Input" >
                                    <form onSubmit={this.handleSubmit}>
                                        <label className="lab">
                                            {
                                                 window.screen.availWidth > 900
                                                 &&
                                                 "请输入问题:"
                                             }
                                             {
                                                 window.screen.availWidth < 900
                                                 &&
                                                 "问问:"
                                             }
                                             <input id="question" className="longer" type="text" value={this.state.value} onChange={this.handleChange} />
                                        </label>
                                        <input className="bigger" type="submit" value="Submit" />
                                    </form>
                                </div>
                                
                            </Col>
 
                         </div>
                         {
                             window.screen.availWidth < 900
                             &&
                             <Col className="mobile_box" xs={{ span: 21, offset: 1 }} sm={{ span: 21, offset: 1 }} md={{ span: 21, offset: 1 }} >
                             </Col>
                         }
                         <Col className="hotCol" xs={{ span: 21, offset: 1 }} sm={{ span: 21, offset: 1 }} md={{ span: 21, offset: 1 }} lg={{ span: 6, offset: 1 }} >
                             <div>
                                 <h2>常见问题</h2>
                             </div>
                             <div>
                                 <Card className="card_margin" bordered={false} onClick={this.handleSetQuestion}>
                                     西科大在哪儿？
                                 </Card>
                             </div>
                             <div>
                                 <Card className="card_margin" bordered={false} onClick={this.handleSetQuestion}>
                                     四六级怎么替换成绩？
                                 </Card>
                             </div>
                             <div>
                                 <Card className="card_margin" bordered={false} onClick={this.handleSetQuestion}>
                                     图书馆的电子阅览室在哪？
                                 </Card>
                             </div>
                             <div>
                                 <Card className="card_margin" bordered={false} onClick={this.handleSetQuestion}>
                                     一卡通丢失？
                                 </Card>
                             </div>
                             <div>
                                 <Card className="card_margin" bordered={false} onClick={this.handleSetQuestion}>
                                     西南科技大学校训？
                                 </Card>
                             </div>
                             <div>
                                 <Card className="card_margin" bordered={false} onClick={this.handleSetQuestion}>
                                     计科学院有多少个专业？
                                 </Card>
                             </div>
                             {/*<div>
                                 <Card styleName="card_margin" bordered={false} onClick={this.handleSetQuestion}>
                                     计算机学院就业信息？
                                 </Card>
                             </div>*/}
                         </Col>
                     </Row>
 
                     {/*<Row gutter={12} style={{marginLeft:'60px',marginRight:'0px'}}>
                         <div style={{ padding: '20px'}}>
                             <form onSubmit={this.handleSubmit}>
                                 <label styleName="lab">
                                     请输入问题:
                                      <input id="question" styleName="longer" type="text" value={this.state.value} onChange={this.handleChange} />
                                 </label>
                                 <input styleName="bigger" type="submit" value="Submit" />
                             </form>
                         </div>
                     </Row>*/}
                 </div>
 
             </div>
         );
     }
 }
 
export default Ask; 