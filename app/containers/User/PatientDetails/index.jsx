import React from "react";
import PropTypes from "prop-types";

import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

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
import CardFooter from "components/Card/CardFooter.jsx";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import InfoIcon from "@material-ui/icons/Info";

import messages_patientdetails from "containers/User/messages_patientdetails"

import patientDetailsStyle from "assets/jss/material-dashboard-pro-react/containers/patientDetailsStyle.jsx";

class PatientInfo extends React.Component {
    state = {
        patentUHID: "",
        patentUHIDState: "",
        webPatientType: "ip",
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

    handleType = (event, stateKey, type) => {
        this.setState({
            [stateKey]: type
        });
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
            1: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[7]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[8]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[12]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[15]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "bedNumber", "length", 3),
                            type: "text"
                        },
                    }
                },
                {
                    type: "text",
                    id: <FormattedMessage {...messages_patientdetails[16]} />,
                    props: {
                        success: this.state.wardNameState === "success",
                        error: this.state.wardNameState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[16]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            2: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            3: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[12]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[14]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "physicianName", "text"),
                            type: "text"
                        },
                    }
                },
            ],
            4: {
                switchBy: this.state.webPatientType,
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
                            labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                            labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                            labelText: <FormattedMessage {...messages_patientdetails[3]} />,
                            inputProps: {
                                onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                                type: "text"
                            },
                        }
                    },
                    {
                        type: "options",
                        id: "patient_type",
                        label: <FormattedMessage {...messages_patientdetails[4]} />,
                        options: [
                            {
                                label: <FormattedMessage {...messages_patientdetails[5]} />,
                                props: {
                                    checked: this.state.webPatientType === "ip",
                                    onChange: event => this.handleType(event, 'webPatientType', 'ip')
                                }
                            },
                            {
                                label: <FormattedMessage {...messages_patientdetails[6]} />,
                                props: {
                                    checked: this.state.webPatientType === "op",
                                    onChange: event => this.handleType(event, 'webPatientType', 'op')
                                }
                            }
                        ]
                    },
                    {
                        type: "date",
                        id: "admission_date",
                        onChange: this.handleOnChange,
                        label: this.props.intl.formatMessage(messages_patientdetails[7]),
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
                        label: this.props.intl.formatMessage(messages_patientdetails[8]),
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
                            labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                            labelText: <FormattedMessage {...messages_patientdetails[12]} />,
                            inputProps: {
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
                            labelText: <FormattedMessage {...messages_patientdetails[15]} />,
                            inputProps: {
                                onChange: event => this.handleOnChange(event, "bedNumber", "length", 3),
                                type: "text"
                            },
                        }
                    },
                    {
                        type: "text",
                        id: <FormattedMessage {...messages_patientdetails[16]} />,
                        props: {
                            success: this.state.wardNameState === "success",
                            error: this.state.wardNameState === "error",
                            formControlProps: {
                                fullWidth: true
                            },
                            labelText: <FormattedMessage {...messages_patientdetails[16]} />,
                            inputProps: {
                                onChange: event => this.handleOnChange(event, "wardName", "length", 3),
                                type: "text"
                            },
                        }
                    },
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
                            labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                            labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                            labelText: <FormattedMessage {...messages_patientdetails[3]} />,
                            inputProps: {
                                onChange: event => this.handleOnChange(event, "contactNumber", "length", 0),
                                type: "text"
                            },
                        }
                    },
                    {
                        type: "options",
                        id: "patient_type",
                        label: <FormattedMessage {...messages_patientdetails[4]} />,
                        options: [
                            {
                                label: <FormattedMessage {...messages_patientdetails[5]} />,
                                props: {
                                    checked: this.state.webPatientType === "ip",
                                    onChange: event => this.handleType(event, 'webPatientType', 'ip')
                                }
                            },
                            {
                                label: <FormattedMessage {...messages_patientdetails[6]} />,
                                props: {
                                    checked: this.state.webPatientType === "op",
                                    onChange: event => this.handleType(event, 'webPatientType', 'op')
                                }
                            }
                        ]
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
                            labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                            labelText: <FormattedMessage {...messages_patientdetails[13]} />,
                            inputProps: {
                                onChange: event => this.handleOnChange(event, "employeeName", "text"),
                                type: "text"
                            },
                        }
                    },
                ]
            },
            5: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            6: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            7: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            8: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            9: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ],
            10: [
                {
                    type: "text",
                    id: "patient_uhid",
                    props: {
                        success: this.state.patientUHIDState === "success",
                        error: this.state.patientUHIDState === "error",
                        formControlProps: {
                            fullWidth: true
                        },
                        labelText: <FormattedMessage {...messages_patientdetails[1]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[2]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[3]} />,
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
                    label: this.props.intl.formatMessage(messages_patientdetails[9]),
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
                    label: this.props.intl.formatMessage(messages_patientdetails[10]),
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
                        labelText: <FormattedMessage {...messages_patientdetails[11]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[13]} />,
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
                        labelText: <FormattedMessage {...messages_patientdetails[17]} />,
                        inputProps: {
                            onChange: event => this.handleOnChange(event, "eCode", "text"),
                            type: "text"
                        },
                    }
                }
            ]
        };

        const controlsByCategory = Object.keys(formFields[feedbackCategory]).includes("switchBy") ? formFields[feedbackCategory][formFields[feedbackCategory].switchBy] : formFields[feedbackCategory];

        const formControls = controlsByCategory.map((fieldInfo, i) => {
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
            } else if (fieldInfo.type === 'options') {
                return (
                    <GridItem key={i} xs={12} sm={10}>
                        {fieldInfo.options.map((option) => {
                            return (
                                <FormControlLabel
                                    control={
                                        <Radio
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
                                            {...option.props}
                                        />
                                    }
                                    classes={{
                                        root: classes.FormControlLabel
                                    }}
                                    label={option.label}
                                />);
                        })}
                    </GridItem>
                )
            }
        })


        return (
            <GridContainer justify="space-around" >
                <GridItem xs={12} sm={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <InfoIcon />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>Patient Details</h4>
                        </CardHeader>
                        <CardBody>
                            <form>
                                <GridContainer alignItems="center" justify="space-evenly">
                                    {formControls}
                                </GridContainer>
                            </form>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" simple size="lg" block onClick={this.props.onCancel.bind(this)}>
                                Cancel
                            </Button>
                            <Button color="primary" simple size="lg" block onClick={this.props.onSubmit.bind(this)}>
                                Next
                            </Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer >
        );
    }
}

PatientInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    feedbackCategory: PropTypes.number.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default withStyles(patientDetailsStyle)(injectIntl(PatientInfo));
