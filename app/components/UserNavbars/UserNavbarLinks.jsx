import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Menu from '@material-ui/core/Menu';

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";


// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import userNavbarLinksStyle from "assets/jss/material-dashboard-pro-react/components/userNavbarLinksStyle.jsx";

class UserNavbarLinks extends React.Component {
  state = {
    open: false,
    logoutClick:null
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOnLogoutClick = (event) => {
    this.setState({ logoutClick: event.currentTarget });
  }
  handleOnLogoutClose = () => {
    this.setState({ logoutClick: null });
  }
  handleLogout = () => {
    window.location.href = '/auth/login';
  }
  
  render() {
    const { classes, rtlActive, userLocation } = this.props;
    const { open } = this.state;
    const searchButton =
      classes.top +
      " " +
      classes.searchButton +
      " " +
      classNames({
        [classes.searchRTL]: rtlActive
      });
    const dropdownItem = classNames(
      classes.dropdownItem,
      classes.primaryHover,
      { [classes.dropdownItemRTL]: rtlActive }
    );
    const wrapper = classNames({
      [classes.wrapperRTL]: rtlActive
    });
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div className={wrapper}>
      
        {/*<CustomInput
          rtlActive={rtlActive}
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: rtlActive ? "بحث" : "Search",
            inputProps: {
              "aria-label": rtlActive ? "بحث" : "Search",
              className: classes.searchInput
            }
          }}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={searchButton}
        >
          <Search
            className={classes.headerLinksSvg + " " + classes.searchIcon}
          />
        </Button>
        <Button
          color="transparent"
          simple
          aria-label="Dashboard"
          justIcon
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
        >
          <Dashboard
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {rtlActive ? "لوحة القيادة" : "Dashboard"}
            </span>
          </Hidden>
        </Button>
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={open ? "menu-list" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
            muiClasses={{
              label: rtlActive ? classes.labelRTL : ""
            }}
            buttonRef={node => {
              this.anchorEl = node;
            }}
          >
            <Notifications
              className={
                classes.headerLinksSvg +
                " " +
                (rtlActive
                  ? classes.links + " " + classes.linksRTL
                  : classes.links)
              }
            />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <span onClick={this.handleClick} className={classes.linkText}>
                {rtlActive ? "إعلام" : "Notification"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !open,
              [classes.pooperResponsive]: true,
              [classes.pooperNav]: true
            })}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "إجلاء أوزار الأسيوي حين بل, كما"
                          : "Mike John responded to your email"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "شعار إعلان الأرضية قد ذلك"
                          : "You have 5 new tasks"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "ثمّة الخاصّة و على. مع جيما"
                          : "You're now friend with Andrew"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive ? "قد علاقة" : "Another Notification"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive ? "قد فاتّبع" : "Another One"}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
                        </div>*/}
          <GridContainer justify="center">
          <GridItem xs={6} sm={6} md={6}>
          <h4>{userLocation}</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={6}>
        <Button
          color="transparent"
          aria-label="Person"
          justIcon
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
          aria-owns={this.state.logoutClick ? 'menu-id' : undefined}
          aria-haspopup="true"
          onClick={this.handleOnLogoutClick.bind(this)}
        >
          <Menu id="menu-id" anchorEl={this.state.logoutClick} open={Boolean(this.state.logoutClick)} onClose={this.handleOnLogoutClose.bind(this)}>
            <MenuItem onClick={this.handleLogout.bind(this)}>Logout</MenuItem>
          </Menu>
          <Person
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>
              {rtlActive ? "الملف الشخصي" : "Profile"}
            </span>
          </Hidden>
        </Button>
        </GridItem>
        </GridContainer>
      </div>
    );
  }
}

UserNavbarLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  rtlActive: PropTypes.bool
};

export default withStyles(userNavbarLinksStyle)(UserNavbarLinks);
