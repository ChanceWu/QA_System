import actions from '../action/actions';

const {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,

	GET_CAPTCHA_SUCCESS,
	GET_CAPTCHA_FAILURE,
} = actions;

export default (state = {}, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				getLogin:action.data,
			}
		case GET_CAPTCHA_SUCCESS:
			return {
				...state,
				getCaptcha:action.data,
			};
		default:
			return state;
	}
};