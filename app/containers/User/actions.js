/*
 *
 * User actions
 *
 */

import { DEFAULT_ACTION, SELECT_FEEDBACK_TEMPLATE_INFO_REQUEST, SELECT_FEEDBACK_TEMPLATE_INFO_SUCCESS, SELECT_FEEDBACK_TEMPLATE_INFO_ERROR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function feedbackTemplateInfoRequest() {
  return {
    type: SELECT_FEEDBACK_TEMPLATE_INFO_REQUEST,
  };
}

export function feedbackTemplateInfoSuccess(payload) {
  return {
    type: SELECT_FEEDBACK_TEMPLATE_INFO_SUCCESS,
    payload
  };
}

export function feedbackTemplateInfoError() {
  return {
    type: SELECT_FEEDBACK_TEMPLATE_INFO_ERROR,
  };
}