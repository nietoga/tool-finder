import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="relative" color="inherit">
        <Toolbar>
          <Link variant="h6" href="/dashboard">
            Dashboard
          </Link>
          <Link variant="h6" href="/about" marginLeft={1}>
            About
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
