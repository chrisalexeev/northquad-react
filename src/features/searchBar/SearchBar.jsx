import { useRef, useState } from "react";
import {
  TextField,
  List,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { addSong } from "../songList/songListSlice";
import { useOutsideAlerter } from "../../util";

import "./searchBar.css";
import { useDispatch } from "react-redux";

export function SearchBar() {
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef();

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setIsOpen(false);
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSearch = async (e) => {
    if (e.target.value.length === 0) {
      setIsOpen(false);
      return;
    }
    if (!isOpen) {
      setIsOpen(true);
    }
    const url = `${process.env.REACT_APP_API_ENDPOINT}?query=${e.target.value}`;
    const res = await fetch(url);
    const data = await res.json();
    setSearchResults(data);
  };

  const handleSearchFocus = (e) => {
    if (e.target.value.length === 0) {
      return;
    }
    setIsOpen(true);
  };

  const handleAdd = (sr) => {
    dispatch(addSong(sr));
    setSearchResults([]);

    if (inputRef) {
      inputRef.current.value = "";
    }
  };

  return (
    <div
      style={{
        width: 300 * 0.95,
        margin: "auto",
      }}
    >
      <TextField
        id="spotify-search"
        inputRef={inputRef}
        label="Search songs"
        type="search"
        variant="filled"
        onChange={handleSearch}
        onFocus={handleSearchFocus}
        sx={{
          width: "100%",
        }}
      />
      <List
        id="basic-menu"
        dense={true}
        ref={wrapperRef}
        sx={{
          display: isOpen ? "block" : "none",
          position: "absolute",
          zIndex: 99,
          width: 300 * 0.95,
          bgcolor: "background.paper",
        }}
      >
        {searchResults.map((sr, index) => {
          return (
            <ListItemButton key={index} onClick={handleClose}>
              <ListItemText
                primary={sr.title}
                secondary={
                  <>
                    <Typography
                      sx={{
                        display: "inline",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {sr.artist}
                    </Typography>
                    {sr.album && ` - ${sr.album}`}
                  </>
                }
                key={sr.id}
                onClick={() => handleAdd(sr)}
              />
              <AddIcon />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
}
