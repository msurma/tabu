import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from './MenuBar';
import Board from './Board';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    mainContent: {
        flexGrow: 1,
        fontFamily: 'Roboto, sans-serif',
        padding: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 4}px`,
    },
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar />
                <main className={classes.mainContent}>
                    <Board />
                </main>
            </React.Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App)