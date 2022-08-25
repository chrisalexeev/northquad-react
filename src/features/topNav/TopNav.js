import { useDispatch, useSelector } from "react-redux";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { selectSettings, setTheme } from "../settings/settingsSlice";

export function TopNav() {
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(setTheme(settings.theme === "light" ? "dark" : "light"));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Traxx
        </Typography>
        <IconButton
          onClick={handleThemeChange}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ position: "absolute", right: 0 }}
        >
          {settings.theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}
