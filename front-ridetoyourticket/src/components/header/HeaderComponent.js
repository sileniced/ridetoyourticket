import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom"

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}


function ButtonAppBar(props) {
  const { classes: { root, grow, /* menubutton */ }, header: { title, hasJwt }, handleClick: { logout } } = props
  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton className={menuButton} color="inherit" aria-label="Menu">*/}
          {/*<MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography variant="h6" color="inherit" className={grow}>
            {title}
          </Typography>
          {hasJwt
            ? <Button color="inherit" onClick={logout}>Logout</Button>
            : <div>
              <Button color="inherit" component={Link} to={'/signup'}>Signup</Button>
              <Button color="inherit" component={Link} to={'/login'}>Login</Button>
            </div>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)