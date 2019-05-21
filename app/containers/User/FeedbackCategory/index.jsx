import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Paper from '@material-ui/core/Paper';

// i18
import { FormattedMessage } from 'react-intl';
// messages
import messages from './messages';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PanelCard from "components/Card/PanelCard.jsx";

// icons
import { Search as SearchIcon, Security as SecurityIcon, Cloud as ColudIcon, LibraryBooks as LibraryIcon } from "@material-ui/icons";
import { /*FaBed as InpatientIcon, */FaSalesforce as SalesForceIcon, FaUsers as UsersIcon, FaUsersCog as UserSettingsIcon, FaGlobe as WebIcon } from 'react-icons/fa';
import {IoIosWalk as OutpatientIcon, IoMdBed as InpatientIcon} from "react-icons/io"

import feedbackCategoryStyle from "assets/jss/material-dashboard-pro-react/views/feedbackCategoryStyle.jsx";

class FeedbackCategory extends React.Component {
    state = {
        expandedPanels: {
            getstarted: true,
            scmusers: true
        }
    }

    handleExpansionPanelChange = panel => (event, expanded) => {
        var expandedPanels = this.state.expandedPanels;
        expandedPanels[panel] = expanded
        this.setState({
            expandedPanels
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <GridContainer justify="space-around">
                <GridItem xs={12} sm={10} md={10}>
                    <Paper className={classes.categoryPaper} elevation={1}>
                        <GridContainer justify="space-around">
                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <InpatientIcon className={classes.faIconBig} classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    panelColor="info"
                                    title={<FormattedMessage {...messages.InPatient} />}
                                    text={
                                        <span className={classes.panelCardDescription}>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, /*messages.InPatient*/"ip")}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <OutpatientIcon className={classes.faIconBig} classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    panelColor="danger"
                                    title={<FormattedMessage {...messages.OutPatient} />}
                                    text={
                                        <span>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, /*messages.OutPatient*/"op")}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <SalesForceIcon className={classes.faIconBig} classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    panelColor="success"
                                    title={<FormattedMessage {...messages.SalesForce} />}
                                    text={
                                        <span>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, /*messages.SalesForce.id*/"sf")}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <WebIcon classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    panelColor="warning"
                                    title={<FormattedMessage {...messages.Website} />}
                                    text={
                                        <span>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, "wf")}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="space-around">
                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <UsersIcon className={classes.panelCardFaIcon} />
                                    }
                                    hover
                                    panelColor="rose"
                                    title={<FormattedMessage {...messages.Frontline} />}
                                    text={
                                        <span>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, /*messages.Frontline.id*/"fl")}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <UserSettingsIcon className={classes.panelCardFaIcon} />
                                    }
                                    hover
                                    panelColor="primary"
                                    title={<FormattedMessage {...messages.PersonalizedHealthCheck} />}
                                    text={
                                        <span>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, /* messages.PersonalizedHealthCheck.id */"phc")}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <UserSettingsIcon className={classes.panelCardFaIcon} />
                                    }
                                    hover
                                    panelColor="warning"
                                    title={<FormattedMessage {...messages.EmployeeUsingHospitalServices} />}
                                    text={
                                        <span>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, /* messages.EmployeeUsingHospitalServices.id */"euhs")}
                                />
                            </GridItem>

                            <GridItem xs={12} sm={4} md={2}>
                                <PanelCard
                                    content={
                                        <UserSettingsIcon className={classes.panelCardFaIcon} />
                                    }
                                    hover
                                    panelColor="rose"
                                    title={<span><FormattedMessage {...messages.PostDischarge} /> / <FormattedMessage {...messages.CentralizedPostDischarge} /></span>}
                                    text={
                                        <span>

                                        </span>
                                    }
                                    onClick={this.props.onSelect.bind(this, /* messages.PostDischarge.id */"pd")}
                                />
                            </GridItem>
                        </GridContainer>
                    </Paper>
                </GridItem>
            </GridContainer>
        );
    }
}

FeedbackCategory.propTypes = {
    classes: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default withStyles(feedbackCategoryStyle)(FeedbackCategory);
