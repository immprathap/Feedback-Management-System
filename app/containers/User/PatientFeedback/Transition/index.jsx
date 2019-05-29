import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ReactPageScroller from "react-page-scroller";
import GetFeedback from './GetFeedback';

// messages
import messages_departments from 'containers/User/messages_departments';
import messages_questions from 'containers/User/messages_questions';

// styles
import transitionStyle from "assets/jss/material-dashboard-pro-react/containers/transitionStyle";

class Transition extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentDepartment: null,
      currentQuestion: null,
      totalQuestions: this.getTotalQuestions(),
      questionsVisited:[1]
    }
  }

  getTotalQuestions=()=>{
    let tempLength=0;
    const {questionData}=this.props;
    for (let i=0;i<this.props.questionData.length;i++) {
      tempLength+=questionData[i].q_list.length
    }
    return tempLength;
  }

  getCategoryByQuestionIndex=(questionIndex)=>{
    let tempLength=0;
    const {questionData}=this.props;
    for (let i=0;i<this.props.questionData.length;i++) {
      tempLength+=questionData[i].q_list.length
      if (tempLength>=questionIndex){
        return questionData[i].dep_name;
      }
    }
  }

  autoComplete=()=>{
    const {questionsVisited}=this.state;
    if (questionsVisited.length>=this.getTotalQuestions()) {
      this.props.onComplete();
      return true;
    }
    return false;
  }

  handleScroll = (componentIndex) => {
    this._pageScroller.goToPage(componentIndex);
  }

  handleOnFeedback = (index, department, questionId, feedback) => {
    this.props.onFeedback(department, questionId, feedback);
    this.autoComplete();
    this.handleScroll(index + 1);
  }

  handleDepartmentSelect = (department, questionIndex) => {
    this.handleScroll(questionIndex);
    this.setState({
      currentDepartment: department
    });
  }

  handleOnPageScroll=(currentQuestion)=>{
    let {questionsVisited}=this.state;
    questionsVisited.push(currentQuestion);
    this.setState({
      currentDepartment: this.getCategoryByQuestionIndex(currentQuestion),
    })
  }

  render() {
    const { currentDepartment } = this.state;
    const { classes } = this.props;
    
    let questions = [];
    let departmentNavList = [];
    let questionIndex = 0;
    this.props.questionData.map((department, departmentIndex) => {
      const tempQuestionIndex = questionIndex;
      departmentNavList.push(
        <li key={departmentIndex}>
          <a
            href={"#" + department.dep_name}
            data-number={departmentIndex + 1}
            className={!currentDepartment ? (departmentIndex === 0 ? "is-selected" : "") : (currentDepartment === department.dep_name ? "is-selected" : "")}
            onClick={e => {
              e.preventDefault();
              this.handleDepartmentSelect(department.dep_name, tempQuestionIndex);
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label"><FormattedMessage {...messages_departments[department.dep_name] }/></span>
          </a>
        </li>);
      questions = questions.concat(department.q_list.map((question, departmentQuestionIndex) => {
        return (
          <Grid key={departmentQuestionIndex} container justify="center" direction="column" alignItems="stretch">
            <Grid item>
              <Typography align="center" variant="h5" >
                <FormattedMessage {...messages_questions[question.q]}/>
              </Typography>
            </Grid>
            <Grid className={classes.ratingGridItem} item>
              <GetFeedback ask={question.q} feedbacks={this.props.feedbacks} onFeedback={this.handleOnFeedback.bind(this, questionIndex++, department.dep_name)} />
            </Grid>
          </Grid>
        );
      }))
    });
    return (
      <div className="page-scroll-contain" >
        <ReactPageScroller pageOnChange={this.handleOnPageScroll} ref={c => this._pageScroller = c} animationTimer={400}>
          {questions}
        </ReactPageScroller>
        <nav id="cd-vertical-nav">
          <ul>
            {departmentNavList}
          </ul>
        </nav>
      </div>
    );
  }
}

Transition.propTypes = {
  questionData: PropTypes.arrayOf(PropTypes.object).isRequired,
  feedbacks: PropTypes.object.isRequired,
  onFeedback: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default withStyles(transitionStyle)(Transition);
