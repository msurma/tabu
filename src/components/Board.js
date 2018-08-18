import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "./board/Card";
import Controls from "./board/Controls";
import PlayersList from "./board/PlayersList";

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Board extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={40} justify="space-evenly">
                    <Grid item xs={10} md={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={10} md={3}>
                        <Controls />
                    </Grid>
                    <Grid item xs={10} md={3}>
                        <PlayersList/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Board.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Board);