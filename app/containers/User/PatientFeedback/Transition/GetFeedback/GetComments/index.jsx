import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CommentBox from "components/CommentBox/CommentBox.jsx";


// messages
import messages from './messages';

import getCommentsStyle from "assets/jss/material-dashboard-pro-react/containers/getCommentsStyle.jsx";

class GetComments extends React.Component {
    state = {
        myComments: [],
    }

    handleOnSubmit(comment) {
        
      }

    render() {
        const { classes } = this.props;
        const commentsOption = [1,2,3];
        const myButton=(
            <GridContainer justify="space-around">
                <GridItem xs={12} sm={10} md={10}>
                <center><Button onClick={this.handleOnSubmit} color="warning">Add</Button></center>
                </GridItem>
            </GridContainer>
        )

        return (
            <CommentBox options={commentsOption}  messages={messages} button={myButton}/>
        );
    }
}

GetComments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(getCommentsStyle)(GetComments);