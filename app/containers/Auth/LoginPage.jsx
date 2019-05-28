import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Helmet } from 'react-helmet';
// @material-ui/core components
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from '@material-ui/core/RadioGroup';
import Icon from "@material-ui/core/Icon";
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';//
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


// @material-ui/icons
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/containers/loginPageStyle.jsx";


const TRANSITION_INTERVAL = 800;
const TRANSITION_TIME = 600;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      isAdLogin: false,
      activeStep: 1,
      slideIn: true,
      slideDirection: "right",
      mode: "0",
      uname: "",
      pword: "",
      location:'',
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  makeSlide = (state) => {
    this.setState({
      slideIn: false,
    });
    setTimeout(() => {
      this.setState({
        slideIn: true,
        uname: "",
        pword: "",
        ...state
      })
    }, TRANSITION_INTERVAL)
  }

  handleAdToggle = (event) => {
    this.setState({
      isAdLogin: event.target.checked
    });
  }

  handleAction = (action) => {
    switch (action) {
      case 'back': {
        this.makeSlide({
          activeStep: 1,
          slideDirection: "right"
        });
        break;
      }
      case 'next': {
        this.makeSlide({
          activeStep: 2,
          slideDirection: "left"
        });
        break;
      }
      case 'login': {
        this.props.history.push('/user/feedback_category');
        break;
      }
    }
  }

  handleModeChange = (event) => {
    this.setState({ mode: event.target.value });
  }

  handleOnChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    })
  }
  onClickRegion = (selectedLocation) => {
    console.log("hi",selectedLocation.target.value );
    this.setState({
      location: selectedLocation.target.value
    });
  }

  render() {
    const { classes } = this.props;
    const { activeStep, slideDirection, mode, uname, pword } = this.state;

    // var selectOptions = [
    //   { value: "Delhi", label: "Delhi" },
    //   { value: "Chennai", label: "Chennai" },
    //   { value: "Mumbai", label: "Mumbai" },
    // ];
    const dropdownList=["Chennai", "Mumbai", "Delhi"];
    

    let stepContent;
    switch (activeStep) {
      case 1: {
        stepContent = (
          <CardBody>
            <CustomInput
              labelText="Username"
              id="username"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                autoFocus: true,
                onChange: this.handleOnChange.bind(this, "uname"),
                value: uname,
                onKeyPress: (ev) => {
                  if (ev.key === 'Enter') {
                    this.handleAction('next');
                    ev.preventDefault();
                  }
                },
                endAdornment: (
                  <Tooltip title="Next" aria-label="Next">
                    <InputAdornment position="end">
                      <IconButton aria-label="Login" onClick={this.handleAction.bind(this, 'next')}>
                        <NextIcon />
                      </IconButton>
                    </InputAdornment>
                  </Tooltip>
                )
              }}
            />
            <FormControl fullWidth>
            <InputLabel htmlFor="region-l">Select The Region</InputLabel>
            <Select
              //  style={{ width: "300px" }}
              fullWidth
              value={this.state.location?this.state.location:''}
              inputProps={{
                name: 'region',
                id: 'region-l',
              }}
              // onChange={value =>
              //   console.log("hi",this.state.location)
                
              // }
              onChange={this.onClickRegion.bind(this)}
              >
            <MenuItem value={"Delhi"}>Delhi</MenuItem>
            <MenuItem value={"Chennai"}>Chennai</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
            </Select>
            </FormControl>
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={this.handleAdToggle.bind(this)}
                  checked={this.state.isAdLogin}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Active Directory"
            />
          </CardBody>
        );
        break;
      }
      case 2: {
        stepContent = (
          <CardBody>

            <CustomInput
              labelText="Password"
              id="password"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: this.handleOnChange.bind(this, "pword"),
                value: pword,
                onKeyPress: (ev) => {
                  if (ev.key === 'Enter') {
                    this.handleAction('login');
                    ev.preventDefault();
                  }
                },
                endAdornment:
                  <Tooltip title="Next" aria-label="Next">
                    <InputAdornment position="end">
                      <IconButton aria-label="Login" onClick={this.handleAction.bind(this, 'login')}>
                        <NextIcon />
                      </IconButton>
                    </InputAdornment>
                  </Tooltip>
              }}
            />
            <RadioGroup aria-label="position" name="position" value={mode} onChange={this.handleModeChange.bind(this)} row>
              <FormControlLabel
                value="0"
                control={<Radio color="primary"
                  icon={
                    <FiberManualRecord
                      className={classes.radioUnchecked}
                    />
                  }
                  checkedIcon={
                    <FiberManualRecord
                      className={classes.radioChecked}
                    />
                  }
                  classes={{
                    checked: classes.radio,
                    root: classes.radioRoot
                  }}
                />}
                label="User"
                labelPlacement="end"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="primary"
                  icon={
                    <FiberManualRecord
                      className={classes.radioUnchecked}
                    />
                  }
                  checkedIcon={
                    <FiberManualRecord
                      className={classes.radioChecked}
                    />
                  }
                  classes={{
                    checked: classes.radio,
                    root: classes.radioRoot
                  }}
                />}
                label="Admin"
                labelPlacement="end"
              />
            </RadioGroup>
          </CardBody>
        );
        break;
      }
    };

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card style={{ overflow: "hidden" }} login className={classes[this.state.cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="info"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
              </CardHeader>

              <Slide direction={slideDirection} timeout={TRANSITION_TIME} in={this.state.slideIn} mountOnEnter={true} unmountOnExit={false}>
                {stepContent}
              </Slide>
              <CardFooter className={classes.justifyContentCenter}>
                {
                  activeStep === 2 ?
                    (
                      <Button color="info" simple size="lg" block onClick={this.handleAction.bind(this, 'back')}>
                        Back
                </Button>
                    ) : (
                      <Button color="info" simple size="lg" block onClick={this.handleAction.bind(this, 'next')}>
                        Next
                </Button>
                    )
                }
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(withRouter(LoginPage));