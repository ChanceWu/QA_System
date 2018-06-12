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
			const data = (await axios.post(`${baseUrl}/admin/login.do`,Qs.stringify(query))).data;
			// const data = (await axios.get(`./api/login.json?${Qs.stringify(query)}`)).data;
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
			const data = (await axios.get(`${baseUrl}/tool/getCaptcha.do${query}`)).data;
			// const data = (await axios.get('./api/getCaptcha.json')).data;
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