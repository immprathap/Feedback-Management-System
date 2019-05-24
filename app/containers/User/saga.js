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
      _id: "ObjectId(5cd158e83df78faf1cb5db1c)",
      category_id: 1,
      hide_all_dep: false,
      is_web: true,
      dep_list: [
        {
          dep_name: 1,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 51,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 19,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 12,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 5,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 7,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 70,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 8,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 97,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 104,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 22,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 16,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 71,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 23,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 52,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 5,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 83,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 80,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 81,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 82,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 78,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 77,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 76,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 108,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 3,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 87,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 9,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 28,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 47,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 6,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 44,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 18,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 74,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 40,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 33,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 4,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        },
        {
          dep_name: 20,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 91,
              ans_opt: [
                7,
                8,
                9,
                10,
                11
              ]
            }
          ]
        },
        {
          dep_name: 23,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 115,
              ans_opt: [
                27,
                28,
                29,
                30,
                31
              ]
            }
          ]
        },
        {
          dep_name: 14,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 114,
              ans_opt: [
                27,
                28,
                29,
                30,
                31
              ]
            }
          ]
        },
        {
          dep_name: 18,
          quest_list: [
            {
              ans: 0,
              order_id: 0,
              question: 56,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            },
            {
              ans: 0,
              order_id: 0,
              question: 69,
              ans_opt: [
                1,
                2,
                3,
                4,
                5
              ]
            }
          ]
        }
      ]
    },
    {
      _id: "ObjectId(5cd159cf3df78faf1cb5db1d)",
        category_id : 2,
          hide_all_dep : false,
            is_web : true,
              dep_list : [
                {
                  dep_name: 2,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 25,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 13,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 4,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 101,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 8,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 75,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 16,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 21,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 8,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 97,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 104,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 22,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 5,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 83,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 80,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 81,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 82,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 79,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 77,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 76,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 108,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 17,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 39,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 20,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 29,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 47,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 20,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 91,
                      ans_opt: [
                        7,
                        8,
                        9,
                        10,
                        11
                      ]
                    }
                  ]
                },
                {
                  dep_name: 23,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 115,
                      ans_opt: [
                        27,
                        28,
                        29,
                        30,
                        31
                      ]
                    }
                  ]
                },
                {
                  dep_name: 14,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 114,
                      ans_opt: [
                        27,
                        28,
                        29,
                        30,
                        31
                      ]
                    }
                  ]
                },
                {
                  dep_name: 18,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 56,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 69,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 11,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 46,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 105,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 24,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 41,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 24,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 21,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 6,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 13,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 37,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                }
              ]
    },{
      _id: "ObjectId(5cd15a493df78faf1cb5db1e)",
        category_id : 3,
          hide_all_dep : true,
            is_web : true,
              dep_list : []
    },{
      _id: "ObjectId(5cd15a703df78faf1cb5db1f)",
        category_id : 4,
          hide_all_dep : true,
            is_web : true,
              dep_list : []
    },{
      _id: "ObjectId(5cd15a8e3df78faf1cb5db20)",
        category_id : 5,
          hide_all_dep : false,
            is_web : true,
              dep_list : [
                {
                  dep_name: 21,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 3,
                      ans_opt: [
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
                      ]
                    }
                  ]
                }
              ]
    },{
      _id: "ObjectId(5cd15aa23df78faf1cb5db21)",
        category_id : 6,
          hide_all_dep : true,
            is_web : true,
              dep_list : []
    },{
      _id: "ObjectId(5cd15af03df78faf1cb5db22)",
        category_id : 7,
          hide_all_dep : true,
            is_web : true,
              dep_list : []
    },{
      _id: "ObjectId(5cd15afa3df78faf1cb5db23)",
        category_id : 8,
          hide_all_dep : true,
            is_web : true,
              dep_list : []
    },{
      _id: "ObjectId(5cd16111f91dc6e79a282342)",
        category_id : 9,
          hide_all_dep : false,
            is_web : true,
              dep_list : [
                {
                  dep_name: 2,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 12,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 113,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 4,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 42,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 21,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 59,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 8,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 68,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 26,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 55,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 32,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 34,
                      ans_opt: [
                        45,
                        44
                      ]
                    }
                  ]
                },
                {
                  dep_name: 5,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 66,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 67,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 65,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 64,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 10,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 12,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 38,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 94,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 17,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 2,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                },
                {
                  dep_name: 15,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 49,
                      ans_opt: [
                        27,
                        28,
                        29,
                        30,
                        31
                      ]
                    },
                    {
                      ans: 0,
                      order_id: 0,
                      question: 50,
                      ans_opt: [
                        27,
                        28,
                        29,
                        30,
                        31
                      ]
                    }
                  ]
                },
                {
                  dep_name: 20,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 91,
                      ans_opt: [
                        7,
                        8,
                        9,
                        10,
                        11
                      ]
                    }
                  ]
                },
                {
                  dep_name: 24,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 112,
                      ans_opt: [
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26
                      ]
                    }
                  ]
                },
                {
                  dep_name: 27,
                  quest_list: [
                    {
                      ans: 0,
                      order_id: 0,
                      question: 98,
                      ans_opt: [
                        1,
                        2,
                        3,
                        4,
                        5
                      ]
                    }
                  ]
                }
              ]
    }];

    yield put(feedbackTemplateInfoSuccess(feedbackTemplateInfo));
  } else {
    yield put(feedbackTemplateInfoError());
  }
}

// Individual exports for testing
export default function* userSaga() {
  yield takeLatest(SELECT_FEEDBACK_TEMPLATE_INFO_REQUEST, getFeedbackInfo);
}

