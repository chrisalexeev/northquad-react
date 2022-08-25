import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

import { addSong, editSong } from "../songList/songListSlice";
import { useState } from "react";

export function SongDetails({ title, artist, album, id, setIsOpen }) {
  const [song, setSong] = useState({
    title,
    artist,
    album,
    id,
  });

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addSong(song));
    dispatch(setIsOpen(false));
  };

  const handleSave = () => {
    dispatch(editSong(song));
    dispatch(setIsOpen(false)); // DRY
  };

  return (
    <>
      <TextField
        label="Title"
        variant="filled"
        onChange={(e) => {
          setSong((prev) => {
            return { ...prev, title: e.target.value };
          });
        }}
        defaultValue={title}
      />
      <TextField
        label="Artist"
        variant="filled"
        onChange={(e) => {
          setSong((prev) => {
            return { ...prev, artist: e.target.value };
          });
        }}
        defaultValue={artist}
      />
      <TextField
        label="Album"
        variant="filled"
        onChange={(e) => {
          setSong((prev) => {
            return { ...prev, album: e.target.value };
          });
        }}
        defaultValue={album}
      />
      <div style={{ margin: "10px auto" }}>
        
      {id !== null && id !== undefined ? (
        <Button onClick={handleSave}>Save</Button>
      ) : (
        <Button onClick={handleAdd}>Add</Button>
      )}
      </div>
    </>
  );
}
