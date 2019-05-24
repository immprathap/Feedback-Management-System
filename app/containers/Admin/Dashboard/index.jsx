import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/containers/dashboardStyle.jsx";

class Dashboard extends React.Component {
    state = {
        
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
			</div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
