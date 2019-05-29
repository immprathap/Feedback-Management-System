import React from "react";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { feedbackTemplateInfoRequest } from './actions';
import makeSelectUser, { makeSelectFeedbackTemplateInfo, makeSelectFeedbackTemplateCategories } from './selectors';
import reducer from './reducer';
import saga from './saga';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Zoom from '@material-ui/core/Zoom';
import CircularProgress from '@material-ui/core/CircularProgress';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// core views
import FeedbackCategory from "./FeedbackCategory";
import PatientDetails from "./PatientDetails";
import PatientFeedback from "./PatientFeedback"
import GetComment from "./PatientFeedback/Transition/GetFeedback/GetComments"

import userHomeStyle from "assets/jss/material-dashboard-pro-react/containers/userHomeStyle.jsx";

const ZOOM_INTERVAL = 800;
const ZOOM_TIME = 500;

class User extends React.Component {
    state = {
        stepIndex: 0,
        feedbackCategory: null,
        fadeIn: true,
    }

    componentDidMount() {
        this.props.dispatch(feedbackTemplateInfoRequest());
    }

    makeZoom = (state) => {
        this.setState({
            fadeIn: false,
        });
        setTimeout(() => {
            this.setState({
                fadeIn: true,
                ...state
            })
        }, ZOOM_INTERVAL)
    }

    handleCategorySelect = (feedbackCategory) => {
        this.makeZoom({
            stepIndex: 1,
            feedbackCategory
        });
    }

    handleCancelFeedback = () => {
        this.makeZoom({
            stepIndex: 0,
            feedbackCategory: null
        });
    }

    handlePatientDetailsSubmit = (patientDetails) => {
        const { feedbackCategory } = this.state;
        const feedbackTemplateByCategory = this.props.feedbackTemplateInfo.toJS().find((data) => data.category_id === feedbackCategory);

        if (feedbackTemplateByCategory && feedbackTemplateByCategory.dep_list && feedbackTemplateByCategory.dep_list.length) {
            this.makeZoom({
                stepIndex: 2,
                patientDetails
            });
        } else {
            this.makeZoom({
                stepIndex: 3,
                patientDetails: null
            });
        }
    }

    handleRatingsSubmit = (feedbacks) => {
        this.makeZoom({
            stepIndex: 3,
            feedbacks
        });
    }

    handleCommentsSubmit = (comments) => {
        

    }

    render() {
        const { classes, feedbackTemplateInfo, feedbackTemplateCategories } = this.props;
        const { stepIndex, feedbackCategory } = this.state;
        let stepContent;

        switch (stepIndex) {
            case 0: {
                stepContent = (
                    feedbackTemplateCategories && feedbackTemplateCategories.size ? (
                        <div>
                            <Helmet>
                                <title>Feedback Category</title>
                                <meta name="feedback_category" content="Feedback Category" />
                            </Helmet>
                            <FeedbackCategory categories={feedbackTemplateCategories} onSelect={this.handleCategorySelect} />
                        </div>
                    ) : (
                            <CircularProgress />
                        )
                );
                break;
            }
            case 1: {
                stepContent = (
                    <div>
                        <Helmet>
                            <title>Patient Details</title>
                            <meta name="patient_details" content="Patient Details" />
                        </Helmet>
                        <PatientDetails feedbackCategory={feedbackCategory} onCancel={this.handleCancelFeedback} onSubmit={this.handlePatientDetailsSubmit} />
                    </div>
                );

                break;
            }
            case 2: {
                stepContent = (
                    <div>
                        <Helmet>
                            <title>Patient Feedback Ratings</title>
                            <meta name="patient_feedback" content="Patient Feedback Ratings" />
                        </Helmet>
                        <PatientFeedback feedbackCategory={feedbackCategory} feedbackTemplateInfo={feedbackTemplateInfo.toJS().find((data) => data.category_id === feedbackCategory)} onCancel={this.handleCancelFeedback} onSubmit={this.handleRatingsSubmit} />
                    </div>
                );
                break;
            }
            case 3: {
                const feedbackTemplateByCategory = feedbackTemplateInfo.toJS().find((data) => data.category_id === feedbackCategory);
                stepContent = (
                    <div>
                        <Helmet>
                            <title>Patient Feedback Comments</title>
                            <meta name="patient_feedback" content="Patient Feedback Comments" />
                        </Helmet>
                        <GetComment commentTypes={feedbackTemplateByCategory.comments_type} onCancel={this.handleCancelFeedback} onSubmit={this.handleCommentsSubmit} />
                    </div>
                );
                break;
            }
            case 4: {
                stepContent = (
                    <div>
                        <Helmet>
                            <title>Feedback Completed</title>
                            <meta name="patient_feedback_completed" content="Feedback Completed" />
                        </Helmet>
                        <GetComment commentTypes={feedbackTemplateByCategory.comments_type} onCancel={this.handleCancelFeedback} onSubmit={this.handleCommentsSubmit} />
                    </div>
                );
                break;
            }
        }

        return (
            <Zoom timeout={ZOOM_TIME} in={this.state.fadeIn}>
                {stepContent}
            </Zoom>
        );
    }
}

User.propTypes = {
    dispatch: PropTypes.func.isRequired,
    feedbackTemplateInfo: PropTypes.object.isRequired,
    feedbackTemplateCategories: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
    feedbackTemplateInfo: makeSelectFeedbackTemplateInfo(),
    feedbackTemplateCategories: makeSelectFeedbackTemplateCategories(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(withStyles(userHomeStyle)(User));
