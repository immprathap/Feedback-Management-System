import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Select2 from 'react-select';
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
      location:"",
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
        // this.setState({ locationState: "error" });
        this.setState({ unameState: "error" });
        this.makeSlide({
          activeStep: 1,
          slideDirection: "right"
        });
        break;
      }
      case 'next': {
        var nextFlag=1;
        if(this.state.unameState!=="success") {
          this.setState({ unameState: "error" });
          nextFlag=0;
        }
        // if(this.state.locationState!=="success") {
        //   this.setState({ locationState: "error" });
        //   nextFlag=0;
        // }
        if(nextFlag===1){
        this.makeSlide({
          activeStep: 2,
          slideDirection: "left"
        });
        }
        break;
      }
      case 'login': {
        var loginFlag=1;
        if(this.state.pwordState!=="success") {
          this.setState({ pwordState: "error" });
          loginFlag=0;
        }
        if(loginFlag===1){
          this.props.history.push('/user/feedback_category');
        }
        
        break;
      }
    }
  }

  handleModeChange = (event) => {
    this.setState({ mode: event.target.value });
  }

  verifyLength(value, length) {
    if (value.length >= length) {
        return true;
    }
    return false;
  }

  handleOnChangeLocation = (field,objValue) => {
    this.setState({
      [field]: objValue
    })
    if (this.verifyLength(objValue.value, 2)) {
          this.setState({ [field + "State"]: "success" });
      } else {
          this.setState({ [field + "State"]: "error" });
      }  
  }

  handleOnChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    })
    if (this.verifyLength(event.target.value, 2)) {
          this.setState({ [field + "State"]: "success" });
      } else {
          this.setState({ [field + "State"]: "error" });
      }  
  }
  onClickRegion = (selectedLocation) => {
    this.setState({
      location: selectedLocation.target.value
    });
  }

  render() {
    const { classes } = this.props;
    const { activeStep, slideDirection, mode, uname, pword, location } = this.state;
    console.log(location);
    const options = [
      { value: 'Delhi', label: 'Delhi' },
      { value: 'Chennai', label: 'Chennai' },
      { value: 'Mumbai', label: 'Mumbai' }
    ]
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
                // success: this.state.unameState === "success",
                error: this.state.unameState === "error",
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
            {/* <FormControl fullWidth>
            <InputLabel classes={{root: classes.inputLabel}} htmlFor="location-l">Select The Location</InputLabel>
            <Select
              //  style={{ width: "300px" }}
              fullWidth
              // success= {this.state.locationState === "success"}
              error= {this.state.locationState === "error"}
              value={location?location:''}
              inputProps={{
                name: 'location',
                id: 'location-l',
              }}
              // onChange={this.onClickRegion.bind(this)}
              onChange= {this.handleOnChange.bind(this, "location")}
              >
            <MenuItem value={"Delhi"}>Delhi</MenuItem>
            <MenuItem value={"Chennai"}>Chennai</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
            </Select>
            </FormControl> */}
            <br></br>
            <Select2
                defaultValue={options[1]}
                options={options}
                className={this.state.locationState === "success"?classes.locationGreen:this.state.locationState === "error"?
                classes.locationRed:classes.location}
                placeholder="Select the Location"
                value={location?location:''}
                onChange= {this.handleOnChangeLocation.bind(this, "location")}
              />
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
                type: "password",
                // success: this.state.pwordState === "success",
                error: this.state.pwordState === "error",
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
                disabled
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