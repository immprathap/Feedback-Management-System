import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// i18
import { FormattedMessage } from 'react-intl';

import commentBoxStyle from "assets/jss/material-dashboard-pro-react/components/commentBoxStyle.jsx";

class CommentBox extends React.Component {
  state = {
    value: ''
  };
  
  handleChange=(event)=> {
    this.setState({
      value: event.target.value
  });
  };
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="space-around">
        <GridItem xs={12} sm={10} md={10}>
        <TextField
        id="outlined-multiline-static"
        label="Add Comments"
        multiline
        fullWidth
        rows="4"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <br></br>
        <FormControl component="fieldset" className={classes.formControl}>
        {/*<FormLabel component="legend">Options</FormLabel>*/}
        <RadioGroup
          aria-label="gender"
          name="gender2"
          className={classes.group}
          value={this.state.value}
          onChange={this.handleChange}
        >
        {this.props.options.map((comment, i) => {
          return(
          <FormControlLabel
              value={<FormattedMessage {...this.props.messages[comment]} />}
              control={<Radio color="primary" />}
              label={<FormattedMessage {...this.props.messages[comment]} />}
              labelPlacement="start"
            />
          )
        })}
          
        </RadioGroup>
      </FormControl>
      <br></br>
      {this.props.button}
      </GridItem>
      </GridContainer>
      </div>
      
      
    );
  }
}

CommentBox.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};


export default withStyles(commentBoxStyle)(CommentBox);
