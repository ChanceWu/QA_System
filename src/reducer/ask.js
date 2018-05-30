import actions from '../action/actions';

const {
	GET_ANSWER_SUCCESS,
	GET_ANSWER_FAILURE,

	FEEDBACK_SUCCESS,
	FEEDBACK_FAILURE,

	SUPPLEMENT_ANSWER_SUCCESS,
	SUPPLEMENT_ANSWER_FAILURE,
} = actions;

export default (state = {}, action) => {
	switch (action.type) {
		case GET_ANSWER_SUCCESS:
			return {
				...state,
				getQuestionAnswer:action.data,
			}
		case FEEDBACK_SUCCESS:
			return {
				...state,
				feedback:action.data,
			};
		case SUPPLEMENT_ANSWER_SUCCESS:
			return {
				...state,
				supplementAnswer:action.data,
			};
		/*case GET_TOPIC_SUCCESS:
			return {
				...state,
				topicCount:action.data,
			}
		case GET_PACKAGE_SUCCESS:
			return {
				...state,
				data:action.data.pagingList,
				total:action.data.total
			}
		case TRY_PACKAGE_SUCCESS:
			return {
				...state,
				code:action.data.code
			}
		case CREATE_ORDER_SUCCESS:
			return {
				...state,
				code:action.data.code,
			}*/
		default:
			return state;
	}
};