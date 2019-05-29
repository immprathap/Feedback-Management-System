import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import GetRating from './GetRating';
import GetComments from './GetComments';
import Grid from '@material-ui/core/Grid';


import Tooltip from '@material-ui/core/Tooltip';
import rate1 from "assets/img/smileys/r1.png";
import rate1g from "assets/img/smileys/r1g.png";
import rate2 from "assets/img/smileys/r2.png";
import rate2g from "assets/img/smileys/r2g.png";
import rate3 from "assets/img/smileys/r3.png";
import rate3g from "assets/img/smileys/r3g.png";
import rate4 from "assets/img/smileys/r4.png";
import rate4g from "assets/img/smileys/r4g.png";
import rate5 from "assets/img/smileys/r5.png";
import rate5g from "assets/img/smileys/r5g.png";

import getFeedbackStyle from "assets/jss/material-dashboard-pro-react/containers/getFeedbackStyle.jsx"

class GetFeedback extends React.Component {


  handleFeedback = (questionId, feedback) => {
    this.props.onFeedback(questionId, feedback);
  }

  render() {
    const { ask, feedbacks, classes } = this.props;
    let askContent;

    switch (ask.type) {
      case 'rating': {
        askContent = <GetRating props={{
          stop: 5,
          initialRating: feedbacks[ask],
          onChange: this.handleFeedback.bind(this, ask),
          emptySymbol: [<img alt="poor" src={rate1g} className={classes.ratingImage} />, <img alt="Unsatisfied" src={rate2g} className={classes.ratingImage} />, <img alt="Satisfied" src={rate3g} className={classes.ratingImage} />, <img alt="Good" src={rate4g} className={classes.ratingImage} />, <img alt="Excellent" src={rate5g} className={classes.ratingImage} />],
          fullSymbol: [<Tooltip title="Poor"><img alt="Poor" src={rate1} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Unsatisfied"><img alt="Unsatisfied" src={rate2} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Satisfied"><img alt="Satisfied" src={rate3} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Good"><img alt="Good" src={rate4} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Excellent"><img alt="Excellent" src={rate5} className={classes.ratingImage} /></Tooltip>]
        }} />
        break;
      }
      case 'comment': {
        askContent = <GetComments label={ask.label} onFeedback={this.handleOnFeedback} />
        break;
      }
      default: {
        askContent = <GetRating props={{
          stop: 5,
          initialRating: this.props.feedbacks[ask],
          onChange: this.handleFeedback.bind(this, ask),
          emptySymbol: [<img alt="poor" src={rate1g} className={classes.ratingImage} />, <img alt="Unsatisfied" src={rate2g} className={classes.ratingImage} />, <img alt="Satisfied" src={rate3g} className={classes.ratingImage} />, <img alt="Good" src={rate4g} className={classes.ratingImage} />, <img alt="Excellent" src={rate5g} className={classes.ratingImage} />],
          fullSymbol: [<Tooltip title="Poor"><img alt="Poor" src={rate1} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Unsatisfied"><img alt="Unsatisfied" src={rate2} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Satisfied"><img alt="Satisfied" src={rate3} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Good"><img alt="Good" src={rate4} className={classes.ratingImage} /></Tooltip>, <Tooltip title="Excellent"><img alt="Excellent" src={rate5} className={classes.ratingImage} /></Tooltip>]
        }} />
      }
      break;
    }
    return (
          askContent
    );
  }
}

GetFeedback.propTypes = {
  ask: PropTypes.number.isRequired,
  feedbacks: PropTypes.object.isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default withStyles(getFeedbackStyle)(GetFeedback);
