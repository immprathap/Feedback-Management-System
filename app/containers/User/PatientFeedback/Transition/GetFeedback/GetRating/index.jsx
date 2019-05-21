import React from "react";
import PropTypes from "prop-types";
import Rating from 'react-rating';
import { withStyles } from "@material-ui/core/styles";

import ratingStyle from "assets/css/containers/ratingStyle.css";

class GetRating extends React.Component {

    render() {
        return (
            <Rating {...this.props.props} />
        );
    }
}

GetRating.propTypes = {
    props: PropTypes.object.isRequired,
};

export default withStyles(ratingStyle)(GetRating);
