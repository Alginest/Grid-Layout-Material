import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}))
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Aldin Durakovic
        </Typography>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
