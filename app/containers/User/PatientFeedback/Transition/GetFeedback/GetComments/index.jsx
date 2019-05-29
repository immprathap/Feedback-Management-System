import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CommentBox from "components/CommentBox/CommentBox.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

//@material-ui/icons
import InfoIcon from "@material-ui/icons/Info";

// messages
import messages_comment_types from 'containers/User/messages_comment_types';

import getCommentsStyle from "assets/jss/material-dashboard-pro-react/containers/getCommentsStyle.jsx";

class GetComments extends React.Component {
    state = {
        comments: "",
        commentType: ""
    }

    handleChange = (field, event) => {
        this.setState({
            [field]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;
        const { comments, commentType } = this.state;
        return (
            <GridContainer justify="space-around" >
                <GridItem xs={12} sm={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <InfoIcon />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>Feedback Comments</h4>
                        </CardHeader>
                        <CardBody>

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
                                onChange={this.handleChange.bind(this, 'comments')}
                            />
                            <br></br>
                            <FormControl component="fieldset" className={classes.formControl}>
                                {/*<FormLabel component="legend">Options</FormLabel>*/}
                                <RadioGroup
                                    aria-label="commenttype"
                                    name="commenttype"
                                    className={classes.group}
                                    value={commentType}
                                    onChange={this.handleChange.bind(this, 'commentType')}
                                >
                                    <ul style={{listStyle: "none"}}>
                                    {this.props.commentTypes.map((commentType, i) => {
                                        return (
                                            <li key={i} style={{display:"inline-block"}}>
                                            <FormControlLabel
                                                value={commentType.toString()}
                                                control={<Radio color="primary" />}
                                                label={<FormattedMessage {...messages_comment_types[commentType]} />}
                                                labelPlacement="end"
                                            />
                                            </li>
                                        )
                                    })}
                                    </ul>
                                </RadioGroup>
                            </FormControl>
                        </CardBody>
                        <CardFooter className={classes.justifyContentCenter}>
                            <Button color="primary" simple size="lg" block onClick={this.props.onCancel.bind(this)}>
                                Cancel
                            </Button>
                            <Button color="primary" simple size="lg" block onClick={this.props.onSubmit.bind(this, { comments, commentType })}>
                                Submit
                            </Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer >
        );
    }
}

GetComments.propTypes = {
    classes: PropTypes.object.isRequired,

    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(getCommentsStyle)(GetComments);