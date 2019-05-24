/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SELECT_FEEDBACK_TEMPLATE_INFO_REQUEST, SELECT_FEEDBACK_TEMPLATE_INFO_SUCCESS, SELECT_FEEDBACK_TEMPLATE_INFO_ERROR } from './constants';

export const initialState = fromJS({
  isLoading: false,
  feedbackTemplateInfo: [],
  feedbackTemplateCategories: []
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SELECT_FEEDBACK_TEMPLATE_INFO_REQUEST:
      return state.set('isLoading', true);
    case SELECT_FEEDBACK_TEMPLATE_INFO_SUCCESS:
      return state.set('feedbackTemplateInfo', fromJS(action.payload))
      .set('feedbackTemplateCategories', fromJS(action.payload.map((obj_catogory)=>obj_catogory.category_id)))
      .set('isLoading', false);
    case SELECT_FEEDBACK_TEMPLATE_INFO_SUCCESS:
        return state.set('isLoading', false);
    default:
      return state;
  }
}

export default userReducer;
