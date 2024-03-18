import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Link variant="h6" sx={{ flexGrow: 1 }} href="/">
            Home
          </Link>
          <Link variant="h6" sx={{ flexGrow: 1 }} href="/dashboard">
            Dashboard
          </Link>
          <Link variant="h6" sx={{ flexGrow: 1 }} href="/about">
            About
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
