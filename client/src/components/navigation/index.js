import {
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Hidden,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem>
          <Link to="settings" component={RouterLink} sx={{ width: "100%" }}>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary={"settings"}
                sx={{
                  color: "black",
                  textAlign: "right",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link to="/" component={RouterLink} sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", flexGrow: 1 }}
            >
              Movies recommendations
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Link component={RouterLink} to="settings">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Settings
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
