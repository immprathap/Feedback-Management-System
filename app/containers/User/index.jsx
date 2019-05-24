import React from "react";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { toJS } from 'immutable';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { feedbackTemplateInfoRequest } from './actions';
import makeSelectUser, { makeSelectFeedbackTemplateInfo, makeSelectFeedbackTemplateCategories } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

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

import userHomeStyle from "assets/jss/material-dashboard-pro-react/containers/userHomeStyle.jsx";

const ZOOM_INTERVAL = 800;
const ZOOM_TIME = 600;

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

    handleFeedbackcategorySelect = (feedbackCategory) => {
        this.makeZoom({
            stepIndex: 1,
            feedbackCategory
        });
    }

    handlePatientDetailsSubmit = (patientDetails) => {
        this.makeZoom({
            stepIndex: 2,
            patientDetails
        });
    }

    handlePatientFeedbackSubmit = () => {

    }

    render() {
        const { classes, feedbackTemplateInfo, feedbackTemplateCategories } = this.props;
        const { stepIndex, feedbackCategory } = this.state;

        let stepContent;

        let actionButtons;

        switch (stepIndex) {
            case 0: {
                stepContent = (
                    feedbackTemplateCategories && feedbackTemplateCategories.size ? (
                        <div>
                            <Helmet>
                                <title>Feedback Category</title>
                                <meta name="feedback_category" content="Feedback Category" />
                            </Helmet>
                            <FeedbackCategory categories={feedbackTemplateCategories} onSelect={this.handleFeedbackcategorySelect} />
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
                        <PatientDetails feedbackCategory={feedbackCategory} onSubmit={this.handlePatientDetailsSubmit} />
                    </div>
                );

                break;
            }
            case 2: {
                stepContent = (
                    <div>
                        <Helmet>
                            <title>Patient Feedback</title>
                            <meta name="patient_feedback" content="Patient Feedback" />
                        </Helmet>
                        <PatientFeedback feedbackCategory={feedbackCategory} onSubmit={this.handlePatientFeedbackSubmit} />
                    </div>
                );
            }
        }

        return (
            <Zoom timeout={ZOOM_TIME} in={this.state.fadeIn}>
                <div>
                    {stepContent}
                </div>
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
