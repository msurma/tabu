import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge/Badge";
import DoneIcon from "@material-ui/icons/Done";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import Divider from "@material-ui/core/Divider/Divider";

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class PlayersList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper>
                <div className={classes.root}>
                    <List component="nav" subheader={<ListSubheader>Lista graczy</ListSubheader>}>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Surma" />
                            <ListItemSecondaryAction>
                                <IconButton variant="fab" style={{margin:'0px 10px'}} mini color="primary">
                                    <Tooltip title="Kliknij, jeżeli gracz odgadł hasło">
                                        <DoneIcon/>
                                    </Tooltip>
                                </IconButton>
                            </ListItemSecondaryAction>
                            <Typography>24 pkt</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Player1" />
                            <Typography>22 pkt</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <Tooltip title="Gracz tłumaczy hasło">
                                    <Badge color="secondary" badgeContent="T">
                                        <ListItemText primary="Player2" />
                                    </Badge>
                                </Tooltip>
                            </ListItemText>
                            <Typography>16 pkt</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Player3" />
                            <Typography>11 pkt</Typography>
                        </ListItem>
                    </List>
                </div>
            </Paper>
        );
    }
}

PlayersList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayersList);