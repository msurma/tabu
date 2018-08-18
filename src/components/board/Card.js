import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
    paper: {
        color: theme.palette.text.secondary,
    },
    iconSmall: {
        width: '0.6em'
    }
});

class Card extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="Okoń" />
                        <StarIcon className={classes.iconSmall}/>
                        <StarIcon className={classes.iconSmall}/>
                        <StarIcon className={classes.iconSmall}/>
                        <StarIcon className={classes.iconSmall}/>
                        <StarBorderIcon className={classes.iconSmall}/>
                    </ListItem>
                </List>
                <Divider />
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="Ryba" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Szkło kontaktowe" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Pasta o wędkarzu" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Troll telewizyjny" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Podaję hasło" />
                    </ListItem>
                </List>
            </Paper>
        );
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);