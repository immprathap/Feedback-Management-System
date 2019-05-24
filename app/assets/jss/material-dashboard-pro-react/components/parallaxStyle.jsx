import {
  blackColor,
  primaryColor,
  roseColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.jsx";

const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "100px 0 0 0",
    border: "0",
    //display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": {
      background: blackColor
    },
    "&:after": {
      background:
        "linear-gradient(60deg," +
        primaryColor[4] +
        "," +
        primaryColor[5] +
        ")"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  roseColor: {
    "&:before": {
      background: blackColor
    },
    "&:after": {
      background:
        "linear-gradient(60deg," +
        roseColor[3] +
        "," +
        roseColor[4] +
        ")"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  darkColor: {
    "&:before": {
      background: blackColor
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  infoColor: {
    "&:before": {
      background: blackColor
    },
    "&:after": {
      background:
        "linear-gradient(60deg," +
        infoColor[6] +
        "," +
        infoColor[7] +
        ")"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  successColor: {
    "&:before": {
      background: blackColor
    },
    "&:after": {
      background:
        "linear-gradient(60deg," +
        successColor[6] +
        "," +
        successColor[7] +
        ")"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px"
  }
};

export default parallaxStyle;
