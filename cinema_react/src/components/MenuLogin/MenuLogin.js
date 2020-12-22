import React, { Component } from "react";
import { MenuItem, Button, Menu } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

class MenuLogin extends Component {
  state = {
    anchorEl: false,
    name: 'Vyy Pii',
  };

  handleClose = () => {
    this.setState({ anchorEl: false });
  };

  handleClick = () => {
    this.setState({ anchorEl: true });
  };
  render() {
    return (
      <div className='d-flex'>
        <Avatar>V</Avatar>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        //   variant="contained"
          color="primary"
        >
          {this.state.name}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Shopping</MenuItem>
          <MenuItem onClick={this.handleClose}>Seen History</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default MenuLogin;
