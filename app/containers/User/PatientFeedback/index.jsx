import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoIcon from "@material-ui/icons/Info";

import Transition from './Transition';
import { Grid } from "material-ui";

class PatientFeedback extends React.Component {
  state = {
    feedbacks: [],
  };

  handleFeedback(category, questionId, feedback) {
    console.log('pf', category, questionId, feedback);
    var feedbacks = this.state.feedbacks;
    feedbacks[questionId] = feedback;
    this.setState({
      feedbacks: feedbacks,
    });
  }

  render() {
    const questionData = ([
      {
        category: "category-1", questionIndex: 1, questions: [
          { label: "Taking into account of all healthcare experiences that you have encountered, how satisfied are you with Apollo Hospitals?", type: "rating", id: '1LAPWE3', totalStars: 5 },
          { label: "Will you continue to choose Apollo Hospitals for your future health needs?", type: "rating", id: '9FLK2WK', totalStars: 5 }
        ]
      },
      {
        category: "category-2", questionIndex: 3, questions: [
          { label: "Would you recommend Apollo Hospitals to a friend or a family member?", type: "rating", id: 'WKE4DKD', totalStars: 4 },
          { label: "How would you like to rate our associates on meeting your personal preferences?", type: "rating", id: 'APOSId4', totalStars: 4 }
        ]
      },
      {
        category: "category-3", questionIndex: 5, questions: [
          { label: "Room FaCility1", type: "rating", id: 'RWQ49S2', totalStars: 3 },
          { label: "Room FaCility2", type: "rating", id: '4KKJ4KK', totalStars: 3 }
        ]
      },
      {
        category: "category-4", questionIndex: 1, questions: [
          { label: "Taking into account of all healthcare experiences that you have encountered, how satisfied are you with Apollo Hospitals?", type: "rating", id: '1LAPWE3', totalStars: 5 },
          { label: "Will you continue to choose Apollo Hospitals for your future health needs?", type: "rating", id: '9FLK2WK', totalStars: 5 }
        ]
      },
      {
        category: "category-5", questionIndex: 3, questions: [
          { label: "Would you recommend Apollo Hospitals to a friend or a family member?", type: "rating", id: 'WKE4DKD', totalStars: 4 },
          { label: "How would you like to rate our associates on meeting your personal preferences?", type: "rating", id: 'APOSId4', totalStars: 4 }
        ]
      },
      {
        category: "category-6", questionIndex: 5, questions: [
          { label: "Room FaCility1", type: "rating", id: 'RWQ49S2', totalStars: 3 },
          { label: "Room FaCility2", type: "rating", id: '4KKJ4KK', totalStars: 3 }
        ]
      },
      {
        category: "category-7", questionIndex: 1, questions: [
          { label: "Taking into account of all healthcare experiences that you have encountered, how satisfied are you with Apollo Hospitals?", type: "rating", id: '1LAPWE3', totalStars: 5 },
          { label: "Will you continue to choose Apollo Hospitals for your future health needs?", type: "rating", id: '9FLK2WK', totalStars: 5 }
        ]
      },
      {
        category: "category-8", questionIndex: 3, questions: [
          { label: "Would you recommend Apollo Hospitals to a friend or a family member?", type: "rating", id: 'WKE4DKD', totalStars: 4 },
          { label: "How would you like to rate our associates on meeting your personal preferences?", type: "rating", id: 'APOSId4', totalStars: 4 }
        ]
      },
      {
        category: "category-9", questionIndex: 5, questions: [
          { label: "Room FaCility1", type: "rating", id: 'RWQ49S2', totalStars: 3 },
          { label: "Room FaCility2", type: "rating", id: '4KKJ4KK', totalStars: 3 }
        ]
      },
    ])

    return (

      <Card>
        <CardHeader color="primary" icon>
          <CardIcon color="primary">
            <InfoIcon />
          </CardIcon>
          <h4>Stacked Form</h4>
        </CardHeader>
        <CardBody>
          <Grid container>
            <Grid item xs={11}>
              <Transition questionData={questionData} feedbacks={this.state.feedbacks} onFeedback={this.handleFeedback.bind(this)} />
            </Grid>
          </Grid>
        </CardBody>
      </Card>
    );
  }
}


PatientFeedback.propTypes = {
  feedbackCategory: PropTypes.oneOf(["ip", "op", "sf"]).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PatientFeedback;
