// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SELECT_FEEDBACK_TEMPLATE_INFO_REQUEST } from './constants';
import { feedbackTemplateInfoSuccess, feedbackTemplateInfoError } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from './selectors';

function* InitRequest(requestURL) {
  const response = yield call(request, requestURL);
  return response;
}

/**
 * FeedbackTemplateInfo request/response handler
 */
function* getFeedbackInfo() {
  if (1) {
    const feedbackTemplateInfo = [
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd158e83df78faf1cb5db1c",
          category_id: 1,
          location_id: "10101",
          hide_all_dep: false,
          is_web: true,
          comments: "",
          dep_list: [
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 51
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 19
                      }
                  ],
                  dep_name: 1
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 5
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 7
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 70
                      }
                  ],
                  dep_name: 12
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 97
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 104
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 22
                      }
                  ],
                  dep_name: 8
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 71
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 23
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 52
                      }
                  ],
                  dep_name: 16
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 83
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 80
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 81
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 82
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 78
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 77
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 76
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 108
                      }
                  ],
                  dep_name: 5
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 87
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 9
                      }
                  ],
                  dep_name: 3
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 47
                      }
                  ],
                  dep_name: 28
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 44
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 18
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 74
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 40
                      }
                  ],
                  dep_name: 6
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 4
                      }
                  ],
                  dep_name: 33
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              7,
                              8,
                              9,
                              10,
                              11
                          ],
                          a: 0,
                          q_order: 0,
                          q: 91
                      }
                  ],
                  dep_name: 20
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              27,
                              28,
                              29,
                              30,
                              31
                          ],
                          a: 0,
                          q_order: 0,
                          q: 116
                      }
                  ],
                  dep_name: 23
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              27,
                              28,
                              29,
                              30,
                              31
                          ],
                          a: 0,
                          q_order: 0,
                          q: 114
                      }
                  ],
                  dep_name: 14
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 56
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 69
                      }
                  ],
                  dep_name: 18
              }
          ]
      },
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd159cf3df78faf1cb5db1d",
          category_id: 2,
          location_id: "10101",
          hide_all_dep: false,
          is_web: true,
          comments: "",
          dep_list: [
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 25
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 13
                      }
                  ],
                  dep_name: 2
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 101
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 8
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 75
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 16
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 21
                      }
                  ],
                  dep_name: 4
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 97
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 104
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 22
                      }
                  ],
                  dep_name: 8
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 83
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 80
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 81
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 82
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 79
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 77
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 76
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 108
                      }
                  ],
                  dep_name: 5
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 39
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 20
                      }
                  ],
                  dep_name: 17
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 47
                      }
                  ],
                  dep_name: 29
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              7,
                              8,
                              9,
                              10,
                              11
                          ],
                          a: 0,
                          q_order: 0,
                          q: 91
                      }
                  ],
                  dep_name: 20
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              27,
                              28,
                              29,
                              30,
                              31
                          ],
                          a: 0,
                          q_order: 0,
                          q: 116
                      }
                  ],
                  dep_name: 23
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              27,
                              28,
                              29,
                              30,
                              31
                          ],
                          a: 0,
                          q_order: 0,
                          q: 114
                      }
                  ],
                  dep_name: 14
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 56
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 69
                      }
                  ],
                  dep_name: 18
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 46
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 105
                      }
                  ],
                  dep_name: 11
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 41
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 24
                      }
                  ],
                  dep_name: 24
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 6
                      }
                  ],
                  dep_name: 21
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 37
                      }
                  ],
                  dep_name: 13
              }
          ]
      },
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd15a493df78faf1cb5db1e",
          category_id: 3,
          location_id: "10101",
          hide_all_dep: true,
          is_web: true,
          comments: "",
          dep_list: []
      },
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd15a703df78faf1cb5db1f",
          category_id: 4,
          location_id: "10101",
          hide_all_dep: true,
          is_web: true,
          comments: "",
          dep_list: []
      },
      {
          comments_type: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
          ],
          _id: "5cd15a8e3df78faf1cb5db20",
          category_id: 5,
          location_id: "10101",
          hide_all_dep: true,
          is_web: true,
          comments: "",
          dep_list: [
              {
                  q_list: [
                      {
                          a_opt: [
                              32,
                              33,
                              34,
                              35,
                              36,
                              37,
                              38,
                              39,
                              40,
                              41,
                              42,
                              43
                          ],
                          a: 0,
                          q_order: 0,
                          q: 3
                      }
                  ],
                  dep_name: 21
              }
          ]
      },
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd15aa23df78faf1cb5db21",
          category_id: 6,
          location_id: "10101",
          hide_all_dep: true,
          is_web: true,
          comments: "",
          dep_list: []
      },
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd15af03df78faf1cb5db22",
          category_id: 7,
          location_id: "10101",
          hide_all_dep: true,
          is_web: true,
          comments: "",
          dep_list: []
      },
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd15afa3df78faf1cb5db23",
          category_id: 8,
          location_id: "10101",
          hide_all_dep: true,
          is_web: true,
          comments: "",
          dep_list: []
      },
      {
          comments_type: [
              1,
              2,
              3
          ],
          _id: "5cd16111f91dc6e79a282342",
          category_id: 9,
          location_id: "10101",
          hide_all_dep: false,
          is_web: true,
          comments: "",
          dep_list: [
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 12
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 113
                      }
                  ],
                  dep_name: 2
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 42
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 21
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 59
                      }
                  ],
                  dep_name: 4
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 68
                      }
                  ],
                  dep_name: 8
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 55
                      }
                  ],
                  dep_name: 26
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              45,
                              44
                          ],
                          a: 0,
                          slider_ans: [
                              {
                                  id: 1,
                                  mins: 100
                              },
                              {
                                  id: 2,
                                  mins: 20
                              }
                          ],
                          q_order: 0,
                          q: 34
                      }
                  ],
                  dep_name: 30
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 66
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 67
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 65
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 64
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 10
                      }
                  ],
                  dep_name: 5
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 38
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 94
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 17
                      },
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 2
                      }
                  ],
                  dep_name: 12
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              27,
                              28,
                              29,
                              30,
                              31
                          ],
                          a: 0,
                          q_order: 0,
                          q: 49
                      },
                      {
                          a_opt: [
                              27,
                              28,
                              29,
                              30,
                              31
                          ],
                          a: 0,
                          q_order: 0,
                          q: 50
                      }
                  ],
                  dep_name: 15
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              7,
                              8,
                              9,
                              10,
                              11
                          ],
                          a: 0,
                          q_order: 0,
                          q: 91
                      }
                  ],
                  dep_name: 20
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              20,
                              21,
                              22,
                              23,
                              24,
                              25,
                              26
                          ],
                          a: 0,
                          q_order: 0,
                          q: 112
                      }
                  ],
                  dep_name: 24
              },
              {
                  q_list: [
                      {
                          a_opt: [
                              1,
                              2,
                              3,
                              4,
                              5
                          ],
                          a: 0,
                          q_order: 0,
                          q: 98
                      }
                  ],
                  dep_name: 27
              }
          ]
      },
      {
          comments_type: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
          ],
          _id: "5ce253b8ddf1c694aa92682f",
          category_id: 10,
          location_id: "10101",
          hide_all_dep: true,
          is_web: true,
          comments: "",
          dep_list: [
              {
                  q_list: [
                      {
                          a_opt: [
                              32,
                              33,
                              34,
                              35,
                              36,
                              37,
                              38,
                              39,
                              40,
                              41,
                              42,
                              43
                          ],
                          a: 0,
                          q_order: 0,
                          q: 3
                      }
                  ],
                  dep_name: 21
              }
          ]
      }
  ];

    yield put(feedbackTemplateInfoSuccess(feedbackTemplateInfo));
  } else {
    yield put(feedbackTemplateInfoError());
  }
}

// Individual exports for testing
export default function* userSaga() {
  yield takeLatest(SELECT_FEEDBACK_TEMPLATE_INFO_REQUEST, getFeedbackInfo);
}

