import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";


// core components


// core views
import Dashboard from "./Dashboard";


import adminHomeStyle from "assets/jss/material-dashboard-pro-react/containers/adminHomeStyle.jsx";



class Admin extends React.Component {
    state = {
        
    }


    render() {
        const { classes } = this.props;

        return (
            <div>
                    {Dashboard}
                </div>
           
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(adminHomeStyle)(Admin);
