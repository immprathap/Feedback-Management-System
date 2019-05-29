import React from "react";
import PropTypes from "prop-types";

import { toJS } from 'immutable';
import LocaleToggle from 'containers/LocaleToggle';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Paper from '@material-ui/core/Paper';

// i18
import { FormattedMessage } from 'react-intl';
// messages
import messages from '../messages_category';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PanelCard from "components/Card/PanelCard.jsx";

// icons
import { PhoneInTalk as PDIcon } from "@material-ui/icons";
import { /*FaBed as InpatientIcon, */FaSalesforce as SalesForceIcon, FaUsers as UsersIcon, FaUsersCog as UserSettingsIcon, FaGlobe as WebIcon, FaIdCardAlt as EHSIcon } from 'react-icons/fa';
import { IoIosWalk as OutpatientIcon, IoMdBed as InpatientIcon, IoIosMail as WRIcon } from "react-icons/io"
import {GoChecklist as PHCIcon} from "react-icons/go";
import feedbackCategoryStyle from "assets/jss/material-dashboard-pro-react/containers/feedbackCategoryStyle.jsx";

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

    getCategoryIcon = (category) => {
        const { classes } = this.props;
        switch (category) {
            case 1: return <InpatientIcon className={classes.faIconBig} classes={{ root: classes.panelCardIcon }} />
            case 2: return <OutpatientIcon className={classes.faIconBig} classes={{ root: classes.panelCardIcon }} />
            case 3: return <SalesForceIcon className={classes.faIconBig} classes={{ root: classes.panelCardIcon }} />
            case 4: return <WebIcon className={classes.faIconBig} classes={{ root: classes.panelCardIcon }} />
            case 5: return <PDIcon  classes={{ root: classes.panelCardIcon }} />
            case 6: return <UsersIcon className={classes.panelCardFaIcon} classes={{ root: classes.panelCardIcon }} />
            case 7: return <WRIcon className={classes.faIconBig} className={classes.panelCardFaIcon} />
            case 8: return <EHSIcon className={classes.panelCardFaIcon} />
            case 9: return <PHCIcon className={classes.panelCardFaIcon} />
            case 10: return <PDIcon  classes={{ root: classes.panelCardIcon }} />
            default: return <PHCIcon className={classes.panelCardFaIcon} />
        }
    };

    getCardColor = (category) => {
        switch (category) {
            case 1: return "primary";
            case 2: return "rose";
            case 3: return "success";
            case 4: return "info";
            case 5: return "danger";
            case 6: return "rose";
            case 7: return "warning";
            case 8: return "primary";
            case 9: return "success";
            default: return "info"
        };
    }

    render() {
        const { classes } = this.props;
        const categories = this.props.categories.toJS();


        let feedback_category_list_component = [];
        /*for (let i = 0; i < Math.ceil(categories.length / CATEGORIES_PER_ROW); i++) {
            feedback_category_list_component = feedback_category_list_component.concat(
                <GridContainer justify="space-around">*/
        feedback_category_list_component = categories.map((category, i) => {
            return (
                <GridItem key={i} xs={12} sm={4} md={3} lg={2}>
                    <PanelCard
                        content={
                            this.getCategoryIcon(category)
                        }
                        hover
                        panelColor={this.getCardColor(category)}
                        title={<FormattedMessage {...messages[category]} />}
                        text={
                            <span className={classes.panelCardDescription}>

                            </span>
                        }
                        onClick={this.props.onSelect.bind(this, category)}
                    />
                </GridItem>
            );
        })/*}
                </GridContainer>
            )
        }*/

        return (
            <GridContainer justify="space-around">
                <GridItem xs={12} sm={10} md={10}>
                    <Paper className={classes.categoryPaper} elevation={1}>
                        <GridContainer justify="space-around">
                        <GridContainer justify="flex-end" style={{marginBottom: "25px"}}>
                        <GridItem xs={2}><LocaleToggle style={{position: "absolute", top: "10px"}}/></GridItem>
                        </GridContainer>
                            {feedback_category_list_component}
                        </GridContainer>
                    </Paper>
                </GridItem>
            </GridContainer>
        );
    }
}

FeedbackCategory.propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default withStyles(feedbackCategoryStyle)(FeedbackCategory);
