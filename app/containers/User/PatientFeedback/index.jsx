import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { Grid } from "material-ui";
import InfoIcon from "@material-ui/icons/Info";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

import Transition from './Transition';

class PatientFeedback extends React.Component {
  state = {
    feedbacks: {},
  };

  handleFeedback=(department, questionId, feedback)=>{
    var feedbacks = this.state.feedbacks;
    feedbacks[questionId] = feedback;
    this.setState({
      feedbacks: feedbacks,
    });
  }

  handleOnAutoComplete=()=>{
    this.props.onSubmit(this.state.feedbacks);    
  }

  render() {

    return (

      <Card>
        <CardHeader color="primary" icon>
          <CardIcon color="primary">
            <InfoIcon />
          </CardIcon>
          <h4>Feedback Ratings</h4>
        </CardHeader>
        <CardBody>
          <Grid container>
            <Grid item xs={11}>
              <Transition questionData={this.props.feedbackTemplateInfo.dep_list} feedbacks={this.state.feedbacks} onFeedback={this.handleFeedback} onComplete={this.handleOnAutoComplete} />
            </Grid>
          </Grid>
        </CardBody>
        <CardFooter>
          <Button color="primary" simple size="lg" block onClick={this.props.onCancel.bind(this)}>
            Cancel
          </Button>
          <Button color="primary" simple size="lg" block onClick={this.props.onSubmit.bind(this, this.state.feedbacks)}>
            Next
          </Button>
        </CardFooter>
      </Card>
    );
  }
}


PatientFeedback.propTypes = {
  feedbackCategory: PropTypes.number.isRequired,
  feedbackTemplateInfo: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PatientFeedback;
