import axios from 'axios';
import actions from './actions';
import configs from '../axios/config';
import Qs from 'qs';
import {
    getTokenHeader
} from '../utils/index';
const {
	GET_ANSWER_SUCCESS,
	GET_ANSWER_FAILURE,

	FEEDBACK_SUCCESS,
	FEEDBACK_FAILURE,

	SUPPLEMENT_ANSWER_SUCCESS,
	SUPPLEMENT_ANSWER_FAILURE,

} = actions;
const baseUrl = configs.baseUrl;
export function getQuestionAnswer(query = ''){
	return async(dispatch) => {
		try {
			let headers = getTokenHeader({});
			const data = (await axios.get(`${baseUrl}/ask.do?${Qs.stringify(query)}`,
				Qs.stringify({headers: headers})
			)).data;
			dispatch({
				type: GET_ANSWER_SUCCESS,
				data: data
			});
			console.log('getQuestionAnswer');
			console.log(data);
		} catch (error) {
			dispatch({
				type: GET_ANSWER_FAILURE,
				error: new Error('答案获取失败, 请稍后再试')
			});
		}
	};
};
export function feedback(query = '') {
	return async(dispatch) => {
		try {
			// let headers = getTokenHeader({});
			const data = (await axios.get(`${baseUrl}/feedback.do?${Qs.stringify(query)}`)).data;
			dispatch({
				type: FEEDBACK_SUCCESS,
				data: data
			});
		} catch (error) {
			dispatch({
				type: FEEDBACK_FAILURE,
				error: new Error('评价反馈失败, 请稍后再试')
			});
		}
	};
};
export function supplementAnswer(config, query = '') {
	console.log('config');
	console.log(config);
	return async(dispatch) => {
		try {
			// let headers = getTokenHeader({});
			const data = (await axios.post(`${baseUrl}/saveSubmitReply.do${query}`,Qs.stringify(config))).data;
			dispatch({
				type: SUPPLEMENT_ANSWER_SUCCESS,
				data: data
			});
		} catch (error) {
			dispatch({
				type: SUPPLEMENT_ANSWER_FAILURE,
				error: new Error('补充问题答案失败, 请稍后再试')
			});
		}
	};
};