import React from "react";
import PropTypes from "prop-types";
import ReactPageScroller from "react-page-scroller";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GetFeedback from './GetFeedback'

class Transition extends React.Component {

  handleScroll = (componentIndex) => {
    this._pageScroller.goToPage(componentIndex);
  }

  handleOnFeedback = (index, category, questionId, feedback) => {
    this.props.onFeedback(category, questionId, feedback);
    this.handleScroll(index + 1);
  }
  
  render() {
    let questions = [];
    let questionIndex=0;
    this.props.questionData.map((category) => {
      questions = questions.concat(category.questions.map((question, categoryQuestionIndex) => {
        return (
          <Grid key={categoryQuestionIndex} container justify="center" direction="column" alignItems="stretch">
            <Grid item>
              <Typography align="center" variant="h5" >
                {question.label}
              </Typography>
            </Grid>
            <Grid item>
              <GetFeedback ask={question} feedbacks={this.props.feedbacks} onFeedback={this.handleOnFeedback.bind(this,questionIndex++, category)} />
            </Grid>
          </Grid>
        );
      }))
    });

    return (
      <div className="demo-page-contain" >
        <ReactPageScroller ref={c => this._pageScroller = c} animationTimer={400}>
          {questions}
        </ReactPageScroller>
      </div>
    );
  }
}

Transition.propTypes = {
  questionData: PropTypes.arrayOf(PropTypes.object).isRequired,
  feedbacks: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default Transition;
