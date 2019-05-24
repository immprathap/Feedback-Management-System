import React from "react";
import PropTypes from "prop-types";
// router
import { withRouter } from "react-router-dom";

// DateTime components
import {
    InlineDatePicker
} from "material-ui-pickers";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from '@material-ui/core/Paper';


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import InfoIcon from "@material-ui/icons/Info";

import feedbackCategoryStyle from "assets/jss/material-dashboard-pro-react/containers/feedbackCategoryStyle.jsx";

class PatientInfo extends React.Component {
    state = {
        patentUHID: "",
        patentUHIDState: ""
    }

    handleIPLeave = () => {

    }

    handleDateChange = () => {

    }

    // function that returns true if value is email, false otherwise
    verifyEmail(value) {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    }
    // function that verifies if a string has a given length or not
    verifyLength(value, length) {
        if (value.length >= length) {
            return true;
        }
        return false;
    }
    // function that verifies if two strings are equal
    compare(string1, string2) {
        if (string1 === string2) {
            return true;
        }
        return false;
    }
    // function that verifies if value contains only numbers
    verifyNumber(value) {
        var numberRex = new RegExp("^[0-9]+$");
        if (numberRex.test(value)) {
            return true;
        }
        return false;
    }
    // verifies if value is a valid URL
    verifyUrl(value) {
        try {
            new URL(value);
            return true;
        } catch (_) {
            return false;
        }
    }

    handleOnChange = (event, stateName, type, stateNameEqualTo, maxValue) => {
        switch (type) {
            case "email":
                if (this.verifyEmail(event.target.value)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "password":
                if (this.verifyLength(event.target.value, 1)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "equalTo":
                if (this.compare(event.target.value, this.state[stateNameEqualTo])) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "checkbox":
                if (event.target.checked) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "number":
                if (this.verifyNumber(event.target.value)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "length":
                if (this.verifyLength(event.target.value, stateNameEqualTo)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "max-length":
                if (!this.verifyLength(event.target.value, stateNameEqualTo + 1)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "url":
                if (this.verifyUrl(event.target.value)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "min-value":
                if (
                    this.verifyNumber(event.target.value) &&
                    event.target.value >= stateNameEqualTo
                ) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "max-value":
                if (
                    this.verifyNumber(event.target.value) &&
                    event.target.value <= stateNameEqualTo
                ) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            case "range":
                if (
                    this.verifyNumber(event.target.value) &&
                    event.target.value >= stateNameEqualTo &&
                    event.target.value <= maxValue
                ) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            default:
                break;
        }
        switch (type) {
            case "checkbox":
                this.setState({ [stateName]: event.target.checked });
                break;
            default:
                this.setState({ [stateName]: event.target.value });
                break;
        }
    }



    render() {

        const { classes, feedbackCategory } = this.props;
        const formFields = {
            ip: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "date",
                    id: "admission_date",
                    onChange: this.handleOnChange,
                    label: "Admission date",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "discharge_date",
                    label: "Discharge date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "dob",
                    onChange: this.handleOnChange,
                    label: "Date of birth",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "anniversary_date",
                    label: "Anniversary date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "ip_number",
                    onChange: this.handleOnChange,
                    onLeave: this.handleIPLeave,
                    isMandatory: true,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "IP number",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "employee_name",
                    props: {
                        success: this.state.employeeNameState === "success",
                        error: this.state.employeeNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Employee name",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "employeeName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "bed_number",
                    props: {
                        success: this.state.bedNumberState === "success",
                        error: this.state.bedNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Bed number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "bedNumber", "length", 3),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "ward_name",
                    props: {
                        success: this.state.wardNameState === "success",
                        error: this.state.wardNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Ward name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "wardName", "length", 3),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "e_code",
                    props: {
                        success: this.state.eCodeState === "success",
                        error: this.state.eCodeState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "E-Code *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            op: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "date",
                    id: "dob",
                    onChange: this.handleOnChange,
                    label: "Date of birth",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "anniversary_date",
                    label: "Anniversary date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "employee_name",
                    props: {
                        success: this.state.employeeNameState === "success",
                        error: this.state.employeeNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Employee name",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "employeeName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "e_code",
                    props: {
                        success: this.state.eCodeState === "success",
                        error: this.state.eCodeState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "E-Code *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            sf: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "ip_number",
                    onChange: this.handleOnChange,
                    onLeave: this.handleIPLeave,
                    isMandatory: true,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "IP number",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "physician_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Physician name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "physicianName", "text"),
                            type: "text"
                        },
                    }
                },
            ],
            wf: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "date",
                    id: "dob",
                    onChange: this.handleOnChange,
                    label: "Date of birth",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "anniversary_date",
                    label: "Anniversary date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "employee_name",
                    props: {
                        success: this.state.employeeNameState === "success",
                        error: this.state.employeeNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Employee name",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "employeeName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "e_code",
                    props: {
                        success: this.state.eCodeState === "success",
                        error: this.state.eCodeState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "E-Code *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            fl: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "date",
                    id: "dob",
                    onChange: this.handleOnChange,
                    label: "Date of birth",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "anniversary_date",
                    label: "Anniversary date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "employee_name",
                    props: {
                        success: this.state.employeeNameState === "success",
                        error: this.state.employeeNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Employee name",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "employeeName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "e_code",
                    props: {
                        success: this.state.eCodeState === "success",
                        error: this.state.eCodeState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "E-Code *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            phc: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "date",
                    id: "dob",
                    onChange: this.handleOnChange,
                    label: "Date of birth",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "anniversary_date",
                    label: "Anniversary date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "employee_name",
                    props: {
                        success: this.state.employeeNameState === "success",
                        error: this.state.employeeNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Employee name",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "employeeName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "e_code",
                    props: {
                        success: this.state.eCodeState === "success",
                        error: this.state.eCodeState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "E-Code *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            euhs: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "date",
                    id: "dob",
                    onChange: this.handleOnChange,
                    label: "Date of birth",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "anniversary_date",
                    label: "Anniversary date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "employee_name",
                    props: {
                        success: this.state.employeeNameState === "success",
                        error: this.state.employeeNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Employee name",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "employeeName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "e_code",
                    props: {
                        success: this.state.eCodeState === "success",
                        error: this.state.eCodeState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "E-Code *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            pd: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient UHID *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientUHID", "length", 3),
                            type: "text",
                        },
                    }
                },
                {
                    type: "text",
                    id: "patient_name",
                    props: {
                        success: this.state.patientNameState === "success",
                        error: this.state.patientNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient name *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "patientName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "contact_number",
                    props: {
                        success: this.state.contactNumberState === "success",
                        error: this.state.contactNumberState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Contact number",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                            type: "text"
                        },
                    }
                },
                {
                    type: "date",
                    id: "dob",
                    onChange: this.handleOnChange,
                    label: "Date of birth",
                    isMandatory: false,
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "date",
                    id: "anniversary_date",
                    label: "Anniversary date",
                    props: {
                        disableFuture: true,
                        keyboard: true,
                        clearable: true,
                        fullWidth: true,
                        onChange: this.handleDateChange
                    }
                },
                {
                    type: "text",
                    id: "patient_email",
                    onChange: this.handleOnChange,
                    isMandatory: false,
                    props: {
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Patient email",
                        inputProps: {
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "employee_name",
                    props: {
                        success: this.state.employeeNameState === "success",
                        error: this.state.employeeNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "Employee name",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "employeeName", "text"),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: "e_code",
                    props: {
                        success: this.state.eCodeState === "success",
                        error: this.state.eCodeState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: "E-Code *",
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ]
        };

        return (
            <GridContainer justify="space-around">
                <GridItem xs={12} sm={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <InfoIcon />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>Stacked Form</h4>
                        </CardHeader>
                        <CardBody>
                            <form>
                                <GridContainer alignItems="center" justify="space-evenly">
                                    {formFields[feedbackCategory].map((fieldInfo, i) => {
                                        if (fieldInfo.type === 'text') {
                                            return (
                                                <GridItem key={i} xs={12} sm={10}>
                                                    <CustomInput
                                                        {...fieldInfo.props}
                                                    />
                                                </GridItem>
                                            );
                                        } else if (fieldInfo.type === 'date') {
                                            return (
                                                <GridItem key={i} xs={12} sm={10}>
                                                    <InlineDatePicker value={null} placeholder={fieldInfo.label} {...fieldInfo.props} />
                                                </GridItem>
                                            );
                                        }
                                    })
                                    }

                                    <GridItem xs={3}>
                                        <Button fullWidth color="primary" onClick={this.props.onSubmit} type="button" >Next</Button>
                                    </GridItem>
                                </GridContainer>
                            </form>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

PatientInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    feedbackCategory: PropTypes.oneOf(["ip", "op", "sf"]).isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default withStyles(feedbackCategoryStyle)(PatientInfo);
