import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Zoom from '@material-ui/core/Zoom';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// core views
import FeedbackCategory from "./FeedbackCategory";
import PatientDetails from "./PatientDetails";
import PatientFeedback from "./PatientFeedback"

import userHomeStyle from "assets/jss/material-dashboard-pro-react/views/userHomeStyle.jsx";

const ZOOM_INTERVAL = 800;
const ZOOM_TIME = 600;

class User extends React.Component {
    state = {
        stepIndex: 0,
        feedbackCategory: null,
        fadeIn: true,
    }

    makeZoom = (state) => {
        this.setState({
            fadeIn: false,
        });
        setTimeout(()=>{
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
            stepIndex:2,
            patientDetails
        });
    }

    handlePatientFeedbackSubmit=()=>{
        
    }

    render() {
        const { classes } = this.props;
        const { stepIndex, feedbackCategory } = this.state;

        let stepContent;

        let actionButtons;

        switch (stepIndex) {
            case 0: {
                stepContent = <FeedbackCategory onSelect={this.handleFeedbackcategorySelect} />;
                break;
            }
            case 1: {
                stepContent = <PatientDetails feedbackCategory={feedbackCategory} onSubmit={this.handlePatientDetailsSubmit} />;
                break;
            }
            case 2: {
                stepContent = <PatientFeedback feedbackCategory={feedbackCategory} onSubmit={this.handlePatientFeedbackSubmit} />
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
    classes: PropTypes.object.isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withStyles(userHomeStyle)(User);
