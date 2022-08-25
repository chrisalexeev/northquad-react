import { useDispatch, useSelector} from "react-redux";

import { Button } from "@mui/material";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "./App.css";
import { TopNav } from "./features/topNav/TopNav";
import { SongList } from "./features/songList/SongList";

import { SongDetailsDialog } from "./features/songDetailsDialog/SongDetailsDialog";

import { selectSettings, setIsOpen } from "./features/settings/settingsSlice";
import { SearchBar } from "./features/searchBar/SearchBar";


function App() {

  const settings = useSelector(selectSettings);

  const theme = createTheme({
    palette: {
      mode: settings.theme,
    },
  });

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(setIsOpen(true));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <TopNav />
        <br />
        <SearchBar />
        <SongList />
        <br />
        <Button variant="contained" onClick={handleClickOpen}>
          Add Song
        </Button>
        <SongDetailsDialog />
      </div>
    </ThemeProvider>
  );
}

export default App;
