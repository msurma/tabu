import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Countdown from 'react-countdown-now';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Controls extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary">
                    Word of the Day
                    <Countdown date={Date.now() + 12000} renderer={Controls.countdownRenderer}/>
                </Typography>
            </Paper>
        );
    }

    static countdownRenderer(props) {
        if (props.total <= 10000) {
            return (<Typography color={"error"}>{props.minutes + ':' + props.seconds}</Typography>);
        }
        return props.minutes + ':' + props.seconds;
    };
}

Controls.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Controls);