import axios from 'axios';
import actions from './actions';
import configs from '../axios/config';
import Qs from 'qs';

const {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,

	GET_CAPTCHA_SUCCESS,
	GET_CAPTCHA_FAILURE,

} = actions;
const baseUrl = configs.baseUrl;
export function login(query = ''){
	return async(dispatch) => {
		try {
			const data = (await axios.get(`${baseUrl}/admin/login.do?${Qs.stringify(query)}`)).data;
			dispatch({
				type: LOGIN_SUCCESS,
				data: data
			});
			console.log('login');
			console.log(data);
		} catch (error) {
			dispatch({
				type: LOGIN_FAILURE,
				error: new Error('登录失败, 请稍后再试')
			});
		}
	}
};
export function getCaptcha(query = ''){
	return async(dispatch) => {
		try {
			// const data = (await axios.get(`${baseUrl}/tool/getCaptcha.do${query}`)).data;
			const data = {
			  	"data": {
				    "captchaImage": "data:image/gif;base64,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", 
				    "token": "277ce1ca-5426-11e8-9c2d-fa7ae01bbebc"
				}, 
			  	"status": "SUCCESS"
			};
			dispatch({
				type: GET_CAPTCHA_SUCCESS,
				data: data
			});
			console.log('getCaptcha');
			console.log(data);
		} catch (error) {
			dispatch({
				type: GET_CAPTCHA_FAILURE,
				error: new Error('获取验证码失败, 请稍后再试')
			});
			console.log('getCaptchaerror');
			console.log(error);
		}
	}
};