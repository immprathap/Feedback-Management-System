import { createMuiTheme } from '@material-ui/core/styles';
import Purple from "@material-ui/core/colors/purple";
import Grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#9c27b0' }, // #3f51b5
        secondary: { main: '#43A6DF' },
        pink: { main: '#e91e63' },
        warning: { main: '#ff9800' },
        danger: { main: '#f44336' },
        success: { main: '#4caf50' },
        info: { main: '#00acc1' },
        grey: { main: '#999999' },
    },
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiFormControl: {
            root: {
                paddingTop: "27px",
                margin: "0 !important"
            }
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: Purple[500],
            },
        },
        MuiPickersDay: {
            /*day: {
                color: Purple["500"],
            },*/
            isSelected: {
                backgroundColor: Purple["400"],
            },
            current: {
                color: Grey[50],
                backgroundColor: Grey["400"],
            },
        },
        MuiStepLabel: {
            label: {
                color: 'gray',
                '&$active': {
                    color: 'white',
                },
                '&$completed': {
                    color: 'gray',
                },
            },
        },
    },
});

export default theme;