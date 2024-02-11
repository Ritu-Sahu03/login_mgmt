import React , {useState} from "react";
import { Grid, Paper, Typography, Menu, MenuItem, IconButton } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Link, useNavigate } from 'react-router-dom';
import Homepage from "./homepage";
import logo from "../Assets/logo.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    navigate('/login');
    handleClose();
  };

  const handleSignUp = () => {
    navigate('/register');
    handleClose();
  };

  return (
    <Grid container alignItems={"center"}>
      <Grid>
        <img src={logo} alt="logo" width={100} height="auto"></img>
      </Grid>
      <Grid>
      <Link component={Homepage} to="/home" style={{textDecoration:"none"}}>
        <Typography >
          StayHive
        </Typography>
      </Link>
      </Grid>
      <Typography sx={{ ml: "30%" }}>Stays</Typography>
      <Typography sx={{ ml: "2%" }}>Property</Typography>
      <Typography sx={{ ml: "2%" }}>Explore</Typography>
      <Typography sx={{ ml: "30%", mr:"2%" }}>Feedback</Typography>
      <Grid>
      {/* <Link style={{textDecoration:"none"}}><Typography >Profile</Typography></Link> */}
      <Link style={{textDecoration:"none"}} onClick={handleClick}><AccountCircleIcon/></Link>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSignIn} >Sign In</MenuItem>
        <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
      </Menu>
      </Grid>

    </Grid>
  );
};
export default Navbar;
