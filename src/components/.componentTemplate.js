import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

class XXX extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>

            </div>
        );
    }
}

XXX.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(XXX);